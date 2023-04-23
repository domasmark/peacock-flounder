import React, { ReactNode, InputHTMLAttributes } from 'react';
import { IconAlertFilled } from '../Icons';

interface LabelProps {
  children: ReactNode;
  label: string;
  description?: string;
  status?: "default" | "error" | "warning";
  helperText?: string;
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
   id: string;
 };
 
const Label: React.FC<LabelProps> = ({ children, label, description, status, helperText }) => {
  const id = label.toLowerCase().replace(/\s+/g, '').replace(/[^a-zA-Z0-9 ]/g, '');
  const uniqueId = id + Math.floor(Math.random() * 10000);

  return (
   <label htmlFor={uniqueId} className={['label',`status--${status}`].join(' ')}>
     <div className='text-ferrum-5t'>{label}</div>
     <div className='text-sm text-ferrum-7t mb-1'>{description}</div>
     {React.Children.map(children, (child) => {
       if (React.isValidElement(child)) {
         return React.cloneElement(child, { id: uniqueId } as InputProps);
       }
       return child;
     })}
      {helperText !== "" && (<div className='text-sm text-rose-500 flex gap-1 mt-1'>
         {status === "error" && <IconAlertFilled/>} 
         {helperText}
      </div>)}
   </label>
 );
};

export default Label;