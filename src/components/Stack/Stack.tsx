import React, { PropsWithChildren, ReactNode } from "react";
import "./Stack.module.scss";

export interface StackProps extends PropsWithChildren {
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  vertical?: boolean;
  widthFull?: boolean;
  heightFull?: boolean;
}

const Stack: React.FC<PropsWithChildren> = ({
      children,
      as = 'div',
      vertical = false,
      widthFull = false,
      heightFull = false,
      ...props
}: StackProps) => {
   const Tag = as;
   const verticalClass = vertical===true ? 'vertical' : undefined;
   const widthClass = widthFull===true ? 'widthFull' : undefined;
   const heightClass = heightFull===true ? 'heightFull' : undefined;
   return (
      <Tag className={['stack', widthClass, heightClass, verticalClass].join(' ')} {...props}>   
         {children}
      </Tag>
   );
};

export default Stack;