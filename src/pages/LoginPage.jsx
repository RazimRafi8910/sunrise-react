import React from 'react';
import Login from '../components/login/Login';
import '../components/login/style.css';

function LoginPage() {
  return (
      <>
      <div style={{ }}>
        <div style={{ backgroundColor:"black"}}>
        <video id='LoginVideo' loop muted controls autoPlay>
          <source type='video/mp4' src='/LoginBG.mp4'/>
        </video>
        </div>
        <Login/>
          </div>
      </>
  )
}

export default LoginPage