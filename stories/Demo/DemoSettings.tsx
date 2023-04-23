import React, { useState } from 'react';
import Button from '../../src/components/Button';
import Input from '../../src/components/Input';
import Stack from '../../src/components/Stack/Stack';
import Grid from '../../src/components/Grid/Grid';
import Heading from '../../src/components/Heading';
import Text from '../../src/components/Text';
import Label from '../../src/components/Label';

const DemoSettings = () => {

   const SideNav = (
      <>
         <Button wFull variant='transparent' selected>Account</Button>
         <Button wFull variant='transparent'>Privacy</Button>
         <Button wFull variant='transparent'>Subscription</Button>
      </>
   );
   
   const Card = (
      <Stack variant='card' border={{all:true}} className='mt-6' vertical wMin='600px' gap={2}>
         <Stack vertical>
            <Heading as='h1' size='large'>Account Settings</Heading>
            <Text secondary>Manage your login details.</Text>
         </Stack>
         <Grid columns='repeat(2, 1fr)' gap="0.5rem">
            <Label label='First name'><Input defaultValue="Forest"/></Label>
            <Label label='Last name'><Input defaultValue="Gump"/></Label>
            <Label label='Email' className='col-span-2'><Input defaultValue="forest@babagump.com"/></Label>
            <Label error helperText='Missing at least 1 uppercase letter' label='Password' description='At least 8 characters, 1 number and 1 uppercase letter' className='col-span-2'><Input defaultValue="••••••••••" type="password"/></Label>
         </Grid>
         <Stack wFull gap={2} justifyContent='end' className='mt-2 mb-2'>
            <Button variant='light'>Dismiss</Button>
            <Button>Save Changes</Button>
         </Stack>
      </Stack>
   );

   return (
      <Grid columns='auto 1fr' rows='auto 1fr'
               areas={[
                     ['topbar', 'topbar'],
                     ['sidenav', 'main']]}>
         <Stack area='topbar' variant='card' wFull border={{bottom:true}}><Heading as='span' size='small' >Company Name</Heading></Stack>
         <Stack area='sidenav' variant='card' hFull wFull border={{right:true}} vertical wMin='180px'>{SideNav}</Stack>
         <Stack area='main' hFull wFull justifyContent='center'>{Card}</Stack>
      </Grid>
   );
};

export default DemoSettings;