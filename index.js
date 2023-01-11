const app = require('./app');
const port = 8080;

// app listening
app.listen(port, () => {
    console.log(`Application Run on http://localhost:${port}`)
})