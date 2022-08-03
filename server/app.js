const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded( { extended : false } );

const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const dbService = require('./dbService');
const { response } = require('express');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false})); //()
app.use(express.static('public'));

// ROUTES

// Login
app.get('/login', (request, response) => {
    console.log('hi from get method');
});
app.post('/login', (request, response) => {
    const { username, password } = request.body; // recieve what data index.js sent [1]->[2]
    const db = dbService.getDbServiceInstance(); // get reference from database
    const result = db.verifyLogin(username, password);  // call function in database, result is the output

    result
    .then(data=> response.json({data : data}))  // send database output to index.js [3]
    .catch(err => console.log(err));    // catch an error if it exists
});


app.listen(process.env.PORT, () => {
    console.log(`app running at http://localhost:${process.env.PORT}`);
});