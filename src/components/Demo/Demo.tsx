import React from 'react';
import Button from '../Button';
import Input from '../Input';
import Stack from '../Stack/Stack';

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

const Demo = ({...inputProps }) => (
   <Stack wFull hFull vertical>
      <Stack as="header" style="box" wFull>
         <Stack wFull>Logo</Stack>
            <Button style="light" label="Cancel" />
            <Button style="strong" label="Confirm" />
      </Stack>

      <Stack wFull hFull>
         {/*Layers panel*/}
         <Stack as="nav" style="box" vertical hFull >
            { layers.map((layer => <Button style="transparent" label={layer.label} wFull />))}
         </Stack>
         
         <Stack wFull hFull>Canvas area</Stack>
         
         {/*Inspector panel*/}
         <Stack as="nav" style="box" vertical hFull >
            <Input placeholder="Filter..."/>
            { changes.map((log =>
               <Button style="transparent" label={log.label} helpText={log.date} wFull />
            ))}
         </Stack>
      </Stack>
   </Stack>
);

export default Demo;