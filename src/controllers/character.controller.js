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
    if (Object.keys(req.query).length === 0){
      const characters = await Characters.findAll({
        attributes: ['image', 'name']
      });
      res.json({
        data: characters
      });
    } else {
      const key = Object.keys(req.query)[0];
      const character = await Characters.findOne({
        where: {
        [key]: req.query[key]
        }
      });
      res.json({
        data: character
      });
    }
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

async function updateCharacter(req, res) {
  try {
    const { image, name, age, weight, history } = req.body;
    const { id } = req.params;
    const characters = await Characters.findAll({
      attributes: ['id_character', 'image', 'name', 'age', 'weight', 'history'],
      where: {
        id_character: id
      }
    });
    if(characters.length > 0) {
      characters.forEach(async character => {
        await character.update({
          image: image,
          name: name,
          age: age,
          weight: weight,
          history: history
        });
      });
    }
    return res.json({
      message: 'Caharacter updated succesfully',
      data: characters
    });
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  createCharacter: createCharacter,
  getCharacters: getCharacters,
  getOneCharacter: getOneCharacter,
  deleteOneCharacter: deleteOneCharacter,
  updateCharacter: updateCharacter
}
