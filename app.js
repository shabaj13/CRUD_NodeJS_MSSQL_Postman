const event = require("./event");
const dboperations = require("./dboperations");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var router = express.Router();  
const port = process.env.PORT || 8090;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', router);

router.use((req, res, next) => {
  console.log("middleware");
  next();
});

router.route('/events').get((req, res) => {

  dboperations.getEvents().then(result => {
    console.log(result);
    res.json(result);
  })

})
router.route('/events/:id').get((req, res) => {

  dboperations.getEvent(req.params.id).then(result => {
    console.log(result);
    res.json(result);
  })

})

router.route('/events').post((req, res) => {

  let event = { ...req.body }
  
  dboperations.addEvent(event).then(result => {
    console.log(result);
    res.json(result);
  })

})

router.route('/events').put((req, res) => {

  let event = { ...req.body }
  
  dboperations.updateEvent(event).then(result => {
    console.log(result);
    res.json(result);
  })

})

router.route('/events/:id').delete((req, res) => {

  dboperations.deleteEvent(req.params.id).then(result => {
    console.log(result);
    res.json(result);
  })

})


app.listen(port, () => {
  console.log(`${port} port is running`);
})
