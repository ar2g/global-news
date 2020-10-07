"use strict";

export const countries = {
  "gb": {"flag": "🇬🇧", "article":"the", "name": "UK"},
  "us": {"flag": "🇺🇸", "article":"the", "name": "USA"},
  "au": {"flag": "🇦🇺", "article":"", "name": "Australia"},
  "in": {"flag": "🇮🇳", "article":"", "name": "India"},
  "fr": {"flag": "🇫🇷", "article":"", "name": "France"},
}


export const getTitle = countryCode => {
  if(countries[countryCode].article) {
    return `${countries[countryCode].article} ${countries[countryCode].name}`
  } else {
    return `${countries[countryCode].name}`
  } 
}