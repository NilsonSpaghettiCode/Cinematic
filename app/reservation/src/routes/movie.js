const route = require('express').Router();

const ControllerMovieImp = require('../Controllers/ControllerMovie.js');


const MovieImp = require("../models/movie.js");

//Muestra todas las peliculas guardadas
route.get('/', async (req,res)=>
{
    const controller = new ControllerMovieImp(MovieImp);
    let movies = await controller.retrieve();
    res.json(movies);
})

//Muestra una pelicula y toda su información segun su ID
route.get('/:id',async (req, res)=>
{
    const controller = new ControllerMovieImp(MovieImp)
    let resp = await controller.retrieveByPk(req.params);
    res.statusCode = resp.status
    res.json(resp)
    
});

route.get('/:id/branchs', async (req, res) =>
{
    const controller = new ControllerMovieImp(MovieImp)
    let resp = await controller.retrieveMovieBranch(req.params)
    console.log(resp)
    res.json({'state':'ok'});
})

route.post('/', async (req, res)=>
{
    const controller = new ControllerMovieImp(MovieImp)
    let status = await controller.create(req.body);
    res.sendStatus(status);
});

route.put('/:id', async (req, res)=>{
    const controller = new ControllerMovieImp(MovieImp)
    let resp = await controller.update(req.params, req.body);
    res.statusCode = resp.status;
    res.json(resp)
});


route.delete('/:id', async (req, res)=>{
    const controller = new ControllerMovieImp(MovieImp)
    let resp = await controller.delete(req.params)
    res.statusCode = resp.status;
    res.json(resp);

});

module.exports = route;