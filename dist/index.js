const express = require('express');
require('dotenv').config();
const cors = require('cors');
const calculator = require('./calculator');
// get an instance of the express app
const app = express();
// json parseer to use on the body of the request
app.use(express.json());
// applying cors as middleware to handle cor errors
app.use(cors());
const port = process.env.PORT;
const getOp = (string) => {
    if (string.includes('add') || string.includes('plus')) {
        return 'addition';
    }
    else if (string.includes('subtract') || string.includes('takeaway') || string.includes('minus')) {
        return 'subtraction';
    }
    else if (string.includes('multiply') || string.includes('product') || string.includes('multiplies') || string.includes('multiply') || string.includes('multiplication')) {
        return 'multiplication';
    }
    else {
        return 'error';
    }
};
app.get('/', (req, res) => {
    res.send({
        "slackUsername": "Zykson",
        "backend": true,
        "age": 26,
        "bio": "my name is Isaac, i go by zyk and I am aspiring to be fullstack developer"
    });
});
app.post('/', (req, res) => {
    const js = req.body;
    const { operation_type, x, y } = js;
    const op = getOp(operation_type);
    if (op !== 'error') {
        let result = calculator(x, y, op);
        res.send({ "slackUsername": "zykson", "result": result, "operation_type": op });
    }
    else {
        res.send({ "slackUsername": "zykson", "result": "", "operation_type": { "error": "please add a valid opeeration type e.g add, subtract or multiply" } });
    }
});
app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});
