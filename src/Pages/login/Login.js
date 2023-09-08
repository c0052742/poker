import { Navigate } from "react-router-dom";
import LoginForm from "../../Components/Form/LoginForm";
import { useState,useContext } from "react";
import {UserContext} from "../../UserContext";

function LoginPage() {
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);
  async function addLoginHandler(loginData) {
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        response.json().then(userInfo => {
            setUserInfo(userInfo);
            setRedirect(true);
            alert("Login successful!");
          });
       
      } else {
        alert("Wrong password or username");
      }
    } catch (error) {
      console.error(error);
      alert("Login failed.");
    }
  }

  if (redirect) {
    return <Navigate to="/Stats" />;
  }

  return (
    <div>
      <LoginForm addLoginForm={addLoginHandler} />
    </div>
  );
}

export default LoginPage;