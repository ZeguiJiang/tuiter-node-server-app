// import posts from "./tuits.js";
// let tuits = posts;

import * as tuitsDao from './tuits-dao.js'

const createTuit = async (req, res) => {
    const newTuit = req.body;
    // newTuit._id = (new Date()).getTime()+'';
    // newTuit.topic= "user",
    newTuit.image = "nasa.png";
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.disliked = true;
    newTuit.dislikes = 0;
    newTuit.handle = "@nasa";
    newTuit.time = "just now";
    // tuits.push(newTuit);
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}


// const findTuits  = (req, res) => res.json(tuits); 

const findTuits  = async(req, res) => {
    const tuits = await tuitsDao.findTuits();
    //console.log("hihi i am here")
    res.json(tuits);
  }




const updateTuit = async (req, res) => {
    const tuitdId = req.params.tid;
    const updates = req.body;


    // const tuitIndex = tuits.findIndex((t) => t._id === tuitdId)
    // tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};

    const status = await tuitsDao
    .updateTuit(tuitdId, updates);
    res.sendStatus(200);
}


const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    // tuits = tuits.filter((t) =>
    //   t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}


export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}
