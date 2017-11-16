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
import React, { Children, cloneElement } from 'react';
import { createStyledComponent } from '../styles';
import FormFieldMessage from './FormFieldMessage';
import FormFieldLabel from './FormFieldLabel';

type Props = {
  /** Caption associated with the input element */
  caption?: React$Element<*>,
  /** Applies "required" styling to the caption element */
  captionIsRequiredIndicator?: boolean,
  /** Form input element(s) or a function that renders form input element(s)*/
  children: React$Node | ((props: Object) => React$Node),
  /** Visually hide label, though available for assistive technologies */
  hideLabel?: boolean,
  /** Label associated with the input element */
  label: string,
  /** Message associated with the input element */
  message?: string,
  /** Available variants */
  variant?: 'success' | 'warning' | 'danger'
};

const Root = createStyledComponent(
  'div',
  {},
  {
    displayName: 'FormField',
    includeStyleReset: true
  }
);

/**
 * FormField component
 */
export default function FormField({
  caption,
  captionIsRequiredIndicator,
  children,
  hideLabel,
  label,
  message,
  variant,
  ...restProps
}: Props) {
  const rootProps = {
    ...restProps
  };

  const formFieldLabelProps = {
    caption,
    captionIsRequiredIndicator,
    text: label,
    hidden: hideLabel
  };

  const formFieldMessageProps = {
    message,
    variant
  };

  const inputProps = {
    variant
  };

  const input = Children.map(children, child =>
    cloneElement(child, inputProps)
  );

  return (
    <Root {...rootProps}>
      <FormFieldLabel {...formFieldLabelProps}>{input}</FormFieldLabel>
      <FormFieldMessage {...formFieldMessageProps} />
    </Root>
  );
}
