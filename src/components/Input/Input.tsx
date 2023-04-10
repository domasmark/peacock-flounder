import React from 'react';

// interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
// }

const Input = ({...inputProps }) => (
   <input {...inputProps}
      className={['input'].join(' ')}
   />
);

export default Input;

// const Input: React.FC<Props> = ({}) => ();