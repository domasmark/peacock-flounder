import React from 'react';

const TextArea = ({...inputProps }) => (
   <textarea {...inputProps}
      className={['input textArea'].join(' ')}
   />
);

export default TextArea;