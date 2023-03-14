const express = require("express");
const app = express();
const cors = require('cors')
const postPartner = require('./api/routes/postPartner');
const postDataRoute = require('./api/routes/postData');
const getDataRoute = require('./api/routes/getData');
const postMessageRoute = require('./api/routes/postMessage');
const postMessageYaramarkRoute = require('./api/routes/postMessageYaramark');

app.use('/postPartner', cors(), postPartner);
app.use('/postData', cors(), postDataRoute);
app.use('/getData', cors(), getDataRoute);
app.use('/postMessage', cors(), postMessageRoute);
app.use('/postMessageYaramark', cors(), postMessageYaramarkRoute);

// app.listen(3000, () => {
//     console.log('start');
// });

app.listen();