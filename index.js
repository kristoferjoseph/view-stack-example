var createViewStack = require('view-stack')
var routes = require('./routes')
var viewStack = createViewStack(routes)
document.body.appendChild(viewStack.element)
