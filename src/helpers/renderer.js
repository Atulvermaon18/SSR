import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from '../client/Routes';

export default (req) => {
    const content = renderToString(

        <StaticRouter location={req.path} context={{}}>
            <div>{renderRoutes(Routes)}</div>
        </StaticRouter>

    );  //boot-up location

    return `
    <html>
    <head>
    <style>
        body{margin:0px !important;}
    </style>
    </head>
        <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>
    `;
}