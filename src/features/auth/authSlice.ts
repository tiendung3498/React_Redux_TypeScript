import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { User } from 'models';

export interface authState{
  isLoggedIn:Boolean,
  logging: Boolean,
  currentUser?:User
}
export interface LoginPayload{
  userName:string,
  passWord:string,
}
const initialState: authState = {
  isLoggedIn:false,
  logging:false,
  currentUser:undefined  
};



export const authSlice = createSlice({
    initialState,
    name: 'auth',
    reducers: {
      login: (state,action:PayloadAction<LoginPayload>) => {
          state.logging=true;
      },
      loginSuccess: (state,action:PayloadAction<User>) => {
          state.isLoggedIn=false;
          state.currentUser=action.payload;
      },
      loginFailed: (state,action:PayloadAction<string>) => {

      },
      logout: (state) => {
        state.isLoggedIn=true;
        state.currentUser = undefined;
        
    },}
    

  });
  export const selectIsLoggedIn = (state:any)=>state.auth.isLoggedIn
  export const selectLoggin = (state:any)=>state.auth.logging
  export const selectCurrentUser = (state:any)=>state.auth.currentUser

  export const { login, loginFailed,loginSuccess, logout} = authSlice.actions;
  const authReducer = authSlice.reducer
  export default authReducer
