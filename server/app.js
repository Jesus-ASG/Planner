const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded( { extended : false } );

const jwt = require('jsonwebtoken')

const cors = require('cors');
require('dotenv').config();

const dbService = require('./dbService');
const { response } = require('express');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false})); //()
app.use(express.static('public'));

// ROUTES

// Login
app.get('/login', authenticateToken, (request, response) => {
    console.log('hi from get method');
});
app.post('/login', (request, response) => {
    const { username, password } = request.body; // recieve what data index.js sent [1]->[2]
    const db = dbService.getDbServiceInstance(); // get reference from database
    const result = db.verifyLogin(username, password);  // call function in database, result is the output
    
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)

    result
    .then(data => response.json({data : data})
        )  // send database output to index.js [3]
    .catch(err => console.log(err));    // catch an error if it exists

    


});

function authenticateToken(req, res, next){
    const authHeader = req.headers['autorization']
    const token = authHeader && authHeader.split(' ')[1] // if exist return token otherwise return undefined
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

app.listen(process.env.PORT, () => {
    console.log(`app running at http://localhost:${process.env.PORT}`);
});