const Characters = require('../models/characters');

async function createCharacter(req, res) {
  const { image, name, age, weight, history } = req.body;
  try {
    let newCharacter = await Characters.create({
      image: image,
      name: name,
      age: age,
      weight: weight,
      history: history
    });
    if (newCharacter) {
      return res.json({
        message: 'Character created succesfully',
        data: newCharacter
      });
    }
  } catch (e){
    console.log(e);
    res.status(500).json({
      message: 'Something goes wrong!',
      data: {}
    })
  }
}

async function getCharacters(req, res) {
  try {
    const characters = await Characters.findAll();
    const imageNameChars = characters.map(char => {
      return {
        'image': char['dataValues']['image'],
        'name': char['dataValues']['name']
      }
    });
    res.json({
      data: imageNameChars
    });
  } catch(e) {
    console.log(e);
  }
}

async function deleteOneCharacter(req, res) {
  try {
    const { id } = req.params;
    const deleteRowCount = await Characters.destroy({
      where: {
        id_character: id
      }
    });
    res.json({
      message: 'Character deleted succesfully!',
      count: deleteRowCount
    });
  } catch (e) {
    console.log(e);
  }
}

async function getOneCharacter(req, res) {
  try {
    const { id } = req.params;
    console.log(id);
    const character = await Characters.findOne({
      where: {
        id_character: id
      }
    });
    res.json(character);
  } catch (e) {
    console.log(e);
  }
}

module.exports = createCharacter;
module.exports = getCharacters;
// module.exports = getOneCharacter;
// module.exports = deleteOneCharacter;
