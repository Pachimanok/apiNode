const express = require("express");
const app = express();

// Settings 
app.set('port', process.env.PORT || 3000);

// Middelwares
app.use(express.json());

// Route (Urls)
app.use(require('./routes/employees'));
// Inicia el Servidor

app.listen(app.get('port'), () => {
    console.log('Sever port', app.get('port'));
});