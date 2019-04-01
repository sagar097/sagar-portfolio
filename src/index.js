import './index.css';
import 'typeface-roboto';

import * as serviceWorker from './serviceWorker';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

require ( 'react-mdl/extra/material.css');
require ('react-mdl/extra/material.js') ;

ReactDOM.render( <BrowserRouter>
    <App />
      </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

module.hot.accept();
