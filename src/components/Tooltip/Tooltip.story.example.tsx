import * as React from 'react';
import Button from "../Button";
import Tooltip from "./Tooltip";

const UncontrolledTooltip: React.FC = () => {
  return (
      <Tooltip placement='right' label="bambukai 123" helpText='šokoladas'>
        <Button label='Tooltip!'/>
      </Tooltip>
  );
};
export default UncontrolledTooltip;