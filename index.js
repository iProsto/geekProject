let app = require('express')();
let home = require('./routes/home/home');

const PORT = process.env.PORT || 3000;


app.use('/', home);


app.listen(PORT, function(){
    console.log(`Server was started on ${PORT}`);
});

