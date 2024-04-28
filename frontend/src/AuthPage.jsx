import React, { useEffect } from 'react';
import axios from 'axios'

const AuthPage = (props) => {

    useEffect(() => {
        document.title = "Chat Chat!"; // Change this to your desired title
      }, []);

    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios.post('http://localhost:3001/authenticate',
      {username: value}
    )
    .then(r => props.onAuth({ ...r.data, secret: value}))
    .catch(e => console.log('error', e))
      props.onAuth({ username: value, secret: value });
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Welcome to <br></br> "Chat Chat!" 👋</div>
  
          <div className="form-subtitle">Set a username to get started</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;