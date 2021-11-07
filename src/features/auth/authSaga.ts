import { fork,call,take,put,delay } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { login, loginFailed, LoginPayload, loginSuccess, logout } from './authSlice';

function* handleLogin(payload: LoginPayload){
  try {
    yield delay(1000)
    localStorage.setItem('login',JSON.stringify(payload.userName))


    yield put(loginSuccess({
      id:'1',
      name:payload.userName,
    }))
    
  } catch (error:any) {
    yield put(loginFailed(error.message))
  }

}

function* handleLogout(){

  localStorage.removeItem('login');
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