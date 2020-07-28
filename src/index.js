import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main'
import './Styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));