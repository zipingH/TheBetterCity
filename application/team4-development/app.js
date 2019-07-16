//load our app server using express
const express = require('express')
const app = express()
var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//important.. this line creates a connection to use static files such as html saved in the
//folder views
app.use(express.static('./views'))

app.get('/', (request, response) => {
        response.sendFile('/views/Home.html', { root: __dirname })
    })
    
//create connection to get issue
const getIssue = require('./routes/getIssue.js')
app.use(getIssue);


app.listen(80, () => {
    console.log("Server is up and listening on 80...")
})