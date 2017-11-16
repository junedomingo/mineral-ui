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
import React, { cloneElement } from 'react';
import { createStyledComponent, getNormalizedValue, pxToEm } from '../styles';
import IconDanger from '../Icon/IconDanger';
import IconSuccess from '../Icon/IconSuccess';
import IconWarning from '../Icon/IconWarning';

type Props = {
  /** Initial value of the control. Primarily for use with uncontrolled components */
  defaultValue?: string,
  /** Disables the TextInput */
  disabled?: boolean,
  /** Icon located at the start of the input */
  iconStart?: React$Element<*>,
  /** Icon located at the end of the input */
  iconEnd?: React$Element<*>,
  /** ref for the input */
  inputRef?: (node: ?React$Component<*, *>) => void,
  /** Props to be applied directly to the input element, rather than the wrapper */
  inputProps?: Object,
  /** Indicates that the value of the element is invalid */
  invalid?: boolean,
  /** The name of the control, which is submitted with the form data */
  name?: string,
  /** Function called when input value changes */
  onChange?: (event: SyntheticEvent<*>) => void,
  /** TODO: Should we add other handlers (onFocus, onBlur, onKeyDown) to lessen reliance on inputProps? */
  /** A hint to the user of what can be entered in the control */
  placeholder?: string,
  /** Indicates that the user cannot modify the value of the control */
  readOnly?: boolean,
  /** Indicates that the user must fill in a value before submitting a form */
  required?: boolean,
  /** Available sizes */
  size?: 'small' | 'medium' | 'large' | 'jumbo',
  /** Type of control. While there are a variety of HTML input types, this component is designed primarily for text input types. Though this property will accept any value, the styling may not be appropriate for all types. */
  type?: string,
  /** The initial value of the control. Primarily for use with controlled components.  If this prop is specified, an onChange handler must also be specified.  Also see `defaultValue`. */
  value?: string,
  /** Available variants */
  variant?: 'success' | 'warning' | 'danger'
};

export const componentTheme = (baseTheme: Object) => ({
  TextInput_backgroundColor: baseTheme.backgroundColor_input,
  TextInput_borderColor: baseTheme.borderColor,
  TextInput_borderColor_active: baseTheme.borderColor,
  TextInput_borderColor_focus: baseTheme.borderColor,
  TextInput_borderColor_danger: baseTheme.borderColor_danger,
  TextInput_borderColor_success: baseTheme.borderColor_success,
  TextInput_borderColor_warning: baseTheme.borderColor_warning,
  TextInput_borderRadius: baseTheme.borderRadius_1,
  TextInput_borderWidth: '1px',
  TextInput_boxShadow_active: `0 0 0 1px ${baseTheme.color_white}, 0 0 0 2px ${baseTheme.borderColor_focus}`,
  TextInput_boxShadow_active_danger: `0 0 0 1px ${baseTheme.color_white}, 0 0 0 2px ${baseTheme.borderColor_danger}`,
  TextInput_boxShadow_active_success: `0 0 0 1px ${baseTheme.color_white}, 0 0 0 2px ${baseTheme.borderColor_success}`,
  TextInput_boxShadow_active_warning: `0 0 0 1px ${baseTheme.color_white}, 0 0 0 2px ${baseTheme.borderColor_warning}`,
  TextInput_boxShadow_focus: `0 0 0 1px ${baseTheme.color_white}, 0 0 0 2px ${baseTheme.borderColor_focus}`,
  TextInput_boxShadow_focus_danger: `0 0 0 1px ${baseTheme.color_white}, 0 0 0 2px ${baseTheme.borderColor_danger}`,
  TextInput_boxShadow_focus_success: `0 0 0 1px ${baseTheme.color_white}, 0 0 0 2px ${baseTheme.borderColor_success}`,
  TextInput_boxShadow_focus_warning: `0 0 0 1px ${baseTheme.color_white}, 0 0 0 2px ${baseTheme.borderColor_warning}`,
  TextInput_color_text: baseTheme.color_gray_80,
  TextInput_color_placeholder: baseTheme.color_gray_60,
  TextInput_fontSize: baseTheme.fontSize_ui,
  TextInput_height_small: baseTheme.size_small,
  TextInput_height_medium: baseTheme.size_medium,
  TextInput_height_large: baseTheme.size_large,
  TextInput_height_jumbo: baseTheme.size_jumbo,
  TextInput_paddingHorizontal: baseTheme.space_inset_md,

  TextInputIcon_fill: baseTheme.color_gray_40,
  TextInputIcon_fill_danger: baseTheme.color_text_danger,
  TextInputIcon_fill_success: baseTheme.color_text_success,
  TextInputIcon_fill_warning: baseTheme.color_text_warning,
  TextInputIcon_marginHorizontal: baseTheme.space_inline_sm
});

const styles = {
  input: props => {
    const {
      disabled,
      iconEnd,
      iconStart,
      readOnly,
      size,
      theme: baseTheme,
      variant
    } = props;
    const theme = componentTheme(baseTheme);
    const iconWidthIncludingMargin = `
      ${parseFloat(pxToEm(24)) +
        parseFloat(theme.TextInputIcon_marginHorizontal) * 2}em`;

    return {
      backgroundColor:
        disabled || readOnly
          ? baseTheme.backgroundColor_disabled
          : theme.TextInput_backgroundColor,
      borderColor:
        variant && !disabled && !readOnly
          ? theme[`TextInput_borderColor_${variant}`]
          : theme.TextInput_borderColor,
      borderRadius: theme.TextInput_borderRadius,
      borderStyle: 'solid',
      borderWidth: theme.TextInput_borderWidth,
      color: (() => {
        return disabled
          ? baseTheme.color_text_disabled
          : theme.TextInput_color_text;
      })(),
      fontFamily: 'inherit',
      fontSize: getNormalizedValue(
        theme.TextInput_fontSize,
        baseTheme.fontSize_ui
      ),
      height: theme[`TextInput_height_${size}`],
      outline: 0,
      paddingBottom: 0,
      paddingLeft: iconStart
        ? iconWidthIncludingMargin
        : `${theme.TextInput_paddingHorizontal}`,
      paddingRight:
        iconEnd || variant
          ? `${iconWidthIncludingMargin}`
          : `${theme.TextInput_paddingHorizontal}`,
      paddingTop: 0,
      width: '100%',

      '&::placeholder': {
        color: theme.TextInput_color_placeholder,
        fontStyle: 'italic'
      },

      '&:focus': {
        borderColor: theme.TextInput_borderColor_focus,
        boxShadow: variant
          ? theme[`TextInput_boxShadow_focus_${variant}`]
          : theme.TextInput_boxShadow_focus
      },

      '&:active': {
        borderColor: theme.TextInput_borderColor_active,
        boxShadow: disabled
          ? 'none'
          : variant
            ? theme[`TextInput_boxShadow_active_${variant}`]
            : theme.TextInput_boxShadow_active
      },

      // TODO: Consider...
      '&:invalid': {},
      '&:optional': {},
      '&:required': {}
    };
  },
  root: props => {
    const { theme: baseTheme, variant } = props;
    const theme = componentTheme(baseTheme);

    return {
      alignItems: 'center',
      display: 'flex',
      position: 'relative',

      '& [role="img"]': {
        fill: theme.TextInputIcon_fill,
        margin: `0 ${theme.TextInputIcon_marginHorizontal}`,
        pointerEvents: 'none',
        position: 'absolute',

        '&:first-child': {
          left: 0
        },

        '&:last-child': {
          fill: variant
            ? theme[`TextInputIcon_fill_${variant}`]
            : theme.TextInputIcon_fill,
          right: 0
        }
      }
    };
  }
};

const Root = createStyledComponent('div', styles.root, {
  displayName: 'TextInput',
  includeStyleReset: true
});

const Input = createStyledComponent('input', styles.input, {
  displayName: 'Input',
  rootEl: 'input'
});

const variantIcons = {
  danger: <IconDanger />,
  success: <IconSuccess />,
  warning: <IconWarning />
};

function getIcons({
  disabled,
  iconStart,
  iconEnd,
  readOnly,
  variant,
  variantIcons
}) {
  if (disabled || readOnly) {
    return [];
  } else {
    const startIcon =
      iconStart &&
      cloneElement(iconStart, {
        size: pxToEm(24),
        key: 'iconStart'
      });

    const endIconSource = variant
      ? variantIcons[variant]
      : iconEnd ? iconEnd : null;

    const endIcon =
      endIconSource &&
      cloneElement(endIconSource, {
        size: pxToEm(24),
        key: 'iconEnd'
      });

    return [startIcon, endIcon];
  }
}

/**
 * TextInput component
 */
export default function TextInput({
  disabled,
  defaultValue,
  iconEnd,
  iconStart,
  inputRef,
  inputProps: otherInputProps,
  invalid,
  name,
  onChange,
  placeholder,
  readOnly,
  required,
  size = 'large',
  type = 'text',
  value,
  variant,
  ...restProps
}: Props) {
  const rootProps = {
    variant,
    ...restProps
  };

  const inputProps = {
    'aria-invalid': invalid,
    'aria-required': required,
    disabled,
    defaultValue,
    iconEnd,
    iconStart,
    innerRef: ref => {
      if (inputRef) {
        inputRef(ref);
      }
    },
    name,
    onChange,
    placeholder,
    readOnly,
    required,
    size,
    type,
    value,
    variant,
    ...otherInputProps
  };

  const [startIcon, endIcon] = getIcons({
    disabled,
    iconStart,
    iconEnd,
    readOnly,
    variant,
    variantIcons
  });

  return (
    <Root {...rootProps}>
      {startIcon}
      <Input {...inputProps} />
      {endIcon}
    </Root>
  );
}
