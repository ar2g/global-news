"use strict";

import React from 'react'
import {Button} from 'react-bootstrap'
import {countries} from '../countries'

export const CountryButton = ({countryCode, onClick}) => {

  return (
    <Button 
      onClick={onClick}          
      size='lg'
      variant='primary'
      key={`inner-btn-${countryCode}`}
    >
      { countries[countryCode].name } { countries[countryCode].flag }
    </Button>
  )
  
}
