import React from 'react';

const Input = ({...inputProps }) => (
   <input {...inputProps}
      className={['input'].join(' ')}
   />
);

export default Input;