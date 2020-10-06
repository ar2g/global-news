import React, { useState, Fragment } from 'react'
import ReactDOM from 'react-dom'
import {TopStories} from './TopStories'

const App = () => {

  const [countryCode, setCountryCode] = useState('gb')

  return (
    <Fragment>
      <h1>GLOBAL NEWS</h1>
      <h4>Click on the country for today's top stories.</h4>
      <button onClick={() => setCountryCode('gb')}>UK</button>
      <button onClick={() => setCountryCode('us')}>US</button>
      <button onClick={() => setCountryCode('in')}>IN</button>
      <button onClick={() => setCountryCode('fr')}>FR</button>
      <button onClick={() => setCountryCode('au')}>AU</button>
      <TopStories countryCode={countryCode} />
    </Fragment>
  )

}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;

