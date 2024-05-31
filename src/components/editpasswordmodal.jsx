import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { TextField } from '../components/textfield';
import { useState } from 'react';

export const ChangePasswordModal = ({ title, show, onCloseClicked }) => {


    const [oldpassword, setoldPassword] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    console.log(password)

    return (
        <Modal isOpen={show} className={"card w-50 mx-auto my-5"} style={{ backgroundColor: '#4B62E3', borderRadius: '20px', inset: '50px'}}>
            <div className="card-header text-center" style={{ color: 'white', fontSize: '25px' }}>{title}</div>
            <div className="card-body" style={{color:' white'}}>
                <TextField
                    label={"Old Password"}
                    placeHolder={"Enter old password"}
                    type={"text"}
                    defaultValue={oldpassword}
                    length={20}
                    onChange={(input) => setoldPassword(input)}
                />
                <TextField
                    label={"Password"}
                    placeHolder={"Enter password"}
                    type={"text"}
                    defaultValue={password}
                    length={20}
                    onChange={(input) => setPassword(input)}
                />
                <TextField
                    label={" Password"}
                    placeHolder={"Confirm password"}
                    type={"text"}
                    defaultValue={confirmPassword}
                    length={20}
                    onChange={(input) => setConfirmPassword(input)}
                />

                <div className="modal-footer">
                    <button className="btn btn-secondary" data-bs-dismiss="modal" onClick={onCloseClicked}>Close</button>
                    <button className="btn btn-primary">Save Changes</button>
                </div>
            </div>

        </Modal>
    )
}

ChangePasswordModal.propTypes = {
    title: PropTypes.string,
    show: PropTypes.bool,
    onCloseClicked: PropTypes.func
}
