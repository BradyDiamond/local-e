import React, {useState} from 'react'
import loginImage from "./../img/localBusinessLogin.jpg.png";
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase"



function Login() {
  const history = useHistory();
  const  [email, setEmail] = useState('');
  const  [password, setPassword] = useState('');

  const signIn = event => {
    event.preventDefault();

    auth
    .signInWithEmailAndPassword(email, password)
    .then(auth => {
        history.push('/')
      })
      .catch(error => alert(error.message))
  }

  const signUp = event => {
    event.preventDefault();
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      if (auth) {
        history.push('/')
      }

  
  })
  .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
      <div className='login-container'>
        <Link to="/" >
        <div className="login-logo-container">
        <img className="login-logo" src={loginImage}/>
        </div>
        </Link>
        <div className='login-body'>
          <h1>Welcome!</h1>

          <form>
            <h4>E-mail</h4>
            <input type='text' value={email} onChange={event => setEmail(event.target.value)} />
            <h4>Password</h4>
            <input type ='password' value={password} onChange={event => setPassword(event.target.value)} />
            <br></br>
            <button type='submit' onClick={signIn} className='signIn-button'>Sign In</button>
    
            <button type='submit' onClick={signUp} className='signUp-button'>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login