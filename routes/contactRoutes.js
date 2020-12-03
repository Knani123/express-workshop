const express = require("express");
const route = express.Router();
const contacts = require("../database/database");
const sayHello = require("../midlewares/midleware");

//get all contacts
route.get("/contacts", (req, res) => {
  res.send({ Allcontacts: contacts });
});
//get one contact by id
route.get("/contact/:id", (req, res) => {
  const contact = contacts.find((el) => el.id == req.params.id);
  res.json(contact);
});
//delete one by id
route.delete("/contacts/:id", (req, res) => {
  const restContact = contacts.filter((el) => el.id !== +req.params.id);
  res.json(restContact);
});
//create data
route.post("/contacts", sayHello, (req, res) => {
  const newContact = req.body;
  const newDataContact = [...contacts, newContact];
  res.send(newDataContact);
});
//update
route.put("/contacts/:id", (req, res) => {
  const updateContact = contacts.map((el) =>
    el.id == req.params.id ? { ...el, ...req.body } : el
  );
  res.send(updateContact);
});
module.exports = route;
