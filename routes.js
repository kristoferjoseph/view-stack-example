module.exports = [
  {
    path: '/',
    data: {
      persist: true,
      layer: 'screens',
      callback: function() {
        return require('./screens/a')
      }
    }
  }, {
    path: '/a',
    data: {
      persist: true,
      layer: 'screens',
      callback: function() {
        return require('./screens/a')
      }
    }
  }, {
    path: '/b',
    data: {
      persist: true,
      layer: 'screens',
      callback: function() {
        return require('./screens/b')
      }
    }
  }, {
    path: '/c',
    data: {
      layer: 'sheets',
      callback: function() {
        return require('./screens/c')
      }
    }
  }, {
    path: '/d',
    data: {
      layer: 'modals',
      callback: function() {
        return require('./screens/d')
      }
    }
  }
]
