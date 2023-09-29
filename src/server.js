import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {routes} from './routes';
import {db} from './db';
import path from 'path';
const app=express();

app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '../frontend')));

// console.log(path.join(__dirname, '../frontend', 'index.html'));
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
// });
var corsOptions = {
    origin: "https://meal-tracker-application.netlify.app",
    credentials: true,
  };
app.use(cors(corsOptions));
routes.forEach(route=>{
    app[route.method](route.path,route.handler);
});

const PORT=process.env.PORT||8080;
const start = async () => {
    await db.connect('mongodb+srv://vishu:Temp2002@mern.ur5rlrt.mongodb.net/?retryWrites=true&w=majority');
    await app.listen(PORT);
    console.log("Listening on port "+PORT);
}

start();