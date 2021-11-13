import { Button, makeStyles, Paper, Typography,Box } from '@material-ui/core';
import { useAppDispatch, } from 'app/hooks';
import { logout, selectLoggin } from 'features/auth/authSlice';
import * as React from 'react';
import { push } from 'connected-react-router';
import { Header, SideBar } from 'components/Common';
import { Route, Switch } from 'react-router';
import DashBoard from 'features/dashboard';
import Student from 'features/student';

export interface AddminLayoutProps {
}

export function AddminLayout (props: AddminLayoutProps) {

  const useStyles = makeStyles((theme)=>({
    root:{
      display: 'grid',
      gridTemplateRows:'auto 1fr',
      gridTemplateColumns:'240px 1fr',
      gridTemplateAreas:'"header header" "sidebar main"',
      
      minHeight:'100vh'
    },
    header:{
       gridArea:'header',
    },
    sideBar:{
      gridArea:'sidebar',
      borderRight:`1px solid ${theme.palette.divider}`,
      backgroundColor :theme.palette.background.paper,

    },
    main:{
      gridArea:'main',
      backgroundColor :theme.palette.background.paper,
      padding:theme.spacing(2,3),


    }

  }))
    

    const dispatch = useAppDispatch()
    const classes = useStyles()
    const user = JSON.parse(JSON.stringify(localStorage.getItem('login')));
    if(!user) dispatch(push('/login'));

  
  return (
    <Box className = {classes.root}>
        <Box className = {classes.header}>
           <Header/>
        </Box>
        <Box className = {classes.sideBar}>
           <SideBar/>
        </Box>
        <Box className = {classes.main}>
             <Switch>
               <Route path='/admin/dashboard' component = {DashBoard}></Route>
               <Route path='/admin/student' component = {Student}></Route>

             </Switch>
        </Box>
    </Box>
  );
}


