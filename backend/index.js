const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const UserModel = require("./Models/User");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 5000 
// mongodb://localhost:27017

app.use(cors());
app.use(bodyParser.json());

// app.listen(5000,function(){
//     console.log("cors enabled")
// })

const db = "mongodb+srv://sam401:9760888906@cluster0.fe8jegt.mongodb.net/form?retryWrites=true&w=majority";
// const db = "mongodb+srv://sam01:9760888906@cluster0.e2ut4be.mongodb.net/formdata?retryWrites=true&w=majority";

// useNewUrlParser:true,
//     useCreateIndex:true,
//     useUnifiedTopology:true
//     useFindAndModify:false

//static file
 
// app.use(express.static(path.join(__dirname , '../frontend/build')))

// app.get("*",function(req,res){
//   res.sendFile(path.join(__dirname , "../frontend/build/index.html"))
// })

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.get("/", (req, res) => {
  res.write("hello");
  console.log(db);
  res.end("");
});

mongoose
  .connect(db, connectionParams)
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });
// let database = mongoose.connection

app.listen(PORT, () => {
  console.log("server started");
  // console.log(database)
});

app.get("/read", (req, res) => {
  UserModel.find((err, data) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      // console.log(data)
      return res.status(200).send(data);
    }
  });
});

app.post("/insert", (req, res) => {
  const userModel = new UserModel();
  (userModel.name = req.body.name), //to be inserted
    (userModel.marks = req.body.marks); //to be inserted
  console.log("insert api", req.body);
  userModel.save((err, data) => {
    if (err) {
      console.log("error");
    } else {
      res.status(200).send("Inserted to db");
    }
  });
});

// http://localhost:5000/update?id=63d26b17fa449792eda1452c&name=xyz
// http://localhost:5000/update?id=63d26b17fa449792eda1452c&marks=1

app.put("/update", (req, res) => {
  const userModel = new UserModel();
  (userModel.name = req.body.name), //to be updated
    (userModel.marks = req.body.marks); //to be updated
  (userModel._id = req.query.id), console.log(req.query);
  UserModel.findByIdAndUpdate(
    req.query.id,
    { name: req.body.name },
    { marks: req.body.marks },
    (err, data) => {
      //either {marks:req.query.marks}
      if (err) {
        return res.status(500).send(err);
      } else {
        // console.log(data)
        return res.status(200).send(data);
      }
    }
  );
});

app.delete("/delete", (req, res) => {
  const userModel = new UserModel();
  (userModel._id = req.query.id), console.log(req.query);
  UserModel.deleteOne({ _id: req.query.id }, (err, data) => {
    //entry to be deleted
    if (err) {
      return res.status(500).send(err);
    } else {
      // console.log(data)
      return res.status(200).send(data);
    }
  });
});

// app.get("/delete",(req,res)=>{
//     UserModel.remove({marks:32},(err,data)=>{  //entry to be deleted
//         if(err){
//             return res.status(500).send(err)
//         }else{
//             // console.log(data)
//     return res.status(200).send(data)
//         }
//     })
// })


// "dev": "nodemon index.js"
