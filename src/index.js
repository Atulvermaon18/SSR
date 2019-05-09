import express from 'express';
import renderer from './helpers/renderer';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';

const app = express();
app.use(express.static('public')); //allowing only public folder to be accessed by browser

app.get('*', (req, res) => {
    matchRoutes(Routes, req.path)
    res.send(renderer(req));
});

app.listen(3000, () => {
    console.log('Listining on port 3000')
})