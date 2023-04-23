import React, { ReactNode } from 'react';

export interface GridProps {
  columns?: string;
  rows?: string;
  areas?: string[][];
  gap?: string;
  children: ReactNode;
}

const Grid = ({
  columns,
  rows,
  areas = [],
  gap = '0',
  children,
}: GridProps) => {
  const gridStyle = {
    gridTemplateColumns: columns,
    gridTemplateRows: rows,
    gridTemplateAreas: areas.map(row => `"${row.join(' ')}"`).join('\n'),
    gap
  };

  return <div className='pf-grid' style={gridStyle}>{children}</div>;
};

export default Grid;