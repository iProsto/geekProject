let PORT = require('./config-server').PORT;
let app = require('express')();

app.get('/',function(req, res) {
   res.status(200).send('Home');
});


app.listen(PORT, function(){
    console.log(`Server was started on ${PORT}`);
});

