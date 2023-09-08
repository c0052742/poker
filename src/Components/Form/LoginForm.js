import {useRef} from 'react';

import './form.css'



export function LoginForm(props){
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    function loginSubmitHandler(event){
        event.preventDefault();
        const enteredUsername = usernameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const loginData = {
            username: enteredUsername,
            password: enteredPassword,
        }
        props.addLoginForm(loginData);

    }
    return (
        <div className="body">
                      <div className="image-container">
          <img src={require('./flush.png')} alt='' />
        </div>
          <form onSubmit={loginSubmitHandler} className="form">
            <div className="title">Login</div>
            <div className="input-container ic1">
              <input type="text" required id="username" className="input" ref={usernameInputRef} />
              <div className="cut"></div>
              <label htmlFor="username" className="placeholder">Username</label>
            </div>
            <div className="input-container ic2">
              <input type="password" required id="password" className="input" ref={passwordInputRef} />
              <div className="cut"></div>
              <label htmlFor="password" className="placeholder">Password</label>
            </div>
              <button type="submit" className="submit">Log in</button>
              <div class="signup-link">
               Not a member? <a  href='/register'>Sign up now</a>
            </div>
              
          </form>

        </div>
      );

}

export default LoginForm;