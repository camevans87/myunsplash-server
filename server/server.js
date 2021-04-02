import express from 'express';
import routes from './routes/imgRoutes';
import mongoose from 'mongoose';
require('dotenv').config();
var cors = require('cors');

const app = express();

const PORT = 4000;

app.use(cors());

app.get('/', (req, res) =>
  res.send(`Node & Express are running on port ${PORT}`)
);
const mongo_un = process.env.Mongo_Db_Username;
const mongo_db = process.env.Mongo_Db_Database;
const mongo_pw = process.env.Mongo_Db_Password;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(
  `mongodb+srv://${mongo_un}:${mongo_pw}@cluster0.vjqxd.mongodb.net/${mongo_db}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//bodyparser setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server is running on port ${PORT}`)
);
