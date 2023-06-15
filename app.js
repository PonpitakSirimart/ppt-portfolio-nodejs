const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});