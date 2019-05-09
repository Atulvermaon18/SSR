// Startup point for client side application
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { renderRoutes } from 'react-router-config';


ReactDOM.hydrate(
    <BrowserRouter >
        <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>,
    document.querySelector('#root'));
