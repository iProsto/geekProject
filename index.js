let app = require('express')();
const PORT = process.env.PORT || 3000;

app.get('/',function(req, res) {
   res.status(200).send('Home');
});


app.listen(PORT, function(){
    console.log(`Server was started on ${PORT}`);
});

