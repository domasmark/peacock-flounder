import React, { PropsWithChildren, ReactNode } from "react";
import "./Stack.module.scss";

export interface StackProps extends PropsWithChildren {
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  style: 'blank' | 'box' | 'board';
  vertical?: boolean;
  wFull?: boolean;
  hFull?: boolean;
}

const Stack: React.FC<PropsWithChildren> = ({
      children,
      as = 'div',
      style = 'blank',
      vertical = false,
      wFull = false,
      hFull = false,
      ...props
}: StackProps) => {
   const Tag = as;
   const verticalClass = vertical===true ? 'vertical' : undefined;
   const widthClass = wFull===true ? 'widthFull' : undefined;
   const heightClass = hFull===true ? 'heightFull' : undefined;
   return (
      <Tag className={['stack',`style--${style}`, widthClass, heightClass, verticalClass].join(' ')} {...props}>   
         {children}
      </Tag>
   );
};

export default Stack;