import { Button, makeStyles, Paper, Typography,Box } from '@material-ui/core';
import { useAppDispatch } from 'app/hooks';
import * as React from 'react';
import { login,logout } from '../authSlice';


export default function LoginPage () {
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
    }
  }))
  
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const handleLoggin = ()=>{
    dispatch(login({
      userName:'dung',
      passWord:''
    }))
  }
  return (
    <>
    <Button
              variant = "contained"
              color="primary"
              onClick = {()=>dispatch(logout())}
              >
              Fake Logout
           </Button>
    
    <div className = {classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant ="h5" component="h1">
           Studen Management
        </Typography>
        <Box mt={4}>
           <Button
              fullWidth variant = "contained" color="primary"
              onClick = {handleLoggin}
              >
              Fake Login
           </Button>

        </Box>
      </Paper>
    </div>
    </>
  );
}
