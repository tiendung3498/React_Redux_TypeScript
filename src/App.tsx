import React, { useEffect } from 'react';
import './App.css';
import cityApi from 'api/cityApi';
import studentApi from 'api/studenApi';
import LoginPage from 'features/auth/pages/LoginPage';
import { AddminLayout } from 'components/Layout';
import { Notfound } from 'components/Common';
import {Route,Switch} from 'react-router';
import Student from 'features/student';
import { useAppSelector } from 'app/hooks';
import { selectLoggin } from 'features/auth/authSlice';

function App() {

  // const isLogin = useAppSelector(selectLoggin)
  useEffect(()=>{
    //  cityApi.getAll().then((res)=>console.log(res));
  })
  return (
    <div>
       <Switch>
         <Route path = '/login' component={LoginPage}></Route>
         <Route path = '/admin' component={AddminLayout}></Route>
         <Route path="*" component={Notfound}></Route>
       </Switch>
    </div>
  );
}

export default App;
