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
   const mode = selected ? 'button-selected--true' : undefined;
   const tooltip = labelPlacement==='tooltip' && icon ? 'icon-button' : undefined;
   return (
      <Tooltip placement={tooltipPlacement}>
         <TooltipTrigger>
            <button
               type='button'
               className={['button', `button-style--${style}`, mode, tooltip].join(' ')}
               {...labelPlacement === 'tooltip' ? {'aria-label' : [label, helpText].join(', ')} : undefined}
               {...props}
            >
               {labelPlacement === 'end' && icon}
               {labelPlacement === 'tooltip' && <span>{icon}</span> ? (
               <span>{icon}</span>
               ) : (
               <div>
                  {label}
                  {helpText ? <div className="helpText">{helpText}</div> : ''}
               </div>
            )}
            {labelPlacement === 'start' && icon}
            </button>
         </TooltipTrigger>
         {labelPlacement === 'tooltip' ? (
         <TooltipContent>
            {label}
            {helpText ? <div className="helpText">{helpText}</div> : ''}
         </TooltipContent>
         ) : undefined}
      </Tooltip>
   );
};

export default Button;