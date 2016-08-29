var yo = require('yo-yo')
var btn = require('../components/button')
module.exports = function A(data) {
  data.next = '/b'
  return yo`
    <div class='a'>
      <h1>A</h1>
      ${btn(data)}
    </div>
  `
}
