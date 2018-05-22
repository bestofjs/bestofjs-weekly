import tinytime from 'tinytime'
import PropTypes from 'prop-types'

const template = tinytime('{MMMM} {DD}, {YYYY}', { padDays: true })

const IssueDate = ({ date }) => {
  const dateObject = typeof date === 'string' ? new Date(date) : date
  return template.render(dateObject)
}

IssueDate.propTypes = {
  date: PropTypes.string.isRequired
}

export default IssueDate
