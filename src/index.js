import React from 'react';
import ReactDOM from 'react-dom';
import TLogin from './components/molecules/t-login/t-login';

const element = <TLogin isLoggedIn={false} />
ReactDOM.render(element, document.getElementById('root'));