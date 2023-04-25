import React, { PropsWithChildren } from "react";

type BorderProps = {
   all?: boolean;
   top?: boolean;
   right?: boolean;
   bottom?: boolean;
   left?: boolean;
 };

export interface StackProps extends PropsWithChildren {
   children?: React.ReactNode;
   as?: keyof JSX.IntrinsicElements;
   className?: string;
   variant?: 'blank' | 'card' | 'slip';
   alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
   justifyContent?: 'start' | 'end' | 'center' | 'between';
   border?: BorderProps;
   gap?: 0 | 1 | 2 | 3 | 4 | 5;
   padding?: 0 | 1 | 2 | 3 | 4 | 5;
   area?: string;
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
      className,
      variant = 'blank',
      border,
      vertical = false,
      wFull = false,
      hFull = false,
      wMin, wMax, hMin, hMax,
      gap, padding,
      area,
      alignItems, justifyContent,
      ...props
}: StackProps) => {
   const Tag = as;
   const borderClasses = [
      border?.all && "border--all",
      border?.top && "border--top",
      border?.right && "border--right",
      border?.bottom && "border--bottom",
      border?.left && "border--left",
    ].filter(Boolean).join(" ");
   return (
      <Tag
         className={[
                     'stack',
                     `variant--${variant}`,
                     `alignItems--${alignItems}`,
                     `justifyContent--${justifyContent}`,
                     borderClasses,
                     gap ? `gap--${gap}` : undefined,
                     padding ? `padding--${padding}` : undefined,
                     wFull ? 'w-full' : undefined,
                     hFull ? 'h-full' : undefined,
                     vertical ? 'flex-col' : undefined,
                     className,
                     ].join(' ')}
         style={{
            minWidth: wMin, maxWidth:wMax,
            minHeight:hMin, maxHeight:hMax,
            gridArea:area,
         }} {...props}>   
            {children}
      </Tag>
   );
};

export default Stack;