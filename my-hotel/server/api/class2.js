const express = require("express");
const router = express.Router();
const filename = "./database/database.sqlite";
const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename
  }
});
// get '/customers'
router.get("/customers", (req, res) => {
  const sqlStatement = "select * from customers";
  knex.raw(sqlStatement).then(data => {
    res.json(data);
  });
});
// get '/customers/:id'
router.get("/customers/id/:id", (req, res) => {
  const sqlStatement = `select * from customers where id =${req.params.id}`;
  knex.raw(sqlStatement).then(data => {
    res.json(data);
  });
});
// get '/customers/surname/:surname'
router.get("/customers/surname/:surname", (req, res) => {
  const sqlStatement = `select * from customers where surname = 
  "${req.params.surname}"`;
  knex.raw(sqlStatement).then(data => {
    res.json(data);
  });
});
// post '/customers/'
router.post("/customers", function(req, res) {
  const body = req.body;
  const sqlStatement = `INSERT INTO customers
  (title,firstname, surname, email) 
  VALUES ("${body.title}", "${body.firstname}", "${body.lastname}", "${
    body.email
  }");`;
  knex.raw(sqlStatement).then(data => {
    //console.log(req.body)
    res.send("successfully customers added");
  });
});
// put '/customers/:id'
router.put("/customers/:id", function(req, res) {
  const id = req.params.id;
  const body = req.body;
  const sqlStatement = `update customers
    set title= "${body.title}",email= "${body.email}" where id = ${id}`;
  knex.raw(sqlStatement).then(data => {
    res.json(data);
  });
});
// delete '/customers/:id'
router.delete("/customers/:id", function(req, res) {
  const id = req.params.id;
  //const body = req.body
  const sqlStatement = `delete from customers
      where id = ${id}`;
  knex.raw(sqlStatement).then(data => {
    res.json(data);
  });
});
// get '/reservations'
router.get("/reservations", (req, res) => {
  const sqlStatement = `select * from reservations`;
  knex.raw(sqlStatement).then(data => {
    res.json(data);
  });
});
// get '/reservations/:id'
router.get("/reservations/id/:id", (req, res) => {
  const sqlStatement = `select * from reservations where id ="${
    req.params.id
  }"`;
  knex.raw(sqlStatement).then(data => {
    res.json(data);
  });
});
// delete '/reservations/:id'
router.delete("/reservations/:id", function(req, res) {
  const id = req.params.id;
  //const body = req.body
  const sqlStatement = `delete from reservations
      where id = ${id}`;
  knex.raw(sqlStatement).then(data => {
    res.json(data);
  });
});
// post '/reservations'
router.post("/reservations/", function(req, res) {
  const body = req.body;
  const sqlStatement = `INSERT INTO reservations
  (customer_id,room_id,check_in_date,check_out_date, room_price) 
  VALUES ("${body.customer_id}","${body.room_id}","${body.check_in_date}", "${
    body.check_out_date
  }", "${body.room_price}");`;
  knex.raw(sqlStatement).then(data => {
    //console.log(req.body)
    res.send("successfully reservations added");
  });
});
// get '/reservations/starting-on/:startDate'
// TODO: add code here

// get '/reservations/active-on/:date'
// TODO: add code here

// EXPECTED JSON Object:
// {
//   customer_id: 1,
//   room_id: 1,
//   check_in_date: '2018-01-20',
//   check_out_date: '2018-01-22',
//   room_price: 129.90
// }
// TODO: add code here

// get `/detailed-invoices'
// TODO: add code here

// get `/reservations/details-between/:from_day/:to_day`
// TODO: add code here

module.exports = router;
