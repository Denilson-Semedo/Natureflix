import React from 'react';
import PropTypes from 'prop-types';

function FormField ({ label, type, name, value, onChange }) {
  return (
    <div>
      <label>
        {label}: 
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  )
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type, 
  name, 
  value, 
  onChange, 
}

export default FormField;