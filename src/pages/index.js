import React from 'react'
import Link from 'gatsby-link'
import timediff from 'timediff'
import pluralize from 'pluralize'
import andiImageUrl from '../assets/andi.jpg'

const Birthday = () => (
  <p>Andi was born on December 25, 2017</p>
)

const Age = () => {
  const age = timediff(new Date(2017, 12, 25), new Date())
  return (
    <h1>
      {age.months} {pluralize('month', age.months)},&nbsp;
      {age.weeks} {pluralize('week', age.weeks)},
      and {age.days} {pluralize('day', age.days)} old
    </h1>
  )
}

const IndexPage = () => (
  <div>
    <img
      src={andiImageUrl}
      width='60%'
      height='60%'
    />
    <Age />
    <Birthday />
  </div>
)

export default IndexPage
