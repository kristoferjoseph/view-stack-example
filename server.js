var path = require('path')
var express = require('express')
var parser = require('body-parser')
var layouts    = require('express-ejs-layouts')
var compression = require('compression')
var lasso = require('lasso')
lasso.configure('./config.json')

var app = express()
app.use('/static', express.static('static'))
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(parser.json({limit: '5mb'}))
app.use(parser.urlencoded({extended:true}))

app.use(
  function(req, res, next) {
    var head = 'nope'
    var body = 'nope'

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
            head = result.getHeadHtml()
            body = result.getBodyHtml()

            state.head = head
            state.body = body

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

app.listen(6661, function() {
  console.log('Open http://localhost:6661 in your browser.')
})
