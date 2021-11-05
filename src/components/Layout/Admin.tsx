import * as React from 'react';

export interface AddminLayoutProps {
}

export function AddminLayout (props: AddminLayoutProps) {

  const isLoggin = Boolean(localStorage.getItem('loggin'))
  if(!isLoggin) window.location.href ='/login'

  return (
    <div>
        Admin Layout
    </div>
  );
}


