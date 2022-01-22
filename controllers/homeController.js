module.exports = (_, res) => {
  try {
    res.render("index");
  } catch (err) {
    console.log(err);
  }
};
