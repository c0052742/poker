
import { useRef,useState } from "react";
function RegisterForm(props) {
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
    <div>
      <div >
        <form onSubmit={registerSubmitHandler}>
          <div>Register</div>
          <div>
            <label htmlFor="username">Username</label> <br />
            <input type="text" required id="username" ref={usernameInputRef} />
          </div>
          <div>
            <label htmlFor="password">Password</label> <br />
            <input
              required
              id="password"
              placeholder="********"
              ref={passwordInputRef}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label> <br />
            <input
              type="text"
              required
              id="email"
              placeholder="name@email.com"
              ref={emailInputRef}
            />
          </div>
          <div>
            <label htmlFor="postcode">Postcode</label> <br/>
            <input
                type="text"
                required
                id="postcode"
                placeholder="e.g. NE4 5TG"
                ref={postcodeInputRef}
            />
          </div>
          <p>
            Please, check your emails after registering.

          </p>
          <div>
            <button className="submitButton">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;