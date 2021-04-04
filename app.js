const express = require('express');
const axios = require('axios');
const app = express();

const connection = require('./db/connection');

const JokeComment = require('./models/JokeComment');
const User = require('./models/Users');

app.use(express.static('public'));
app.use(express.json());


app.get('/comments/:id', (req,res)=>{

    JokeComment.find({'_id':req.params.id}).populate('user').exec()
    
    .then(results=>{

        res.send(results);
    })
    .catch(error=>res.send(error));

});

app.get('/comments', (req,res)=>{

    JokeComment.find().populate('user').exec()
    .then(results=>{

        res.send(results);
    })
    .catch(error=>res.send(error));

});

app.get('/joke', (req,res)=>{
    
     const baseUrl = "https://api.chucknorris.io/jokes/random";
     const jokeUrl = req.params.category? `${baseUrl}?category=${req.params.category}`:baseUrl;
    
    axios.get(jokeUrl)
            
    .then(results=>{

        res.send(results.data);
    })
    .catch(error=>res.send(error));

});



app.get('/cat', (req,res)=>{

    axios.get('https://aws.random.cat/meow')
    
    .then(results=>{
         res.send(results.data);
    })
    .catch(error=>res.send(error));

});


app.post('/comments', (req,res)=>{
    
    User.findOrCreate({email:req.body.email}, {name:req.body.userName}, (err, result) =>{
       if(err){
           res.send(err);
           return
       }
       let comment = new JokeComment({...req.body, user:result._id});
        comment.save()
        .then(result=>{
            res.send(comment);
        })
        .catch(error=>res.send(error));   
    })
    
});



connection.once('open', ()=>{

    console.log('connected to db');

        const server = app.listen( process.env.PORT, ()=>{
        console.log('connected');
    });
});
