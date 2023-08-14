// import { GoogleLogin, useGoogleLogin } from '@react-oauth/google'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import React from 'react';
import './App.css'
// import './components/menu/Menu.tsx'
import MenuReserva from "./components/menu/MenuReserva"

function App() {

  // const login = useGoogleLogin({
  //   onSuccess: codeResponse => console.log(codeResponse)
  // });
  
  return (
    <div className="App">
      <h1>SISTEMA DE RESERVAS</h1>
      <h2></h2>

      <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
    />
      <MenuReserva />
    </div>
  )
}

export default App
