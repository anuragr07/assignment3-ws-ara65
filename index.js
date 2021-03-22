const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const port = 8000;
const corsOptions = {
    origin: '*'
}

app.use(bodyParser.json());
app.use('/static', express.static('static'));
app.use(cors());


// All routes
const inventoryRouter = require('./RoutesAra65/inventoryRouterAra65');
const cartRouter = require('./RoutesAra65/cartRouterAra65')

// Using routes
app.use('/inventoryAra65', inventoryRouter);
app.use('/cartAra65', cartRouter);

app.listen(port, () => {
    console.log(`Shopping web service listening on ${port}`);
})
