const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log(`middleware: all. url: ${req.url}`);    
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.post("/", (req, res) => {    
    console.log('post');
    let message=req.body.message;
    let result = {         
        'message' : message,
        'datetime': new Date(),      
    };
    
    res.send(result);
});



app.get("/", (req, res) => {
   
    let id = req.query.id;
    console.log(id);   

    let result = { 
        'id' : id, 
        
    }; 
    res.send(result);
});

app.listen(3000);



