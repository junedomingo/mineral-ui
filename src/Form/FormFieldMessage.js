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
import { createStyledComponent } from '../styles';

type Props = {
  message: string,
  variant?: 'success' | 'warning' | 'danger'
};

export const componentTheme = (baseTheme: Object) => ({
  FormFieldMessage_color_text: baseTheme.color_gray_80,
  FormFieldMessage_color_text_danger: baseTheme.color_text_danger,
  FormFieldMessage_color_text_success: baseTheme.color_text_success,
  FormFieldMessage_color_text_warning: baseTheme.color_text_warning,

  FormFieldMessage_fontSize: baseTheme.fontSize_mouse
});

const styles = {
  formFieldMessage: props => {
    const { theme: baseTheme, variant } = props;
    const theme = componentTheme(baseTheme);

    return {
      color: variant
        ? theme[`FormFieldMessage_color_text_${variant}`]
        : theme.FormFieldMessage_color_text,
      fontSize: theme.FormFieldMessage_fontSize
    };
  }
};

const Root = createStyledComponent('div', styles.formFieldMessage, {
  displayName: 'FormFieldMessage',
  includeStyleReset: true
});

/**
 * FormFieldMessage component
 */
export default function FormFieldMessage({
  message,
  variant,
  ...restProps
}: Props) {
  const rootProps = {
    variant,
    ...restProps
  };

  return <Root {...rootProps}>{message}</Root>;
}

// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alert_role
