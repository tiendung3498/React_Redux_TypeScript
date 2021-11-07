import React, { useEffect } from 'react';
import './App.css';
import cityApi from 'api/cityApi';
import studentApi from 'api/studenApi';
import LoginPage from 'features/auth/pages/LoginPage';
import { AddminLayout } from 'components/Layout';
import { Notfound } from 'components/Common';
import {Routes,Route} from 'react-router-dom';
import Student from 'features/student/Student';
import { useAppSelector } from 'app/hooks';
import { selectLoggin } from 'features/auth/authSlice';

function App() {

  const isLogin = useAppSelector(selectLoggin)
  useEffect(()=>{
    //  cityApi.getAll().then((res)=>console.log(res));
  })
  return (
    <div>
       <Routes>
         <Route path = '/login' element={<LoginPage/>}></Route>
         <Route path = '/admin' element={<AddminLayout/>}></Route>
         <Route path = '/user' element={<Student />}></Route>
         <Route path="*" element={<Notfound/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
