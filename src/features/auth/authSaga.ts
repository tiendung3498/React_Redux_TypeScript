import { fork,call,take } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { login, LoginPayload, logout } from './authSlice';

function* handleLogin(payload: LoginPayload){
    localStorage.setItem('login',JSON.stringify(payload.userName))
}

function* handleLogout(){

  localStorage.removeItem('login')
}

function* watchLoginFlow(){
  while(true){
    const  isLogin = Boolean(localStorage.getItem('login'))
    if(!isLogin){
       const action:PayloadAction<LoginPayload> = yield take(login.type);
       yield fork(handleLogin,action.payload);
    }
    yield take(logout.type)
    yield call(handleLogout)
  }
}
export default function* authSaga(){
  yield fork(watchLoginFlow);  
}