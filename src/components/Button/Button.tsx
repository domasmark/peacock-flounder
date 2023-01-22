import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
  helpText: string;
  style?: 'strong' | 'light' | 'transparent';
  selected?: boolean;
  icon?: React.ReactNode;
  labelPlacement?: 'start' | 'end' | 'tooltip';
  onClick?: () => void;
}

const Button = ({
      label,
      helpText,
      style = 'strong',
      selected = false,
      icon,
      labelPlacement = 'end',
      ...props
}: ButtonProps) => {
   const mode = selected ? 'button--selected' : 'button--not-selected';
   return (
      <button
         type='button'
         className={['button', `button-style--${style}`, mode].join(' ')}
         {...props}
      >
         {label}
      </button>
   );
};

export default Button;