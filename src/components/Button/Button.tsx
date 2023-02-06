import React from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "../Tooltip/Tooltip";
import "./Button.module.scss";

export interface ButtonProps {
  label: string;
  helpText?: string;
  style?: 'strong' | 'light' | 'transparent';
  selected?: boolean;
  icon?: JSX.Element; //React.ReactNode;
  labelPlacement?: 'start' | 'end' | 'tooltip';
  tooltipPlacement?: 'top' | 'right' | 'bottom' | 'left' | 'top-start' | 'top-end' | 'right-start' | 'right-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end';
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
   const mode = selected ? 'button-selected--true' : '';
   return (
      <Tooltip placement={tooltipPlacement}>
         <TooltipTrigger>
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
         </TooltipTrigger>
         <TooltipContent>
            {label}
            {helpText ? <div className="helpText">{helpText}</div> : ''}
         </TooltipContent>
      </Tooltip>
   );
};

export default Button;