import express from 'express';
import routes from './routes';

const app = express()
app.use((req, res, next) => {    //CORS 

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
    res.header('Access-Control-Allow-Methods', 'POST, PUT, GET,PATCH,DELETE');
    res.header('Access-Control-Expose-Headers', 'X-Api-Version, X-Request-Id, X-Response-Time');
    next();
});
app.use(express.json())
app.use('/', routes)

app.listen(4201, '127.0.0.1', function () {
    console.log("server listening");

})