"use strict";

import React, { useState, Fragment } from 'react'
import ReactDOM from 'react-dom'
import {CountryButton} from './CountryButton'
import {TopStories} from './TopStories'

import {countries} from '../countries'

const App = () => {

  const [countryCode, setCountryCode] = useState('gb')
  const [activeButton, setActiveButton] = useState('gb')

  return (
    <Fragment>
      <h1>GLOBAL NEWS</h1>
      <h5>Click a country for today's top stories.</h5>
      {
        Object.keys(countries).map((c, index) => {
          return (
            <Fragment key={`frag-${c}`} >
              <CountryButton 
                key={`btn-${c}`} 
                id={`btn-${c}`} 
                onClick={(e) => {setCountryCode(c), setActiveButton(e.target.id.split('-')[2])}} 
                countryCode={c} 
                variant={activeButton === c ? 'primary' : 'secondary'} 
              />
              {index < Object.keys(countries).length - 1 && ' ' }
            </Fragment>
          )
        })
      }
      <br/>
      <TopStories countryCode={countryCode} />
    </Fragment>
  )

}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;

