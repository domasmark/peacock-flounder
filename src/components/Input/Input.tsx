import React from 'react';
import "./Input.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {

}

const Input = ({...inputProps }) => (
   <input {...inputProps}
      className={['input'].join(' ')}
   />
);

export default Input;

// const Input: React.FC<Props> = ({}) => ();