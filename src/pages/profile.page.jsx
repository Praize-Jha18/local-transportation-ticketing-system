// import {logo} from '../assets/user-regular-24.png'
import { useState } from 'react';
import { TextField } from '../components/textfield';
import { isValidEmail } from '../utils/util';
import image from '/src/assets/Busbg.jpg'
import { ChangePasswordModal } from '../components/editpasswordmodal';
const Profile = () => {

  const [email, setEmail] = useState("")
  const [phoneno, setphoneno] = useState("")
  const [name, setName] = useState("")
  const [showModal, setShowModal] = useState(false)

const openModal = () => {
  console.log("clicked")
  setShowModal(true)
  console.log()
  // { showModal && <CustomModal title={ "Rapid Transit" } message={ "Loading... please wait" } show={ showModal } /> }
  
  
}
 
  return (
    <div className="d-flex flex-column min-vh-100">
    <div className="container mt-5" style={{ color: 'white' }} >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>PROFILE</h1>
        <div className="wallet" style={{ backgroundColor: '#4B67E3', padding: '10px', borderRadius: '5px' }}>
          Wallet: 0.00
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 text-center" style={{marginBottom: '30px'}}>
          <div className="profile-img" style={{ backgroundColor: '#4B67E3', padding: '20px', borderRadius: '10px' }}>
            <img src={image} alt="Profile" style={{ borderRadius: '50%', width: '200px', height: '160px' }} /> <br/>
            <button className="btn btn-primary mt-3" style={{ backgroundColor: '#FFFFFF', color: '#4B67E3', border: 'none' }}>Edit</button>
          </div>
        </div>
        <div className="col-md-8"  style={{marginBottom: '30px'}}>
          <div className="profile-form" style={{ backgroundColor: '#4B67E3', padding: '30px', borderRadius: '10px' }}>
            <form>
              <div className="form-group mb-3">
                <TextField
                  label={"Name"}
                  placeHolder={"Enter Name"}
                  type={"text"}
                  defaultValue={name}
                  onChange={
                    (input) => { setName(input) }
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

              <button type="submit" className="btn btn-primary mr-2" style={{ backgroundColor: '#FFFFFF', color: '#4B67E3', border: 'none', marginRight: '20px' ,marginBottom: '10px'}}>Save Changes</button>
              <button type="button" className="btn btn-primary mr-2" style={{ backgroundColor: '#FFFFFF', color: '#4B67E3', border: 'none' , marginRight: '20px' ,marginBottom: '10px'}}>Discard</button>
              <button type="button" className="btn btn-primary mr-2" onClick={ openModal } style={{ backgroundColor: '#FFFFFF', color: '#4B67E3', border: 'none' ,marginBottom: '10px' }}>Change Password</button>
              { showModal && <ChangePasswordModal title={ "Change password" }  show={ showModal } onCloseClicked={() => setShowModal(false)} /> }
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>


  );

};

export default Profile;
