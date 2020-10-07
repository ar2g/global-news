"use strict";

import React, {Fragment, useEffect, useState} from 'react'
import {getTitle} from '../countries'

export const TopStories = ({countryCode}) => {
  
  const API_URL = `https://newsapi.org/v2/top-headlines?country=${countryCode}`
  
  let headers = new Headers();
  headers.append("x-api-key", "1198979c43af49d18fcdeffeeec571de")
  
  let requestOptions = {
    method: 'GET',
    headers,
    redirect: 'follow'
  }
  
  const [topStories, setTopStories] = useState(null);
  
  //TODO: use a dedicated hook like useFetch

  useEffect(() => {

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
      <br/>
      {topStories && <h5>Top stories in {getTitle(countryCode)}</h5>}
      <br/>
      {topStories ? topStories.map(i => {
        return (
          <Fragment key={`frag${i.url}`}>
            {/* <img src={i.urlToImage} key={`img${i.urlToImage}`} /> */}
            <p key={`p${i.url}`}>{i.title}</p>
          </Fragment>
        )
      }) : <p>Loading stories...</p>}
    </Fragment>
  )
}


