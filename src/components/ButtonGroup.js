"use strict";

import React, { useState, Fragment } from 'react'
import {CountryButton} from './CountryButton'
import {countries} from '../countries'

export const ButtonGroup = ({setParentCode}) => {

  const [activeButton, setActiveButton] = useState('gb')

  return (
    <div className='buttonGroup'>
      {
        Object.keys(countries).map((c) => {
          return (
            <Fragment key={`frag-${c}`} >
              <CountryButton 
                key={`btn-${c}`} 
                id={`btn-${c}`} 
                onClick={(e) => {setParentCode(c), setActiveButton(e.target.id.split('-')[2])}} 
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
  
