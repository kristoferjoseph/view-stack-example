var yo = require('yo-yo')
var btn = require('../components/button')
module.exports = function B(data) {
  data.next = '/c'
  return yo`
    <div class='b'>
      <h1>B</h1>
      ${btn(data)}
    </div>
  `
}
