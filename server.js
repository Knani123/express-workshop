const express = require("express");
const app = express();

//middleware express json
app.use(express.json());
//static page
// meddleware express static
app.use(express.static(__dirname + "/public"));

//route contact
app.use("/", require("./routes/carsRouter"));
//route  cars
app.use("/", require("./routes/contactRoutes"));
//route product
app.use("/", require("./routes/product"));

//server listen
app.listen(5000, (err) => {
  if (err) {
    throw err;
  }
  console.log("Server is runing on Port 5000");
});
