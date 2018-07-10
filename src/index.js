import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BasicExample from './BasicExample';
import ParamExample from './ParamExample'
import AuthExample from './AuthExample'
import CustomLinkExample from './CustomLinkExample'
import PreventingTransitionsExample from './PreventingTransitionsExample'
import NoMatchExample from './NoMatchExample'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NoMatchExample />, document.getElementById('root'));