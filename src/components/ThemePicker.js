"use strict";

import React from 'react'

export const ThemePicker = () => {
  const setTheme = themeURL => document.getElementById('theme').setAttribute('href', themeURL)
  const onMouseOver = e => e.target.style.background = '#5bc0de'
  const onMouseOut = e => e.target.style.background = ''
  const themeURLs = { 
    dark: 'https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/darkly/bootstrap.min.css', 
    light: 'https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css'
  }

  const emojis = {
    dark: '🔅',
    light: '🔆'
  }

  return (
    <div className="pull-left">

      <span>Pick theme  </span>
        <span 
          onClick={setTheme.bind(undefined, themeURLs.dark)}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
        >
          {emojis.dark}
        </span>
        

      <span> </span>
        <span 
          onClick={setTheme.bind(undefined, themeURLs.light)}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
        >
          {emojis.light}
        </span>

    </div>
  )

}