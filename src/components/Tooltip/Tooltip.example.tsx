import * as React from 'react';
import Button from "../Button";
import { Tooltip, TooltipTrigger, TooltipContent } from "./Tooltip";

const UncontrolledTooltip: React.FC = () => {
   return (
     <div>
       <h1>Floating UI — Tooltip</h1>
       <Tooltip placement='bottom'>
         <TooltipTrigger><Button label='labas'></Button></TooltipTrigger>
         <TooltipContent>My tooltip</TooltipContent>
       </Tooltip>
     </div>
   );
 };
 export default UncontrolledTooltip;