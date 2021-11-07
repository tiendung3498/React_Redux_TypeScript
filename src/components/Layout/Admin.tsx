import * as React from 'react';

export interface AddminLayoutProps {
}

export function AddminLayout (props: AddminLayoutProps) {

  const isLogin = Boolean(localStorage.getItem('login'))
  if(!isLogin) window.location.href ='/login'

  return (
    <div>
        Admin Layout
    </div>
  );
}


