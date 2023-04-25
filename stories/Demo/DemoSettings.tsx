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
      <Stack variant='card' vertical border={{all:true}} padding='larger' gap='larger' className='m-3 md:mt-12 w-full md:w-[40rem]'>
         <Stack vertical>
            <Heading as='h1' size='large'>Account Settings</Heading>
            <Text secondary>Manage your login details.</Text>
         </Stack>
         <Grid cols='repeat(2, 1fr)' gap="large">
            <Label label='First name' className='col-span-2 md:col-span-1'><Input defaultValue="Forest"/></Label>
            <Label label='Last name' className='col-span-2 md:col-span-1'><Input defaultValue="Gump"/></Label>
            <Label label='Email' className='col-span-2'><Input defaultValue="forest@babagump.com"/></Label>
            <Label error helpText='Missing at least 1 uppercase letter' label='Password' description='At least 8 characters, 1 number and 1 uppercase letter' className='col-span-2'><Input defaultValue="••••••••••" type="password"/></Label>
         </Grid>
         <Stack wFull gap='small' justifyContent='end' className='mt-2 mb-2'>
            <Button variant='light'>Dismiss</Button>
            <Button>Save Changes</Button>
         </Stack>
      </Stack>
   );

   return (
      <Grid cols='auto 1fr' rows='auto 1fr'
               areas={[
                     ['topbar', 'topbar'],
                     ['sidenav', 'main']]}>
         <Stack area='topbar' variant='card' wFull border={{bottom:true}}><Heading as='span' size='small' className='ml-1' >Company Name</Heading></Stack>
         <Stack area='sidenav' variant='card' hFull wFull border={{right:true}} vertical className='hidden min-w-[12rem] md:block'>{SideNav}</Stack>
         <Stack area='main' wFull hFull justifyContent='center'>{Card}</Stack>
      </Grid>
   );
};

export default DemoSettings;