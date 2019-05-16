import React from 'react';
import './loader.css';

export default function Loader() {
  return (
    <div className="loader">
      <div className="inner one"></div>
      <div className="inner two"></div>
      <div className="inner three"></div>
    </div>
  )
}


export function LoginLoader() {
  return (
    <div className="loginLoader">
    </div>
  );
}

