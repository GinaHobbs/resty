import React, { useState, useEffect } from 'react';
import request from 'superagent'

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {
  const [data, setData] = useState(null)
  const [requestParams, setRequestParams] = useState({})

  const callApi = (requestParams) => {
    // mock output
    request[requestParams.method](requestParams.url)
    .then(res => {
      setData(res.body)
    });
    setRequestParams(requestParams)
  }

  (request.params) ? useEffect((requestParams) => {
    callApi(requestParams)
  }) : null

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi}/>
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;