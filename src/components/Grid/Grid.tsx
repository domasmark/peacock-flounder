import React, { ReactNode } from 'react';

export interface GridProps {
  cols?: string;
  rows?: string;
  areas?: string[][];
  gap?: 'none' | 'tiny' | 'small' | 'medium' | 'large' | 'larger' | 'largest';
  className?: string;
  children: ReactNode;
}

const Grid = ({
  cols,
  rows,
  areas = [],
  gap = 'none',
  className,
  children,
}: GridProps) => {
  const gridStyle = {
    gridTemplateColumns: cols,
    gridTemplateRows: rows,
    gridTemplateAreas: areas.map(row => `"${row.join(' ')}"`).join('\n'),
    gap
  };

  return <div
            className={['pf-grid', gap ? `gap--${gap}` : undefined, className,].join(' ')}
            style={gridStyle}>
              {children}
          </div>;
};

export default Grid;