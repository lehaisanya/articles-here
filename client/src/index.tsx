import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import AppLayout from 'layouts/AppLayout'

import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <AppLayout />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)