import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import './library/modal.min.js'
import './index.scss'

document.documentElement.classList.add('mts-theme', 'mts-theme-light')

ReactDOM.render(<App />, document.getElementById('root'))
