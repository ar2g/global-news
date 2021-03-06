"use strict";

import React, { useState, Fragment } from 'react'
import ReactDOM from 'react-dom'

import {Title} from './Title'
import {ThemePicker} from './ThemePicker'
import {Instructions} from './Instructions'
import {ButtonGroup} from './ButtonGroup'
import {TopStories} from './TopStories'

const App = () => {

  const [countryCode, setCountryCode] = useState('gb')

  return (
    <Fragment>
      <Title />
      <ThemePicker />
      <Instructions />
      <ButtonGroup setParentCode={setCountryCode}/>
      <br/>
      <TopStories countryCode={countryCode} />
    </Fragment>
  )

}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;

