import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'
import App from './App';

const wrapper = <Provider store={store}><App/></Provider>

ReactDOM.render(wrapper, document.getElementById('root') || document.createElement('div'));
