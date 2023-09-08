import RegisterForm from "../../Components/Form/RegisterForm";
function RegisterPage(){
    async function addRegisterHandler(registerData){
        await fetch('/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerData)
          })
            .then(response => response.json())
            .then(data => {
              console.log(data);
              alert('Registration successful!');
            })
            .catch(error => {
              console.error(error);
              alert('Registration failed.');
            });
    }
    return(
        <div>
            <RegisterForm addRegisterForm={addRegisterHandler}/>
        </div>
    );
}
export default RegisterPage;