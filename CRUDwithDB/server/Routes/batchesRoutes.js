const express = require("express");
const batchesModel = require("../models/batches");
var bodyParser = require('body-parser');
const batches = require("../models/batches");

const app = express();

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json());


app.get("/batches", async (request, response) => {
  const batches = await batchesModel.find({});
  try 
  {
    response.send(batches);
  } 
  catch (error) 
  {
    response.status(500).send(error);
  }
});

app.post("/batches", async (request, response) => {
    const batches = new batchesModel(request.body);
    try 
    {
      await batches.save();
      response.send(batches);
    }
     catch (error) 
     {
      response.status(500).send(error);
    }
  });

  app.delete("/batches/:id", async(request, response) =>{
    try
    {
        batches = await batchesModel.findByIdAndDelete(request.params.id);
        if(!batches)
        { 
            response.status(404).send("There is no such batch");
        }
    }
    catch(error)
    {
        response.status(500).send(error);
    }
  })

  app.patch("/batches/:id", async(request, response)=>{
    try
    {
        await batchesModel.findByIdAndUpdate(request.params.id, request.body);
        await batchesModel.save();
    }
    catch(err)
    {
      response.status(500).send("Failure in update");
    }
  })

module.exports = app;



//CRUD Application

//C -> Create
//Endpoint : post
//Mongodb function : save()
//

//R -> Read
//Endpoint : get
//Mongodb function : find()
//select * from tablename
//insert into tablename

//U -> Update
//Endpoint: patch
//Mongodb function : findByIdAndUpdate
//update tablename set duration = _______ where id = _______;

//D -> Delete
//Endpoint : Delete
//Mongodb function : findByIdAndDelete
//delete from tablename where id = _______;