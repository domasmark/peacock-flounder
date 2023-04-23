import React, { PropsWithChildren } from "react";

export interface TextProps extends PropsWithChildren {
  children: string | React.ReactNode;
  as?: 'p' | 'div' | 'span';
  small?: boolean;
}

const Text: React.FC<TextProps> = ({
      children = undefined,
      as = 'div',
      small = false,
      ...props
}: TextProps) => {
   const Tag = as;
   return (
      <Tag
         className={[
                     'typography',
                     small && 'small',
                     ].join(' ')}
         style={{
         }} {...props}>   
            {children}
      </Tag>
   );
};

export default Text;