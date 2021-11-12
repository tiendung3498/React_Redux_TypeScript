import { Button, makeStyles, Paper, Typography,Box } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { logout } from 'features/auth/authSlice';
import * as React from 'react';
import { push } from 'connected-react-router';

export interface AddminLayoutProps {
}

export function AddminLayout (props: AddminLayoutProps) {

  const useStyles = makeStyles((theme)=>({
    root:{
      display: 'flex',
      flexflow: 'row-nowrap',
      justifyContent:'center',
      alignItems:'center',
      minHeight:'100vh'
    },
    box:{
       padding: theme.spacing(3),
    },

  }))
    

    const dispatch = useAppDispatch()
    const classes = useStyles()
    const user = JSON.parse(JSON.stringify(localStorage.getItem('login')));
    if(!user) dispatch(push('/login'));
  
  return (
    <div className = {classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant ="h5" component="h1">
           Welcome {user}
        </Typography>
        <Box mt={4}>
           <Button
              fullWidth variant = "contained" color="primary"
              onClick = {()=>dispatch(logout())}
              >
              Fake Logout
           </Button>

        </Box>
      </Paper>
    </div>
  );
}


