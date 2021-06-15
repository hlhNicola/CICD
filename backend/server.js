const express = require('express')
const cors = require('cors');
const db = require("./app/routes/model/index");

const app = express();
app.disable("x-powered-by");
const port = 8000;
let corsOptions = {
    origin: 'localhost:3000' // Compliant
  };
  app.use(cors(corsOptions));
  
  // Configuring body parser middleware
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  db.mongoose
    .connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("Connected to the database!");
    })
    .catch(err => {
      console.log("Cannot connect to the database!", err);
      process.exit();
    });
  
    app.post('/', (req, res) => {
      var myData = new Diet(req.body);
      myData.save()
        .then(item => {
          res.send("item saved to database");
        })
        .catch(err => {
          res.status(400).send("unable to save to database");
        });
    })


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));