import React, { PropsWithChildren } from "react";

export interface StackProps extends PropsWithChildren {
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  style?: 'blank' | 'box' | 'board';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  justifyContent?: 'start' | 'end' | 'center' | 'between';
  border?: 'none' | 'all' | 'top' | 'bottom' | 'left' | 'right' | 'x' | 'y'; 
  gap?: 'none' | 1 | 2;
  vertical?: boolean;
  wFull?: boolean;
  hFull?: boolean;
  wMin?: string;
  hMin?: string;
  wMax?: string;
  hMax?: string;
}

const Stack: React.FC<StackProps> = ({
      children = undefined,
      as = 'div',
      style = 'blank',
      border = 'none',
      vertical = false,
      wFull = false,
      hFull = false,
      wMin, wMax, hMin, hMax,
      gap,
      alignItems, justifyContent,
      ...props
}: StackProps) => {
   const Tag = as;
   return (
      <Tag
         className={[
                     'stack',
                     `style--${style}`,
                     `alignItems--${alignItems}`,
                     `justifyContent--${justifyContent}`,
                     `border--${border}`,
                     gap ? `gap--${gap}` : undefined,
                     wFull ? 'w-full' : undefined,
                     hFull ? 'h-full' : undefined,
                     vertical ? 'flex-col' : undefined,
                     ].join(' ')}
         style={{
            minWidth: wMin, maxWidth:wMax,
            minHeight:hMin, maxHeight:hMax
         }} {...props}>   
            {children}
      </Tag>
   );
};

export default Stack;