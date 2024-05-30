import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { TextFieldDisabled } from './textfield';

export const CustomModal = ({ title, message, show }) => {
  return (
    <Modal isOpen={ show } className={ "card w-50 mx-auto my-5" } style={ {backgroundColor:'#4B62E3', borderRadius:'20px'} }>
      <div className="card-header text-center" style={{color:'white', fontSize:'25px'}}>{ title }</div>
      <div className="card-body">
          <TextFieldDisabled value={ message } />
      </div>
    </Modal>
  )
}

CustomModal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  show: PropTypes.bool
}
