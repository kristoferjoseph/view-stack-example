var yo = require('yo-yo')

module.exports = function(data) {
  function click(e) {
    data.navigate(data.next)
  }
  return yo`
    <button
      class='button'
      onclick=${click}
    >
      NEXT
    </button>
  `
}
