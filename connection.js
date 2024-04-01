
const mysql = require("mysql");

const dbConfig = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "crud",
   
};

const con = mysql.createConnection(dbConfig);

con.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log("Connection to MySQL server established..!!");
});

// Exporting connection object
module.exports = {con};
