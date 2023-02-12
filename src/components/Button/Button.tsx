import { Placement } from "@floating-ui/react";
import React from "react";
import Tooltip from "../Tooltip";
import "./Button.module.scss";

export interface ButtonProps {
  label: string;
  helpText?: string;
  style?: 'strong' | 'light' | 'transparent';
  selected?: boolean;
  icon?: JSX.Element; //React.ReactNode;
  labelPlacement?: 'start' | 'end' | 'tooltip';
  tooltipPlacement?: Placement;
  onClick?: () => void;
}

const Button = ({
      label,
      helpText,
      style = 'strong',
      selected = false,
      icon,
      labelPlacement = 'end',
      tooltipPlacement,
      ...props
}: ButtonProps) => {
   const isIconButton = labelPlacement==='tooltip' && icon;
   const iconButtonClass = isIconButton ? 'icon-button' : undefined;
   const selectedClass = selected ? 'button-selected--true' : undefined;
   const buttonText = (
      helpText ? (
         <div>
            <div>{label}</div>
            <div className="helpText">{helpText}</div>
         </div>
      ) : label
   );
   const button = (
      <button
            type='button'
            className={['button', `button-style--${style}`, selectedClass, iconButtonClass].join(' ')}
            {...isIconButton && {'aria-label' : [label, helpText].join(', ')}}
            {...props}
         >
            {labelPlacement === 'end' && icon}
            {isIconButton && icon ? <span>{icon}</span> : buttonText }
         {labelPlacement === 'start' && icon}
      </button>
   );

   return (
      isIconButton ?
      <Tooltip label={label} helpText={helpText} placement={tooltipPlacement} >
         {button}
      </Tooltip> : button
   );
};

export default Button;