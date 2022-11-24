const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//-------------------------

const Dish = require("./models/DishSchema");
const Feedback = require("./models/FeedbackSchema");


//-------------------------
const app = express();
app.use(cors());
app.use(express.json());
const port = 3001;
// const { response } = require("express");

//------------------------------------------------------------------------------
let url="mongodb+srv://Khuzaima1896:amnaamna@cluster0.b63hjrb.mongodb.net/test";
mongoose.connect(url
).then(()=>{
  console.log("Database Connected")
})
.catch(()=>{
  console.log("Database not Connected")
})

//------------------------------------------------------------------------------

app.post("/api/addDish", async (req, res) => {
  try {
    const dish = await new Dish(req.body);
    dish.save().then((response) => {
      console.log(response);
      res.json({ status: response });
    });
  } catch (error) {
    res.json({ status: "error" });
  }
});


app.post("/api/getDishes", async (req, res) => {
  const result = await Dish.find({}, {  _id: 0 })
    .then((response) => {
      res.send(response);
    })
    .catch({ message: "error" });
});


app.post("/api/deleteDish", async (req, res) => {
  const result = await Dish.deleteOne({
    name: req.body.name,
  });
  if (result.deletedCount == 1) {
    console.log("deleted");
  } else {
    console.log("not found");
  }
  res.send({ status: result });
});


//-------------------------------------------------------------------

app.post("/api/getfeedbacks", async (req, res) => {
  const result = await Feedback.find({}, { user_email: 1, feedback: 1, _id: 0 })
    .then((response) => {
      res.send(response);
    })
    .catch({ message: "error" });
});

//-------------------------------------------------------------------

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
