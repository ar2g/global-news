"use strict";

import React from 'react'
import {Button} from 'react-bootstrap'
import {countries} from '../countries'

export const CountryButton = ({countryCode, onClick, variant}) => {

  return (
    <Button 
      onClick={onClick}          
      size='lg'
      variant={variant}
      key={`inner-btn-${countryCode}`}
      id={`inner-btn-${countryCode}`}
    >
      { countries[countryCode].name } { countries[countryCode].flag }
    </Button>
  )

}
