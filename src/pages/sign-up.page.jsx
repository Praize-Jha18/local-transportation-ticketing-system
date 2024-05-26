import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isValidEmail } from '../utils/util';
import { TextField } from '../components/textfield';
// import axios from 'axios';
import '../index.css'

function SignUp() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fname, setFName] = useState("")
  const [lname, setLName] = useState("")
  const [gender, setGender] = useState("")
  const [DOB, setDOB] = useState("")
  const [phoneno, setphoneno] = useState("")
  const [address, setaddress] = useState("")
  const [lga, setLGA] = useState("")
  const [state, setState] = useState("")



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
    <div className='container-fluid' style={{backgroundColor: '#2c44ac', width:'100%'}}>
    <div className="container mt-5" style={{ backgroundColor: '#4B67E3', padding: '30px', borderRadius: '10px', color: 'white', width:'50%', marginBottom:'20px' }}>
      <h1 className="text-center mb-4">Sign Up</h1>
      <form>
        <div className="form-row mb-3">
          <div className="col">
            <TextField
              label={"First Name"}
              placeHolder={"Enter First Name"}
              type={"text"}
              defaultValue={fname}
              onChange={
                (input) => { setFName(input) }
              }
            />
          </div>
          <div className="col">
            <TextField
              label={"Last Name"}
              placeHolder={"Enter Last Name"}
              type={"text"}
              defaultValue={lname}
              onChange={
                (input) => { setLName(input) }
              }
            />
          </div>
        </div>
        <div className="form-group mb-3">
          <TextField
            label={"Date Of Birth"}
            placeHolder={"Enter Date Of Birth"}
            type={"date"}
            defaultValue={DOB}
            onChange={
              (input) => { setDOB(input) }
            }
          />
        </div>
        <div className="form-group mb-3">
          <TextField
            label={"Email"}
            placeHolder={"Enter Email"}
            type={"email"}
            defaultValue={email}
            onChange={
              (input) => { setEmail(input) }
            }
          />
        </div>
        <div className="form-group mb-3">
          <TextField
            label={"Phone"}
            placeHolder={"Enter Phone Number"}
            type={"tel"}
            defaultValue={phoneno}
            onChange={
              (input) => { setphoneno(input) }
            }
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="formGender">Gender</label>
          <select className="form-control" id="formGender">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group mb-3">
        <TextField
            label={"Address"} 
            placeHolder={"Enter Home Address"} 
            type={"text"}
            defaultValue={address}
            onChange={ 
              (input) => { setaddress(input) }
            }
          />
        </div>
        <div className="form-row mb-3">
          <div className="col">
          <TextField
            label={"LGA"} 
            placeHolder={"Enter LGA"} 
            type={"text"}
            defaultValue={lga}
            onChange={ 
              (input) => { setLGA(input) }
            }
          />
          </div>
          <div className="col">
          <TextField
            label={"State"} 
            placeHolder={"Enter State"} 
            type={"text"}
            defaultValue={state}
            onChange={ 
              (input) => { setState(input) }
            }
          />
          </div>
        </div>
        <div className="form-group mb-3">
        <TextField
            label={"Create Password"} 
            placeHolder={"Enter Password"} 
            type={"password"}
            defaultValue={password}
            onChange={ 
              (input) => { setPassword(input) }
            }
          />
        </div>
        <div className="form-group mb-3">
        <TextField
            label={"Confirm Password"} 
            placeHolder={"Enter Password"} 
            type={"password"}
            defaultValue={password}
            onChange={ 
              (input) => { setPassword(input) }
            }
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#FFFFFF', color: '#4B67E3', border: 'none', marginRight:'20px', width:'150px'  }}>Sign Up</button>
        <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#FFFFFF', color: '#4B67E3', border: 'none'  ,width:'150px' }}>Login</button>
      </form>
    </div>
    </div>
  );

}

export default SignUp