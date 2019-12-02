const express = require('express'); //da acceso a la biblioteca express buscando en sus node_modules "express"
const app = express(); // crea una instancia del constructor express, al que llamaremos "aplicación".

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


app.listen(8000,function(){
    console.log("server is running")  // iniciará el servidor localmente en el puerto que proporcione como primer argumento 
    })