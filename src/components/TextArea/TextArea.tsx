import React from 'react';
import "./TextArea.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {

}

const TextArea = ({...inputProps }) => (
   <textarea {...inputProps}
      className={['textArea'].join(' ')}
   />
);

export default TextArea;