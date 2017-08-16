// on definie une variable pour utiliser mYSQL


let mysql = require('mysql');

// ON CREÉ une fonction qui vas faire la conection a mysql et recuprer les info demander
function demande(callback) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "toto",
        password: "toto",
        database: "first_db"
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("connected");
        con.query("SELECT * FROM small_doggo", function(err, result, fields) {
            if (err) throw err;
            callback(result);
            // console.log(result);
        });
    })
};

// Grace au module.exports on envoie le contenue de la function a main .js 
// ATTENTION IL FAUR CREE UN OBJET CONTENANT LA CHOSE A EXPORTER
module.exports = {
    demande: demande
};