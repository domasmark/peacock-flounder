import React from 'react';
import "./Select.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {

}

const Select = ({...inputProps }) => (
   <select {...inputProps}
      className={['select'].join(' ')}
   >
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
   </select>
);

export default Select;