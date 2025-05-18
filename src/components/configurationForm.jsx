// components/ConfigurationForm.jsx
import React, { useState } from 'react';
import { extractConfigOptions } from './extractConfigOptions';
import './ConfigurationForm.css';

const ConfigurationForm = ({ configData }) => {
  const configOptions = extractConfigOptions(configData);
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState('');

  const handleChange = (field, value) => {
    setFormValues(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const filledFields = Object.values(formValues).filter(Boolean).length;
    if (filledFields < 3) {
      setErrors('Please fill at least 3 fields.');
      return;
    }

    setErrors('');
    console.log('Form submitted:', JSON.stringify(formValues, null, 2));
    alert('Form submitted! Check console for data.');
  };

  return (
    <form onSubmit={handleSubmit} className="config-form">
      {Object.entries(configOptions).map(([field, options]) => (
        <div className="form-group" key={field}>
          <label>{field}</label>
          <select
            value={formValues[field] || ''}
            onChange={(e) => handleChange(field, e.target.value)}
          >
            <option value="">Select an option</option>
            {options.map(({ label, value }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>
      ))}
      {errors && <div className="error">{errors}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ConfigurationForm;
