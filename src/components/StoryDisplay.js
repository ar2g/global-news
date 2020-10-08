"use strict";

import React, {Fragment} from 'react'
import {Card} from 'react-bootstrap'

export const StoryDisplay = ({topStories}) => {
  return (
    <div className={'cardContainer'}>
    {
      topStories ? topStories.map(i => {
        return (
          <Fragment key={`frag${i.url}`}>
            <Card 
              key={`card${i.urlToImage}`}
            >
              <Card.Img variant="top" src={i.urlToImage} /> 
              <Card.Body>
                <Card.Title>{i.title}</Card.Title>
                <Card.Text id='cardText'>
                  {i.description}
                </Card.Text>
                <Card.Link href={i.url}>Read More</Card.Link>
              </Card.Body>
            </Card>
          </Fragment>
        )
      }) : <p>Loading stories...</p>
    }
    </div>
  )
}