const app = require("./app");
const mongoose = require("mongoose");
const MONGOURI =
  "mongodb+srv://kantasaimanikanta:aaykTfqERDe3mlU0@cluster0.1akrvep.mongodb.net/";
const port = 7000;
mongoose
  .connect(MONGOURI)
  .then(() => {
    console.log("mongodb connected successfully ");
  })
  .catch((e) => {
    console.log(e);
  });
app.listen(port, () => console.log(`App listening on port ${port}!`));
