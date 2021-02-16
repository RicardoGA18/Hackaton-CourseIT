const Animal = require('../models/animal-model') 

const getAnimals = (req,res) => {
  res.json({
    message: "Mensaje de prueba"
  })
}

const newAnimal = async (req,res) => {
  const {name,country,species,age,description} = req.body
  const animal = new Animal(req.body)
  console.log(req.body)
  await animal.save()
  return res.status(201).json({
    ok: true,
    msg: 'registro'
  })
}

module.exports ={
  getAnimals,
  newAnimal
}