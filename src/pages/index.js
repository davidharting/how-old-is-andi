import React from 'react'
import Link from 'gatsby-link'
import andiImageUrl from '../assets/andi.jpg'

const Birthday = () => (
  <p>Andi was born on December 25, 2017</p>
)

const IndexPage = () => (
  <div>
    <img src={andiImageUrl} />
    <Birthday />
  </div>
)

export default IndexPage
