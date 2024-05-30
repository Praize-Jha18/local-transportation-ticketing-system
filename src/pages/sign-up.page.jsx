import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isValidAddress, isValidAge, isValidEmail, isValidName, isValidPhone } from '../utils/util';
import { TextField, TextFieldDisabled } from '../components/textfield';
import axios from 'axios';
import NaijaStates, { lgas } from 'naija-state-local-government';
import Select from "react-select";
import '../index.css'
import { BANKS_URL, HEADER, MIN_YEARS, RESOLVE_ACCOUNT_URL } from '../../constants';
import { CustomModal } from '../components/new-modal';

function SignUp() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [DOB, setDOB] = useState("")
  const [phoneno, setphoneno] = useState("")
  const [address, setaddress] = useState("")
  const [lga, setLGA] = useState("")
  const [state, setState] = useState("")
  const [localGovernments, setLocalGovernments] = useState()
  const [states, setStates] = useState()
  const [banks, setBanks] = useState()
  const [accountNumber, setAccountNumber] = useState("")
  const [accountNumberDisabled, setAccountNumberDisabled] = useState(false)
  const [bankCode, setBankCode] = useState()
  const [showModal, setShowModal] = useState(false)
  const [modalText, setModalText] = useState("")

  useEffect(() => {
    const mappedStates = []
    NaijaStates.states().forEach(naija => mappedStates.push({ label: naija, value: naija }))
    setStates(mappedStates)
  }, [])

  useEffect(() => {
    setShowModal(true)
    setModalText(" Fetching Banks")
    axios.get(BANKS_URL, { headers: HEADER })
    .then(data => {
      const result = data.data.data
      const resolvedBanks = []
      result.forEach(bank =>resolvedBanks.push({ label: bank.name, value: bank.code }))
      setBanks(resolvedBanks)
      setShowModal(false)
    })
    .catch(error => { 
      console.log(error)
      setShowModal(false)
    })    
  }, [])

  useEffect(() => {
    setFullName("")
    if(accountNumber.length == 10 && bankCode) {
      setAccountNumberDisabled(true)
      setModalText("Validating account details")
      setShowModal(true)
      const url = `${RESOLVE_ACCOUNT_URL}account_number=${accountNumber}&bank_code=${bankCode.value}`
      axios.get(
        url, 
        { headers: HEADER })
      .then(data => {
        const result = data.data
        toast.success(result.message)
        const res = result.data.account_name.replace(/" {2,}"/, " ")
        setFullName(res)
        setShowModal(false)
        setAccountNumberDisabled(false)
      })
      .catch(error => {
        setAccountNumberDisabled(false)
        setShowModal(false)
        toast.error(error.response.data.message)
      })
    }
  }, [accountNumber, bankCode])

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
    var isValid = true
    if (!email || !password || !DOB || 
      !phoneno || !address || !state || !fullName) {
      isValid = false
      toast.error("Field(s) can not be blank")
      return
    } 
    if (!isValidEmail(email)) {
      isValid = false
      toast.error("Invalid email address specified")
    } else if (!isValidPhone(phoneno)) {
      isValid = false
      toast.error("Invalid nigerian phone number")
    } else if (!isValidName(fullName)) {
      isValid = false
      toast.error("Invalid full name")
    } else if (isValidAge(DOB)) {
      isValid = false
      toast.error(`The selected date is less than the minimum age: ${MIN_YEARS}`)
    } else if (!lga) {
      isValid = false
      toast.error("Kindly select local government")
    } else if (!isValidAddress(address)) {
      isValid = false
      toast.error("Invalid Address")
    } else if (password != confirmPassword) {
      isValid = false
      toast.error("Passwords mismatch")
    }
    return isValid
  }

  const handleRegister = async () => {
    if (validateFields()) {
      const reqBody = {
        "fullName": fullName,
        "phoneNumber": phoneno,
        "email":email,
        "birthDate": DOB,
        "password": password,
        "walletNumber": accountNumber,
        "nfirstName":"Test",
        "nlastName": "Test",
        "state": state.value,
        "lga": lga.value,
        "address": address,
        "nphoneNumber": phoneno
      }
      
      setShowModal(true)
      setModalText("Processing Request")

      axios.post(
        'http://localhost:8080/api/v1/signup',{ ...reqBody },
        { headers: { "Content-Type": "Application/json" } }
      )
      .then((responseData) => { 
        setShowModal(false)
        toast.success(responseData.data.response) 
      })
      .catch((errorData) => {
        setShowModal(false)
        toast.error(errorData.response.data) 
      })
    }
  }

  return (
    <div className="container mt-5" style={{ backgroundColor: '#3036d3', padding: '30px', borderRadius: '10px', color: 'white', width:'50%', marginBottom:'20px' }}>
      <h1 className="text-center mb-4">Sign Up</h1>
      <div className="form-group mb-3">
        <label>Select Bank</label>
        <Select
          className="form-control"
          // defaultValue={lga}
          onChange={setBankCode}
          options={banks}
          isSearchable={true}
        />
      </div>
      <div className="form-row mb-3">
        <TextField
          label={"Account Number"}
          placeHolder={"Enter Account Number"}
          type={"text"}
          defaultValue={accountNumber}
          length={ 10 }
          isNumeric={ true }
          disabled= { accountNumberDisabled }
          onChange={ (input) => setAccountNumber(input) }
        />
      </div>
      { fullName && <div className="form-row mb-3">
        <TextFieldDisabled
          label={"Full Name"}
          placeHolder={"Enter Full Name"}
          type={"text"}
          value={fullName}
        />
      </div>}
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
          isNumeric={ true }
          length={ 11 }
          onChange={
            (input) => { setphoneno(input) }
          }
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
        <label htmlFor="formGender">Select State</label>
        <Select
          className="form-control"
          defaultValue={state}
          onChange={setState}
          options={states}
          isSearchable={true}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="formGender">Local Governments</label>
        <Select
          className="form-control"
          defaultValue={lga}
          onChange={setLGA}
          options={localGovernments}
          isSearchable={true}
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
          defaultValue={confirmPassword}
          onChange={ 
            (input) => { setConfirmPassword(input) }
          }
        />
      </div>
      <button className="btn btn-primary" style={{ backgroundColor: '#FFFFFF', color: '#4B67E3', border: 'none', marginRight:'20px', width:'150px'  }} onClick={ handleRegister }>Sign Up</button>
      <button className="btn btn-primary" style={{ backgroundColor: '#FFFFFF', color: '#4B67E3', border: 'none'  ,width:'150px' }}>Login</button>
      { showModal && <CustomModal title={ "Rapid Transit" } message={ modalText } show={ showModal } /> }
      <ToastContainer/>
    </div>
  );

}

export default SignUp