import { Button, makeStyles, Paper, Typography,Box } from '@material-ui/core';
import { CircularProgress } from '@mui/material';
import { useAppDispatch,useAppSelector } from 'app/hooks';
import { push } from 'connected-react-router';
import * as React from 'react';
import { login, selectLoggin } from '../authSlice';


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
    },

  }))
    
  
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const handleLoggin = ()=>{
    dispatch(login({
      userName:'dung',
      passWord:''
    }))
  }
  const isLogging = useAppSelector(selectLoggin)
  return (
    
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
              {isLogging && <CircularProgress size={20} color="secondary"/>} &nbsp;  Fake Login
           </Button>

        </Box>
      </Paper>
    </div>
    
  );
}
