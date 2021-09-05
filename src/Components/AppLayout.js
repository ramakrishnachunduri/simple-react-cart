import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AppLayout = (props) => (
  <div className="container mx-auto p-0 min-w-full h-screen">
  {props.children}
  </div>
)