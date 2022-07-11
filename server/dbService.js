const mysql = require('mysql');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();

// Setting connection params 
const connection = mysql.createConnection({
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
    port : process.env.DB_PORT
});

// Connect db
connection.connect((err)=>{
    if (err)
        console.log(err.message);
});

class DbService{
    static getDbServiceInstance(){
        return instance ? instance : new DbService();
    }

    async printUsers(){
        try{
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM users;";
                connection.query(query, (error, results) => {
                    if (error)
                        reject (new Error(err.message));
                    resolve(results);
                });
            });
            console.log(response);
        }catch(error){
            console.log(error);
        }
    }

    async verifyLogin(username, password){
        try{
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM users WHERE name = ? AND password = ?;";
                connection.query(query, [username, password], (error, results) => {
                    if (error)
                        reject (new Error(err.message));
                    resolve(results);
                });
            });
            return response;
            console.log(response);
        }catch(error){
            console.log(error);
        }
    }
    
}

module.exports = DbService;