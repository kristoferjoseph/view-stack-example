var yo = require('yo-yo')
var btn = require('../components/button')
module.exports = function C(data) {
  data.next = '/d'
  return yo`
    <div class='c'>
      <h1>C</h1>
      ${btn(data)}
    </div>
  `
}
