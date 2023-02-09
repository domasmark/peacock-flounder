const fs = require('fs');
const path = require('path');

const inputDir = './svg';
const outputFile = './Icons.tsx';

async function convertSvgToComponent(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(`${inputDir}/${file}`, 'utf-8', (err, data) => {
      if (err) reject(err);

      const componentName = `Icon${path.basename(file, '.svg')}`;
      const component = `
const ${componentName}: React.FC = () => {
  return (
    ${data}
  );
};

export { ${componentName} };
`;

      resolve(component);
    });
  });
}

async function main() {
  fs.readdir(inputDir, async (err, files) => {
    if (err) throw err;
  
    let components = `import React from 'react';`;
  
    for (const file of files) {
      if (path.extname(file) === '.svg') {
        components += await convertSvgToComponent(file);
      }
    }
  
    fs.writeFile(outputFile, components, err => {
      if (err) throw err;
      console.log(`Created file ${outputFile}`);
    });
  });
}

main();