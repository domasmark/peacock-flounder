import React, { PropsWithChildren } from "react";

export interface HeadingProps extends PropsWithChildren {
  children: string | React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'largest' | 'larger' | 'large' | 'default' | 'small' | 'tiny';
}

const Heading: React.FC<HeadingProps> = ({
      children = undefined,
      as = 'h1',
      size = 'default',
      ...props
}: HeadingProps) => {
   const Tag = as;
   return (
      <Tag
         className={[
                     'heading',
                     `size--${size}`,
                     ].join(' ')}
         style={{
         }} {...props}>   
            {children}
      </Tag>
   );
};

export default Heading;