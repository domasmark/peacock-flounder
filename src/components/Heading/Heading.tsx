import React, { PropsWithChildren } from "react";

export interface HeadingProps extends PropsWithChildren {
  children: string | React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';
  size?: 'largest' | 'larger' | 'large' | 'medium' | 'small' | 'tiny';
  secondary?: boolean;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
      children = undefined,
      as = 'h1',
      size = 'medium',
      secondary,
      className,
      ...props
}: HeadingProps) => {
   const Tag = as;
   return (
      <Tag
         className={[
                     'heading',
                     `size--${size}`,
                     secondary && 'secondary',
                     className,
                     ].join(' ')}
         style={{
         }} {...props}>   
            {children}
      </Tag>
   );
};

export default Heading;