var yo = require('yo-yo')
var btn = require('../components/button')
module.exports = function D(data) {
  data.next = '/'
  return yo`
    <div class='d'>
      <h1>D</h1>
      ${btn(data)}
    </div>
  `
}
