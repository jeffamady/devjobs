const express = require('express');
const exphbs = require('express-handlebars');
const router = require('./routes');

const app = express();
const port = process.env.PORT || 4000;

app.use('/', router());


app.listen(port, () => {
    console.log(`Server on port: ${port}`);
    
});