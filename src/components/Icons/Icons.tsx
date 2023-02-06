const fs = require('fs');
const path = require('path');

const inputDir = './svgs';
const outputDir = './components';

fs.readdir(inputDir, (err, files) => {
  if (err) throw err;
  
  files.forEach(file => {
    if (path.extname(file) === '.svg') {
      fs.readFile(`${inputDir}/${file}`, 'utf-8', (err, data) => {
        if (err) throw err;

        const componentName = path.basename(file, '.svg');
        const component = `
import React from 'react';

const ${componentName}: React.FC = () => {
  return (
    ${data}
  );
};

export default ${componentName};
`;

        fs.writeFile(`${outputDir}/${componentName}.tsx`, component, err => {
          if (err) throw err;
          console.log(`Created component ${componentName}`);
        });
      });
    }
  });
});