import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isValidEmail } from '../utils/util';
import { TextField } from '../components/textfield';
// import axios from 'axios';

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
      // console.log(build_type)
      /*
      axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      )
      .then((response) => {
          const posts = response.data
          console.log(posts)
      }); 
      */
      toast.success("On the go....")
    }
	}

  return (
    <div className="container">
      <div className="card w-50 mx-auto my-5" style={{backgroundColor:'#4B62E3', borderRadius:'20px'}}>
        <div className="card-header text-center" style={{color:'black', fontSize:'35px'}}>User Login</div>
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