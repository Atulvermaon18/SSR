import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import Button from '@material-ui/core/Button';

const App = ({ route }) => {
    return (
        <div>
            <Header />
            {renderRoutes(route.routes)}
        </div>
    )
}

export default {
    component: App
}