/**
 * Formats a JavaScript date to a String used in reports filepaths
 * E.g.: `2018-05-13`
 * @param {date} date 
 */

function dateToString(date) {
  return date.toISOString().slice(0, 10)
}

module.exports = { dateToString }
