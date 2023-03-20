import React, { PropsWithChildren, ReactNode } from "react";
import "./Stack.module.scss";

export interface StackProps extends PropsWithChildren {
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  style?: 'blank' | 'box' | 'board';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  border?: 'none' | 'all' | 'top' | 'bottom' | 'left' | 'right' | 'x' | 'y'; 
  vertical?: boolean;
  wFull?: boolean;
  hFull?: boolean;
}

const Stack: React.FC<StackProps> = ({
      children = undefined,
      as = 'div',
      style = 'blank',
      border = 'none',
      vertical = false,
      wFull = false,
      hFull = false,
      alignItems = 'flex-start',
      ...props
}: StackProps) => {
   const Tag = as;
   const verticalClass = vertical===true ? 'vertical' : undefined;
   const widthClass = wFull===true ? 'widthFull' : undefined;
   const heightClass = hFull===true ? 'heightFull' : undefined;
   return (
      <Tag className={[
                        'stack',
                        `style--${style}`,
                        `alignItems--${alignItems}`,
                        `border--${border}`,
                        widthClass,
                        heightClass,
                        verticalClass
                     ].join(' ')} {...props}>   
         {children}
      </Tag>
   );
};

export default Stack;