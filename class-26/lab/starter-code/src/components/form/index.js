import './form.scss';
import React, { useState } from 'react';

function Form(props) {

  const [formData, setFormData] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData)
    props.handleApiCall(formData);
  }

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({...formData, [name]:value})
    console.log(formData)
  }

  return(
    <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={handleChange}/>
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <button id='get' name='method' type='radio' value='get' onClick={handleChange}>GET</button>
            <button id='post' name='method' type='radio' value='post' onClick={handleChange}>POST</button>
            <button id='put' name='method' type='radio' value='put' onClick={handleChange}>PUT</button>
            <button id='delete' name='method' type='radio' value='delete' onClick={handleChange}>DELETE</button>
          </label>
        </form>
      </>
  )
}

export default Form;
