const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const { PostsModel } = require('./models/postsModel');

//Pour obtenir les éléments de ta db
router.get('/', (req, res) => {
  PostsModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  })
});

//Pour poster des éléments dans ta db
router.post('/', (req, res) => {
  const newRecord = new PostsModel({
    langue: req.body.langue,
    bonjour: req.body.bonjour,
    merci: req.body.merci
  });

  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log('Error creating new data : ' + err);
  })
});

// Pour update des éléments dans ta base de donnée
router.put("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id)
  
  const updateRecord = {
    langue: req.body.langue,
    bonjour: req.body.bonjour,
    merci: req.body.merci
  }; 

  PostsModel.findByIdAndUpdate(
    req.params.id,
    { $set: updateRecord},
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error : " + err);
    }
  )
});

// Pour supprimer des éléments dans ta base de donnée
router.delete("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id)
  
  PostsModel.findByIdAndRemove(
    req.params.id,
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Delete error : " + err);
    })
});

module.exports = router;