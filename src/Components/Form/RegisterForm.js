
import { useRef } from "react";
import "./form.css"
import styles from "./register.module.css"
export function RegisterForm(props) {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const emailInputRef = useRef();
  const postcodeInputRef = useRef();

  function registerSubmitHandler(event) {
    event.preventDefault();
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPostcode = postcodeInputRef.current.value;
    const registerData = {
      username: enteredUsername,
      password: enteredPassword,
      email: enteredEmail,
      postcode: enteredPostcode,
    };
    props.addRegisterForm(registerData);
  }
  

  return (
    
    <div className={styles.body}>
      <div className={styles.summary}>Welcome to our innovative poker app homepage!
       Created to track and analyze poker statistics for you and your friends, 
       our app allows you to post your own stats and gain insights into your gameplay.
        With a focus on security, we ensure the protection of your data while providing a user-friendly experience.
         Currently, we're developing a profile page where you can personalize your poker journey, access advanced stats,
          and manage your account settings. Our goal is to create a vibrant poker community by making our website and app public,
           connecting players, and fostering healthy competition. 
           Join us and elevate your poker game with our feature-rich app!</div>
      <form className="form" onSubmit={registerSubmitHandler}>
        <div className="title">Register</div>
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
        <div className="input-container ic2">
          <input type="text" required id="email" className="input" ref={emailInputRef} />
          <div className="cut cut-short"></div>
          <label htmlFor="email" className="placeholder">Email</label>
        </div>
        <div className="input-container ic2">
          <input type="text" required id="postcode" className="input" ref={postcodeInputRef} />
          <div className="cut"></div>
          <label htmlFor="postcode" className="placeholder">Postcode</label>
        </div>
        <button className="submit">Submit</button>
        <div class="signup-link">
               Already a member? <a  href='/login'>Log in now</a>
            </div>
      </form>
      
    </div>
  );
  
}

export default RegisterForm;