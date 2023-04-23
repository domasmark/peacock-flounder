import React, { PropsWithChildren } from "react";

export interface TextProps extends PropsWithChildren {
  children: string | React.ReactNode;
  as?: 'p' | 'div' | 'span' | 'ul' | 'ol';
  small?: boolean;
  className?: string;
}

const Text: React.FC<TextProps> = ({
      children = undefined,
      as = 'div',
      small = false,
      className,
      ...props
}: TextProps) => {
   const Tag = as;
   return (
      <Tag
         className={[
                     'typography',
                     small && 'small',
                     className,
                     ].join(' ')}
         style={{
         }} {...props}>   
            {children}
      </Tag>
   );
};

export default Text;