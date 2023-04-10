import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
}

// const colors = [
//    { value: '#aaabbb' },
//    { value: '#123456' },
//    { value: '#fff032' },
//    { value: '#ccc111' },
//    { value: '#654321' },
//    { value: '#121212' },
//  ];

interface Color {
   value: string;
   name?: string;
} 
const colorsShadeBlue: Color[] = [];
const colorsTintBlue: Color[] = [];

const colorsShadeDark: Color[] = [];
const colorsTintDark: Color[] = [];

interface ColorRectProps {
   value: string;
   name?: string;
}
const ColorRect = ({value, name}: ColorRectProps) => (
   <div className='flex flex-row items-center gap-2'>
      <div className="inline-block w-20 h-10" style={{background: value}}/>
      <div className="text-gray-400 text-sm pt-1">{name}</div>
      <div className="text-gray-600 text-sm pt-1">{value}</div>
   </div>
);

//blues

for (let i = 0; i < 5; i++) {
   let index: number = 11 + i;
   let hue: number = 225+(i*-1);
   let saturation: number = 87;
   let lightness: number = 49*(1 / (0.2 + Math.exp(i*0.25)));
   let hsl: string = `hsl(${hue}deg, ${saturation}%, ${lightness}%)`;
   colorsShadeBlue.push({ value: hsl, name: "Shade 0" + index.toString() });
};

for (let i = 0; i < 9; i++) {
   let index: number = 9 - i;
   let hue: number = 225+(i*2);
   let saturation: number = 87;
   let lightness: number = 100*(1 / (0.9 + Math.exp(-i*0.225)));
   let hsl: string = `hsl(${hue}deg, ${saturation}%, ${lightness}%)`;
   colorsTintBlue.push({ value: hsl, name: "Tint 0" + index.toString() });
};

//darks

for (let i = 0; i < 5; i++) {
   let index: number = 11 + i;
   let hue: number = 240+(i*-1);
   let saturation: number = 5;
   let lightness: number = 25*(1 / (0.2 + Math.exp(i*0.25)));
   let hsl: string = `hsl(${hue}deg, ${saturation}%, ${lightness}%)`;
   colorsShadeDark.push({ value: hsl, name: "Shade 0" + index.toString() });
};

for (let i = 0; i < 9; i++) {
   let index: number = 9 - i;
   let hue: number = 240+(i*2);
   let saturation: number = 5;
   let lightness: number = 55*(1 / (0.7 + Math.exp(-i*0.425)));
   let hsl: string = `hsl(${hue}deg, ${saturation}%, ${lightness}%)`;
   colorsTintDark.push({ value: hsl, name: "Tint 0" + index.toString() });
};

console.log(colorsTintBlue);

const ColorGenerator = () => (
   <div className='flex'>
      <div className="flex gap-0 flex-col p-4">
         {colorsShadeDark.reverse().map((color) => <ColorRect value={color.value} name={color.name}/> )}
         <ColorRect value="hsl(240deg,5%,26%)" name="Base"/>
         {colorsTintDark.map((color) => <ColorRect value={color.value} name={color.name}/> )}
      </div>
      <div className="flex gap-0 flex-col p-4">
         {colorsShadeBlue.reverse().map((color) => <ColorRect value={color.value} name={color.name}/> )}
         <ColorRect value="hsl(225deg,87%,49%)" name="Base"/>
         {colorsTintBlue.map((color) => <ColorRect value={color.value} name={color.name}/> )}
      </div>
   </div>

);

export default ColorGenerator;