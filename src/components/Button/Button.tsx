import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
  helpText: string;
  style?: 'strong' | 'light' | 'transparent';
  selected?: boolean;
  icon?: JSX.Element; //React.ReactNode;
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
   const mode = selected ? 'button-selected--true' : '';
   return (
      <button
         type='button'
         className={['button', `button-style--${style}`, mode].join(' ')}
         {...props}
      >
      {labelPlacement === 'end' && icon}
      {labelPlacement === 'tooltip' && icon ? icon : (
         <div>
            {label}
            {helpText ? <div className="helpText">{helpText}</div> : ''}
         </div>
      )}
      {labelPlacement === 'start' && icon}
      </button>
   );
};

export default Button;