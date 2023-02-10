import React from "react";
import { Placement } from '@floating-ui/react';
import { TooltipBase, TooltipTrigger, TooltipContent } from "./TooltipBase";

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
         <TooltipContent>
            { helpText ? (
               <>
                  <div>{label}</div>
                  <div>{helpText}</div>
               </>
            ) : label}
         </TooltipContent>
       </TooltipBase>
   );
 };
 export default Tooltip;