//middleware  function
module.exports = sayHello = (req, res, next) => {
  console.log("hello");
  next();
};
