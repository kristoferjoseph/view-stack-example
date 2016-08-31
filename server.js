var path = require('path')
var express = require('express')
var parser = require('body-parser')
var layouts    = require('express-ejs-layouts')
var compression = require('compression')
var routes = require('./routes')
var viewStack = require('view-stack')(routes)
var lasso = require('lasso')
var app = express()
app.use('/static', express.static('static'))
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(parser.json())
app.use(parser.urlencoded({extended:true}))
app.use(
  function(req, res, next) {
    res.blap = function(state) {
      state = state || {}
      state.serverState = JSON.stringify(state)
      lasso.lassoPage(
        {
          name: 'Begin',
          dependencies: './browser.json'
        },
        function(err, result) {
          if (err) {
            console.error(err)
            return
          }
          else {
            state.css  = result.getHeadHtml()
            state.body = viewStack.renderStatic(req.path)
            state.js   = result.getBodyHtml()
            res.render('wrapper', state)
          }
        }
      )
    }
    next()
  }
)

app.get('/', function(req, res) {
  res.blap({title:'view-stack'})
})

app.get('/a', function(req, res) {
  res.blap({title:'A'})
})

app.get('/b', function(req, res) {
  res.blap({title:'B'})
})

app.get('/c', function(req, res) {
  res.blap({title:'C'})
})

app.get('/d', function(req, res) {
  res.blap({title:'C'})
})

app.listen(6661, function() {
  console.log('Open http://localhost:6661 in your browser.')
})
