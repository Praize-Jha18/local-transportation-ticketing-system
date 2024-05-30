import PropTypes from 'prop-types';
import { useState } from 'react';

export const TextField = ({ label, placeHolder, type, defaultValue, onChange, disabled = false, length = 70 }) => {
    
	const [value, setValue] = useState(defaultValue)

    const handleChange = (event) => {
        const text = event.target.value
        onChange(text)
        setValue(text)
    }
    return (    
        <div className="form-group">
            <label>{label}</label>
            <input 
                className="form-control my-2" 
                placeholder={placeHolder} 
                type={type}
                value={value}
                maxLength={ length}
                onChange={handleChange}
                disabled={ disabled }
            />
        </div>
    )
}


export const TextFieldDisabled = ({ label = "", placeHolder = "", type = "text", value }) => {
    
    return (    
        <div className="form-group">
            <label>{label}</label>
                <input 
                    className="form-control my-2" 
                    placeholder={placeHolder} 
                    type={type}
                    value={value}
                    disabled={ true }
                />
        </div>
    )
}


TextField.propTypes = {
    label: PropTypes.string,
    length: PropTypes.number,
    placeHolder: PropTypes.string,
    defaultValue: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
}


TextFieldDisabled.propTypes = {
    label: PropTypes.string,
    placeHolder: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string
}
