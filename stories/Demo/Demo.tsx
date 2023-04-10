import React, { useState } from 'react';
import Button from '../../src/components/Button';
import { IconAlignCenter, IconAlignJustify, IconAlignLeft, IconAlignRight, IconArrowLeft, IconBold, IconChevronDown, IconChevronRight, IconCode, IconCopy, IconDot, IconGithub, IconItalic, IconLink, IconMinus, IconPlus, IconStrike } from '../../src/components/Icons';
import Input from '../../src/components/Input';
import Stack from '../../src/components/Stack/Stack';

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
   { label: 'Left', icon: <IconAlignLeft/>, selected: true },
   { label: 'Center', icon: <IconAlignCenter/>, selected: false },
   { label: 'Right', icon: <IconAlignRight/>, selected: false },
   { label: 'Justified', icon: <IconAlignJustify/>, selected: false },
];

const inlineTextStyleControlBar = [
   { label: 'Bold', icon: <IconBold/>, selected: false },
   { label: 'Italic', icon: <IconItalic/>, selected: true },
   { label: 'Strikethrough', icon: <IconStrike/>, selected: false },
   { label: 'Code', icon: <IconCode/>, selected: false },
   { label: 'Link', icon: <IconLink/>, selected: false },
];

const Canvas = () => (
   <Stack style='blank' wFull>What's that?</Stack>
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
      <Stack as="header" alignItems="center" style="box" border="bottom" wFull>
      <Button style='light' icon={<IconArrowLeft/>}  label='Back to All Projects'/>
         <Stack wFull alignItems='center' gap={2} justifyContent="center">
            <Stack style='board'>
               { textAlignToggle.map(((button, index) =>
                  <Button
                     key={index} 
                     selected={selectedTabIndex === index}
                     onClick={() => handleTabClick(index)}
                     style="light"
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
                     style="light" labelPlacement='tooltip'
                     icon={button.icon}
                     label={button.label}
                  />
               ))}
            </Stack>
         </Stack>
         <Button style="light" labelPlacement='end' label="Push to Github..." icon={<IconGithub/>} />
         <Button style="strong" labelPlacement='start' icon={<IconChevronDown/>} label="Versions" />
      </Stack>
   );
};

const Demo = () => (
   <Stack wFull hFull vertical>
      <Header/>
      <Stack wFull hFull>
         <Stack as="nav" style="box" border="right" vertical hFull wMin="240px" >
            <Input placeholder="Filter layers..."/>
            { layers.map(((layer) => <Button style="transparent" icon={<IconChevronRight/>} label={layer.label} wFull />))}
         </Stack>
         <Stack wFull hFull><Canvas/></Stack>
         <Stack as="nav" style="box" border="left" vertical hFull wMin="240px" >
            Version history
            { changes.map((log =>
               <Button style="transparent" icon={<IconDot/>} label={log.label} helpText={log.date} wFull />
            ))}
         </Stack>
      </Stack>
   </Stack>
);

export default Demo;