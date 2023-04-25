import React, { ReactNode, InputHTMLAttributes } from 'react';
import { IconAlertFilled } from '../Icons';

interface LabelProps {
  children: ReactNode | string;
  label: string;
  description?: string;
  error?: boolean;
  helpText?: string;
  className?: string;
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
   id: string;
 };
 
const Label: React.FC<LabelProps> = ({ children, label, description, error, helpText, className }) => {
  const id = label.toLowerCase().replace(/\s+/g, '').replace(/[^a-zA-Z0-9 ]/g, '');
  const uniqueId = id + Math.floor(Math.random() * 10000);
  const errorClass = error ? 'status--error' : undefined;
  const helperTextId = 'helperText' +  Math.floor(Math.random() * 10000);

  return (
   <div className={['label',errorClass, className].join(' ')}>
    <label htmlFor={uniqueId}>
      <div className='title'>{label}</div>
      {description && (<div className='description mb-1'>{description}</div>)}
     </label>
     {React.Children.map(children, (child) => {
       if (React.isValidElement(child)) {
         return React.cloneElement(child, { id: uniqueId, 'aria-invalid':error, 'aria-describedby':helperTextId } as InputProps);
       }
       return child;
     })}
      {helpText && (<div id={helperTextId} className='helpText flex gap-1 mt-1'>
         {error && <IconAlertFilled aria-hidden="true"/>} 
         {helpText}
      </div>)}
   </div>
 );
};

export default Label;