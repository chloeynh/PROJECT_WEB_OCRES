const mongoose = require('mongoose');

mongoose.connect(
  "mongodb://localhost:27017/dashboardVoyage",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("Mongodb connected");
    else console.log("Connection error :" + err);
  }
) 