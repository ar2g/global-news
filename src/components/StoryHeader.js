"use strict";

import React, {Fragment} from 'react'
import {getTitle} from '../countries'

export const StoryHeader = ({topStories, countryCode}) => (
  <Fragment>
    <br/>
    {topStories && <h5>Top stories in {getTitle(countryCode)}</h5>}
    <br/>
  </Fragment>
)
  

  
