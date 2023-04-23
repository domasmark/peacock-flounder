import React, { ReactNode, InputHTMLAttributes } from 'react';
import { IconAlertFilled } from '../Icons';

interface LabelProps {
  children: ReactNode;
  label: string;
  description?: string;
  error?: boolean;
  helperText?: string;
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
   id: string;
 };
 
const Label: React.FC<LabelProps> = ({ children, label, description, error, helperText }) => {
  const id = label.toLowerCase().replace(/\s+/g, '').replace(/[^a-zA-Z0-9 ]/g, '');
  const uniqueId = id + Math.floor(Math.random() * 10000);
  const errorClass = error ? 'status--error' : undefined;
  const helperTextId = 'helperText' +  Math.floor(Math.random() * 10000);

  return (
   <div className={['label',errorClass].join(' ')}>
    <label htmlFor={uniqueId}>
      <div className='text-sm text-ferrum-5t'>{label}</div>
      {description && (<div className='text-sm text-ferrum-7t mb-1'>{description}</div>)}
     </label>
     {React.Children.map(children, (child) => {
       if (React.isValidElement(child)) {
         return React.cloneElement(child, { id: uniqueId, 'aria-invalid':error, 'aria-describedby':helperTextId } as InputProps);
       }
       return child;
     })}
      {helperText && (<div id={helperTextId} className='helperText'>
         {error && <IconAlertFilled aria-hidden="true"/>} 
         {helperText}
      </div>)}
   </div>
 );
};

export default Label;