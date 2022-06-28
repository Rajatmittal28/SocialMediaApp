const mongoose = require("mongoose");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./config.env" });
}

exports.connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((err) => console.log(err));
};

