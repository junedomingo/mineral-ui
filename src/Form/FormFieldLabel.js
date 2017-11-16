/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React from 'react';
import { hideVisually } from 'polished';
import { createStyledComponent } from '../styles';

type Props = {
  /** Caption associated with the input element */
  caption?: React$Element<*>,
  /** Applies "required" styling to the caption element */
  captionIsRequiredIndicator?: boolean,
  /** Content of the component, typically a form input element */
  children?: React$Node,
  /** ID of associated input element */
  htmlFor?: string,
  /** Visually hidden, though available for assistive technologies */
  hidden?: boolean,
  /** Label text */
  text: string
};

export const componentTheme = (baseTheme: Object) => ({
  FormFieldLabel_color_text: baseTheme.color_gray_80,
  FormFieldLabel_fontSize: baseTheme.fontSize_ui,
  FormFieldLabel_fontWeight: baseTheme.fontWeight_semiBold,
  FormFieldLabel_marginBottom: baseTheme.space_stack_sm,

  FormFieldLabelCaption_fontSize: baseTheme.fontSize_mouse,
  FormFieldLabelCaption_color_text: baseTheme.color_gray_80,
  FormFieldLabelCaption_color_text_required: baseTheme.color_text_danger
});

const styles = {
  textWrapper: props => {
    const theme = componentTheme(props.theme);

    return {
      color: theme.FormFieldLabel_color_text,
      display: 'flex',
      fontSize: theme.FormFieldLabel_fontSize,
      fontWeight: theme.FormFieldLabel_fontWeight,
      justifyContent: 'space-between',
      marginBottom: theme.FormFieldLabel_marginBottom,
      ...(props.hidden ? hideVisually() : {}),
      '& > *': {
        alignSelf: 'flex-end',
        display: 'inline-block'
      }
    };
  },
  caption: props => {
    const { captionIsRequiredIndicator, theme: baseTheme } = props;
    const theme = componentTheme(baseTheme);

    return {
      color: captionIsRequiredIndicator
        ? theme.FormFieldLabelCaption_color_text_required
        : theme.FormFieldLabelCaption_color_text,
      fontSize: theme.FormFieldLabelCaption_fontSize
    };
  }
};

const Root = createStyledComponent(
  'label',
  {},
  {
    displayName: 'FormFieldLabel',
    includeStyleReset: true,
    rootEl: 'label'
  }
);
const TextWrapper = createStyledComponent('div', styles.textWrapper);
const Caption = createStyledComponent('span', styles.caption);

/**
 * FormFieldLabel component
 */
export default function FormFieldLabel({
  captionIsRequiredIndicator,
  children,
  hidden,
  text,
  caption,
  ...restProps
}: Props) {
  const rootProps = {
    ...restProps
  };

  const textWrapperProps = {
    hidden
  };

  const captionProps = {
    captionIsRequiredIndicator
  };

  return (
    <Root {...rootProps}>
      <TextWrapper {...textWrapperProps}>
        <span>{text}</span>
        {caption && <Caption {...captionProps}>{caption}</Caption>}
      </TextWrapper>
      {children}
    </Root>
  );
}
