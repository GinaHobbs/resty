import './form.scss';

function Form(props) {

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method:'GET',
      // url: 'https://pokeapi.co/api/v2/pokemon',
      url: e.target.value
    };
    props.handleApiCall(formData);
  }

  return(
    <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' />
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <button id="get">GET</button>
            <button id="post">POST</button>
            <button id="put">PUT</button>
            <button id="delete">DELETE</button>
          </label>
          <input type='text' name='JSON' placeholder='JSON'/>
        </form>
      </>
  )
}

export default Form;
