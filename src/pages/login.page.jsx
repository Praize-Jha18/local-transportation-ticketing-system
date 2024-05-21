import { useState } from 'react';
// import { TextField } from './components/textfield';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isValidEmail } from '../utils/util';
import { TextField } from '../components/textfield';

function Login() {

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleLogin = () => {
		if (!email || !password) {
			toast.error("Field(s) can not be blank")
		} else if (!isValidEmail(email)) {
			toast.error("Invalid email address specified")
		} else {
      // const build_type = process.env.BUILD_TYPE
			toast.success("On the go....")
    }
	}

  return (
    <div className="container">
      <div className="card w-50 mx-auto my-5">
        <div className="card-header text-center">User Login</div>
        <div className="card-body">

          <TextField
            label={"Email"} 
            placeHolder={"Enter email address"} 
            type={"email"}
            defaultValue={email}
            onChange={ 
              (input) => { setEmail(input) }
            }
          />

          <TextField 
            label={"Password"} 
            placeHolder={"Enter Password"} 
            type={"password"}
            defaultValue={ password }
            onChange={ 
              (input) => { setPassword(input) }
            }
          />

          <br/>
          <div className="text-center">
            <button
              className="btn btn-primary" 
              onClick={ handleLogin }
            >Login</button>
          </div>

        </div>
      </div>
      <ToastContainer />
    </div>
  );

}

export default Login