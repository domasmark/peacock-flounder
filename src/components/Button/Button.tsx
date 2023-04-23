import { Placement } from "@floating-ui/react";
import React from "react";
import Tooltip from "../Tooltip"

export interface ButtonProps {
  label?: string;
  children?: string;
  helpText?: string;
  variant?: 'strong' | 'light' | 'transparent';
  selected?: boolean;
  icon?: JSX.Element;
  labelPlacement?: 'start' | 'end' | 'tooltip';
  tooltipPlacement?: Placement;
  wFull?: boolean;
  onClick?: () => void;
}

const Button = ({
      label,
      children,
      helpText,
      variant = 'strong',
      selected = false,
      icon,
      labelPlacement = 'end',
      tooltipPlacement,
      wFull = false,
      ...props
}: ButtonProps) => {
   const isIconButton = labelPlacement==='tooltip' && icon;
   const iconButtonClass = isIconButton ? 'icon-button' : undefined;
   const selectedClass = selected ? 'selected--true' : undefined;
   const wFullClass = wFull ? 'w-full' : undefined;
   const buttonText = (
      helpText ? (
         <div>
            <div>{label || children}</div>
            <div className="helpText">{helpText}</div>
         </div>
      ) : (label || children)
   );
   const button = (
      <button
            type='button'
            className={['button', `variant--${variant}`, selectedClass, iconButtonClass, wFullClass].join(' ')}
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
      <Tooltip label={label || children} helpText={helpText} placement={tooltipPlacement} >
         {button}
      </Tooltip> : button
   );
};

export default Button;