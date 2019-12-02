const express = require('express'); //da acceso a la biblioteca express buscando en sus node_modules "express"
const app = express(); // crea una instancia del constructor express, al que llamaremos "aplicación".

const bodyParser = require('body-parser');
app.use(bodyParser.json());



const mockUserData=[ //JSON
    {name:'Mark'},
    {name:'Jill'}
    ]
    app.get('/users', function(req,res){ //GET 
         res.json({
              success: true,
              message: 'successfully got users. Nice!',
              users: mockUserData
         })
    })

    app.get('/users/:id',function(req,res){ //ejemplo de ruta dinamica
        console.log(req.params.id)
        res.json({
            success: true,
            message: 'got one user',
            user: req.params.id
        })
    })

    app.post('/login',function(req,res){ //POST login example
        const username=req.body.username;
        const password=req.body.password;
    
        const mockUsername="billyTheKid";
        const mockPassword="superSecret";
    
        if (username===mockUsername && password===mockPassword){
             res.json({
                  success: true,
                  message: 'password and username match!',
                  token: 'encrypted token goes here'
             })
        } else {
             res.json({
                  success: false,
                  message: 'password and username do not match'
             })
        }
   })


app.listen(8000,function(){
    console.log("server is running")  // iniciará el servidor localmente en el puerto que proporcione como primer argumento 
    })