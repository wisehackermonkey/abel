import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import "/fonts/Tweaky.ttf"
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['bygonest', 'Droid Serif',"Fuzzy Bubbles","Permanent Marker","Cinzel"]
  }
});
import App from './App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
