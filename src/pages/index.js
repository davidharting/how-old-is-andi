import React from 'react'
import pluralize from 'pluralize'
import moment from 'moment'
import andiImageUrl from '../assets/andi.jpg'
import timediff from '../helpers/timediff'

const Birthday = () => (
  <p>Andi was born on December 25, 2017</p>
)

const Age = () => {
  const age = timediff(moment('20171225'), moment(new Date()))
  return (
    <h1>
      {age.months} {pluralize('month', age.months)},&nbsp;
      {age.weeks} {pluralize('week', age.weeks)},
      and {age.days} {pluralize('day', age.days)} old
    </h1>
  )
}

const IndexPage = () => (
  <div style={{ margin: 'auto', width: '100%', textAlign: 'center' }}>
    <img
      src={andiImageUrl}
    />
    <Age />
    <Birthday />
  </div>
)

export default IndexPage
