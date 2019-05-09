import React from 'react';
import Landingpage from './pages/LandingPage';
import Voucherpage from './pages/VoucherPage';
import Emipage from './pages/EmiPage';
import App from './App';

export default [
    {
        ...App,
        routes: [
            {
                path: '/',
                ...Landingpage,
                exact: true
            },
            {
                path: '/Voucher',
                ...Voucherpage
            },
            {
                path: '/Select-EMI',
                ...Emipage
            }
        ]
    }
]



