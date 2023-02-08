import {useRef,useState} from 'react';


export function LoginForm(props){
    /*const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisibility = () =>{
        setPasswordShown(passwordShown ? false:true);
    }*/
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
    <div>
        <div className="loginFormContainer">
        
        <form onSubmit={loginSubmitHandler}>
            <div >Login</div>
            <div>
                <input type='text' required id='username' placeholder='Username' ref={usernameInputRef}/>
            </div>
            <div>
                <input
                    required id='password'
                    placeholder='********'
                    ref={passwordInputRef}
                />
            </div>
            <div >
                <button>Log in</button>
            </div>
        </form>
      
        </div>
    </div>
    );
}

export default LoginForm;