import React from "react";
import { Placement } from '@floating-ui/react';
import { TooltipBase, TooltipTrigger, TooltipContent } from "./TooltipBase";
import "./Tooltip.module.scss";

export interface TooltipProps {
   children: JSX.Element;
   label: string;
   helpText?: string;
   placement?: Placement;
 }

const Tooltip = ({
   label,
   helpText,
   placement,
   children,
   ...props
}:TooltipProps) => {
   return (
       <TooltipBase placement={placement} {...props} >
         <TooltipTrigger>{children}</TooltipTrigger>
         <TooltipContent className='tooltip' >
            { helpText ? (
               <>
                  <div>{label}</div>
                  <div className="helpText">{helpText}</div>
               </>
            ) : label}
         </TooltipContent>
       </TooltipBase>
   );
 };
 export default Tooltip;