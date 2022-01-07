const https = require('https');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdb'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});


exports.wetherCondition = (req, res, next) => {
    const { location } = req.query;
    const url = "https://api.openweathermap.org/data/2.5/weather";
    let body = '';
    const request = https.get(`${url}?q=${location}&appid=${process.env.WEATHER_API_KEY}`, (resp) => {

        //Read the data
        resp.on('data', function (chunk) {
            body += chunk;
        });
        resp.on("end", () => {
            if (resp.statusCode == 200) {
                console.log(body, 'body')
                body = JSON.parse(body);
                let { dt, main: { temp, feels_like, temp_min, temp_max } } = body;
                // let req_time = new Date();
                connection.query(`INSERT INTO weather( location, temp,feels_like, temp_min,temp_max,req_time) VALUES ('${location}',${temp},${feels_like},${temp_min},${temp_max},SYSDATE())`,(error, results, fields)=>{
                    console.log(results,'resultresult')
                });
                res.send(`Current Wether   + ${JSON.stringify(body)} `)
            }
        })
    })

}

exports.searchedWeathers = (req,res,next) =>{
    connection.query(`SELECT * FROM weather`,(error, results, fields)=>{
        console.log(results,'resultresult');
        res.send(results);
    });
}