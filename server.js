const express=require('express');
const mongoose=require('mongoose');
require('dotenv').configure();

const app=express();

const port=process.env.PORT||5000;
const uri=process.env.URI;
const albumsRouter = require('./routes/albums');

const dataRouter = require('./routes/data');


const listRouter = require('./routes/list');

const storiesRouter = require('./routes/stories');


const tracksRouter = require('./routes/tracks');

const usersRouter = require('./routes/users');



app.use(express.json());
app.use('/albums', albumsRouter );

app.use('/data', dataRouter );

app.use('/list', listRouter );

app.use('/stories', storiesRouter );

app.use('/tracks', tracksRouter );

app.use('/users', usersRouter );



mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})



app.listen(port,console.log('Server is running on port: ${port}'));