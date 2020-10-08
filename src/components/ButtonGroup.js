"use strict";

import React, { useState, Fragment } from 'react'
import {CountryButton} from './CountryButton'
import {countries} from '../countries'

export const ButtonGroup = ({setParentCode}) => {

  const [activeButton, setActiveButton] = useState('gb')

  const onClick = e => {
    let countryCode = e.target.id.split('-')[2]
    setParentCode(countryCode)
    setActiveButton(countryCode)
  }

  return (
    <div className='buttonGroup'>
      {
        Object.keys(countries).map((c) => {
          return (
            <Fragment key={`frag-${c}`} >
              <CountryButton 
                key={`btn-${c}`} 
                id={`btn-${c}`} 
                onClick={onClick} 
                countryCode={c} 
                variant={activeButton === c ? 'primary' : 'secondary'} 
              />
            </Fragment>
          )
        })
      }
    </div>
  )
}
  
