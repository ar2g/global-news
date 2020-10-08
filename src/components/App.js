"use strict";

import React, { useState, Fragment } from 'react'
import ReactDOM from 'react-dom'

import {Title} from './Title'
import {ThemePicker} from './ThemePicker'
import {Instructions} from './Instructions'
import {ButtonGroup} from './ButtonGroup'
import {StoryProvider} from './StoryProvider'

import {ErrorBoundary} from './ErrorBoundary'

const App = () => {

  const [countryCode, setCountryCode] = useState('gb')

  return (
    <Fragment>

      <ErrorBoundary>
        <Title />
        <ThemePicker />
        <Instructions />
      </ErrorBoundary>

      <ErrorBoundary>
        <ButtonGroup setParentCode={setCountryCode}/>
      </ErrorBoundary>

      <br/>

      <ErrorBoundary>
        <StoryProvider countryCode={countryCode} />
      </ErrorBoundary>

    </Fragment>
  )
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;

