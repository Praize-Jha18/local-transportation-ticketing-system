import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isValidEmail } from '../utils/util';
import { TextField } from '../components/textfield';
// import axios from 'axios';
import NaijaStates, { lgas } from 'naija-state-local-government';
import Select from "react-select";
import '../index.css'

function SignUp() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fname, setFName] = useState("")
  const [lname, setLName] = useState("")
  // const [gender, setGender] = useState("")
  const [DOB, setDOB] = useState("")
  const [phoneno, setphoneno] = useState("")
  const [address, setaddress] = useState("")
  const [lga, setLGA] = useState("")
  const [state, setState] = useState("")
  const [localGovernments, setLocalGovernments] = useState()
  const [states, setStates] = useState()

  useEffect(() => {
    const mappedStates = []
    NaijaStates.states().forEach(naija => mappedStates.push({ label: naija, value: naija }))
    setStates(mappedStates)
  }, [])

  useEffect(() => {
    if (state) {
      setLGA("")
      const mappedLGAs = []
      const retrievedLgas = lgas(state.value).lgas
      retrievedLgas.forEach(LGA => mappedLGAs.push({ label: LGA, value: LGA }))
      setLocalGovernments(mappedLGAs)
    }
  }, [state])

  const validateFields = () => {
    var isValid = false
    if (!email || !password) {
      toast.error("Field(s) can not be blank")
    } else if (!isValidEmail(email)) {
      toast.error("Invalid email address specified")
    } 
    return isValid
  }

  const handleLogin = () => {
    if (validateFields()) {
      // console.log(NaijaStates.all());
      // console.log(NaijaStates.states());
      // console.log(NaijaStates.lgas("Oyo"))
      // const build_type = process.env.BUILD_TYPE
      // console.log(build_type)
      // axios.get(
      //   `https://jsonplaceholder.typicode.com/posts`
      // )
      // .then((response) => {
      //     const posts = response.data
      //     console.log(posts)
      // });
      toast.success("On the go....")
    }
  }

  return (
    <div className="container mt-5" style={{ backgroundColor: '#3036d3', padding: '30px', borderRadius: '10px', color: 'white', width:'50%', marginBottom:'20px' }}>
      <h1 className="text-center mb-4">Sign Up</h1>
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
          <select className="form-select" id="formGender">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="formGender">States</label>
          <Select
            className="form-control"
            defaultValue={state}
            onChange={setState}
            options={states}
            isSearchable={false}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="formGender">Local Governments</label>
          <Select
            className="form-control"
            defaultValue={lga}
            onChange={setLGA}
            options={localGovernments}
            isSearchable={false}
          />
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
        <button className="btn btn-primary" style={{ backgroundColor: '#FFFFFF', color: '#4B67E3', border: 'none', marginRight:'20px', width:'150px'  }} onClick={ handleLogin }>Sign Up</button>
        <button className="btn btn-primary" style={{ backgroundColor: '#FFFFFF', color: '#4B67E3', border: 'none'  ,width:'150px' }}>Login</button>
      <ToastContainer/>
    </div>
  );

}

export default SignUp