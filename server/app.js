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
    console.log('receiving data with POST');
    const { username, password } = request.body;
    console.log('username: '+username+'\npassword: '+password);
    //const db = dbService.getDbServiceInstance();

    //const result = db.verifyLogin(username, password);


    
});


app.listen(process.env.PORT, () => {
    console.log(`app running at http://localhost:${process.env.PORT}`);
});