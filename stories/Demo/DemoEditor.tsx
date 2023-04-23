import React, { useState } from 'react';
import Button from '../../src/components/Button';
import { IconAlignCenter, IconAlignJustify, IconAlignLeft, IconAlignRight, IconArrowLeft, IconBold, IconChevronDown, IconChevronRight, IconCode, IconCopy, IconDot, IconGithub, IconItalic, IconLink, IconMinus, IconPlus, IconStrike } from '../../src/components/Icons';
import Input from '../../src/components/Input';
import Stack from '../../src/components/Stack/Stack';
import Heading from '../../src/components/Heading';
import Text from '../../src/components/Text';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {

}

const layers = [
   { label: 'Layer 1' },
   { label: 'Layer 2' },
   { label: 'Layer 3' },
   { label: 'Layer 4' },
 ];

 const changes = [
   { label: 'Improved contrast', date: 'Today' },
   { label: 'Migrated to PostCSS V8', date: '2 hour ago' },
   { label: 'Lost keys', date: 'Yesterday' },
   { label: 'Initial code', date: 'January 20, 2023' },
];

const textAlignToggle = [
   { label: 'Align Left', icon: <IconAlignLeft/>, selected: true },
   { label: 'Align Center', icon: <IconAlignCenter/>, selected: false },
   { label: 'Align Right', icon: <IconAlignRight/>, selected: false },
   { label: 'Align Justified', icon: <IconAlignJustify/>, selected: false },
];

const inlineTextStyleControlBar = [
   { label: 'Bold', icon: <IconBold/>, selected: false },
   { label: 'Italic', icon: <IconItalic/>, selected: true },
   { label: 'Strikethrough', icon: <IconStrike/>, selected: false },
   { label: 'Code', icon: <IconCode/>, selected: false },
   { label: 'Link', icon: <IconLink/>, selected: false },
];

const textContent = (
   <>
      <Heading as='h1' size='largest' className=' mt-10'>Template</Heading>
      <Text as='p' >A free and open-source documentation website template.</Text>
      <Text as='p' className=' mt-3'>Portal template is built with Next.js and styled with tailwindcss.</Text>
      <Text as='p' className=' mt-3'>The layout and every component in the template is customizable using predefined css variables. You're welcome to visit other pages in this template to learn more about each component.</Text>
      <Heading as='h2' size='large' className='mt-8' >Get started</Heading>
      <Text as='p' className=' mt-3'>The easiest way to get started is to clone the repository from GitHub and start playing around. You can find the instructions for running the project on our GitHub readme.</Text>
      <Text as='p' className=' mt-3'>You can also click the buttons below to clone and deploy the template to Vercel or Netlify.</Text>
   </>
);

const Canvas = () => (
   <Stack variant='blank' vertical wFull className="mx-20">{textContent}</Stack>
);
const Header = () => {

   const [selectedTabIndex, setSelectedTabIndex] = useState(0);
   const handleTabClick = (index) => {
      setSelectedTabIndex(index);
   };
   const [buttons, setButtons] = useState(inlineTextStyleControlBar);
   const handleButtonClick = (index) => {
      const updatedButtons = [...buttons];
      updatedButtons[index].selected = !updatedButtons[index].selected;
      setButtons(updatedButtons);
   };

   return (
      <Stack as="header" alignItems="center" variant="card" border={{bottom:true}} wFull>
      <Button variant='light' icon={<IconArrowLeft/>}  label='Back to All Projects'/>
         <Stack wFull alignItems='center' gap={2} justifyContent="center">
            <Stack variant='slip'>
               { textAlignToggle.map(((button, index) =>
                  <Button
                     key={index} 
                     selected={selectedTabIndex === index}
                     onClick={() => handleTabClick(index)}
                     variant="light"
                     labelPlacement='tooltip'
                     icon={button.icon}
                     label={button.label}
                  />
               ))}
            </Stack>
            <Stack gap={1}>
            { inlineTextStyleControlBar.map(((button, index) =>
                  <Button
                     key={index}
                     onClick={() => handleButtonClick(index)}
                     selected={button.selected}
                     variant="light" labelPlacement='tooltip'
                     icon={button.icon}
                     label={button.label}
                  />
               ))}
            </Stack>
         </Stack>
         <Button variant="light" labelPlacement='end' label="Push to Github..." icon={<IconGithub/>} />
         <Button variant="strong" labelPlacement='start' icon={<IconChevronDown/>} label="Versions" />
      </Stack>
   );
};

const DemoEditor = () => (
   <Stack wFull hFull vertical>
      <Header/>
      <Stack wFull hFull>
         <Stack as="nav" variant="card" border={{right:true}} vertical hFull wMin="240px" >
            <Input placeholder="Filter layers..."/>
            { layers.map(((layer) => <Button variant="transparent" icon={<IconChevronRight/>} label={layer.label} wFull />))}
         </Stack>
         <Stack wFull hFull><Canvas/></Stack>
         <Stack as="nav" variant="card" border={{left:true}} vertical hFull wMin="240px" >
            <Heading as="h2" size='small' secondary className='ml-2 my-2'>Version history</Heading>
            { changes.map((log =>
               <Button variant="transparent" icon={<IconDot/>} label={log.label} helpText={log.date} wFull />
            ))}
         </Stack>
      </Stack>
   </Stack>
);

export default DemoEditor;