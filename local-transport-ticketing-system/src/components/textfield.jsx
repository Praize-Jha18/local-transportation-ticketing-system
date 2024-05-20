import PropTypes from 'prop-types';
import { useState } from 'react';

export const TextField = ({ label, placeHolder, type, defaultValue, onChange }) => {

    
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
                className="form-control" 
                placeholder={placeHolder} 
                type={type}
                value={value}
                onChange={handleChange}
                required
            />
        </div>
    )
}

TextField.propTypes = {
    label: PropTypes.string,
    placeHolder: PropTypes.string,
    defaultValue: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func
}
