import { Button, makeStyles, Paper, Typography,Box } from '@material-ui/core';
import * as React from 'react';


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
  return (
    <div className = {classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant ="h5" component="h1">
           Studen Management
        </Typography>
        <Box mt={4}>
           <Button fullWidth variant = "contained" color="primary">
              Fake Login
           </Button>

        </Box>
      </Paper>
    </div>
  );
}
