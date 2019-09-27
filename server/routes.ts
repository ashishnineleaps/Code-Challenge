import express from 'express';
const router = express.Router()
// import todo from './controller/todos'
import request from 'request';
import { parse } from 'querystring';

router.get('/', (req, res) => {
    res.send({
        message: "Welcome to code Challenge"
    })
})
router.get('/showTodo', (req, res) => {
    request.get('https://jsonplaceholder.typicode.com/todos', function (error, response, body) {
        var object = JSON.parse(body)
        res.status(200).json(object)

    })
})
router.get('/showTodoUserId', (req, res) => {
    request.get(`https://jsonplaceholder.typicode.com/todos/${req.query.id}`, function (error, response, body) {
        var object = JSON.parse(body)
        res.status(200).json(object)

    })
})
export =router;
