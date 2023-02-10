import * as React from 'react';
import Button from "../Button";
import { Tooltip, TooltipTrigger, TooltipContent } from "./Tooltip";

const UncontrolledTooltip: React.FC = () => {
   return (
       <Tooltip placement='bottom'>
         <TooltipTrigger><Button label='Tooltip!'/></TooltipTrigger>
         <TooltipContent>My tooltip</TooltipContent>
       </Tooltip>
   );
 };
 export default UncontrolledTooltip;