function createCharacter(req, res) {
  console.log(req.body);
  res.send('received');
}
 module.exports = createCharacter;
