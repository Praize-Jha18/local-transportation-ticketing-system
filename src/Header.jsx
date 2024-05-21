import { useState } from 'react';
import './App.css'
import { TextField } from './components/textfield';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isValidEmail } from './utils/util';

function Header() {

  return (
    <div className="container">
      <div className="card w-50 mx-auto my-5">
        <div className="card-header text-center">Header Page</div>
      </div>
    </div>
  );

}

export default Header