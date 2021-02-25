import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.css'; 
axios.defaults.baseURL = "http://localhost:5000/";
ReactDOM.render( <
    App / > ,
    document.getElementById('root')
);