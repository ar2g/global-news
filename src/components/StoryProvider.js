"use strict";

import React, {Fragment, useEffect, useState} from 'react'
import {StoryHeader} from './StoryHeader'
import {StoryDisplay} from './StoryDisplay'

import '../responsive.css'

export const StoryProvider = ({countryCode}) => {
  
  const [topStories, setTopStories] = useState(null);
  
  //TODO: use a dedicated hook like useFetch
  
  useEffect(() => {
    
    const API_URL = `https://newsapi.org/v2/top-headlines?country=${countryCode}`
    
    let requestOptions = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'x-api-key': '1198979c43af49d18fcdeffeeec571de'
      },
      redirect: 'follow'
    }

    let isCancelled = false
    if(!isCancelled) {
      const getData = async () => {
        
        try {
          const response = await fetch(API_URL, requestOptions)
          const data = await response.json()
          const topStories = data.articles.slice(0,5)
          console.dir(`topStories`, topStories)
          if(!isCancelled && topStories) {
            setTopStories(topStories)
          }
        } catch(error) {
          console.error(error)
        }
      } 
      getData()
    }
    return () => {
      isCancelled = true
    }
  }, [countryCode])

  return (
    <Fragment>
      <StoryHeader topStories={topStories} countryCode={countryCode}/>
      <StoryDisplay topStories={topStories} />
    </Fragment>
  )
}


