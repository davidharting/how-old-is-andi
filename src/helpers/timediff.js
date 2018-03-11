/**
 * 
 * @param {Object} start - a moment object
 * @param {*} end - a moment object
 * @return {Object} contains number of years, months, weeks, and days between
 */
export default function timediff(start, end) {
  console.log(start.format('YYYY MM DD'))

  const years = end.diff(start, 'years')
  start = start.add(years, 'years')
  console.log(start.format('YYYY MM DD'))

  const months = end.diff(start, 'months')
  start = start.add(months, 'months')
  console.log(start.format('YYYY MM DD'))

  const weeks = end.diff(start, 'weeks')
  start = start.add(weeks, 'weeks')
  console.log(start.format('YYYY MM DD'))

  const days = end.diff(start, 'days')

  return {
    years,
    months,
    weeks,
    days
  }
}
