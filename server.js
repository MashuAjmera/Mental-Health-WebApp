const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT;
const uri = process.env.URI;

// const albumsRouter = require("./routes/albums.route");
// const dataRouter = require("./routes/auth.route");
// const listRouter = require("./routes/list.route");
// const storiesRouter = require("./routes/stories.route");
// const tracksRouter = require("./routes/tracks.route");
// const usersRouter = require("./routes/users.route");

const app = express();
app.use(express.json());
app.use(cors()); // CORS Middleware

// app.use("/albums", albumsRouter);
// app.use("/data", dataRouter);
// app.use("/list", listRouter);
// app.use("/stories", storiesRouter);
// app.use("/tracks", tracksRouter);
// app.use("/users", usersRouter);

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("views/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views", "build", "index.html"));
  });
}

// mongoose
//   .connect(uri, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     const connection = mongoose.connection;
//     connection.once("open", () => {
//       console.log("MongoDB database connection established successfully.");
//     });
//   })
//   .catch((error) => console.error(error));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
