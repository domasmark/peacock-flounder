import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {

}

const TextArea = ({...inputProps }) => (
   <textarea {...inputProps}
      className={['input textArea'].join(' ')}
   />
);

export default TextArea;