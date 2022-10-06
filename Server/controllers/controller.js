const Sequelize = require('sequelize');

const database = require('../config/dbConfig');
const models = require('../models/models')

class teste{

    static async visual(req, res){
      await database.sync()
      let dados = await models.findAll({
        attributes: [
          'Sala',
          'Filme',
          'Duracao',
          'Horario',
          'Ingressos_Restantes',
          'Sinopse'
        ]
      })
      res.status(200).json(dados)
    }

    static async idFilme(req, res){
      let index = req.params.id
      await database.sync()
      let dados = await models.findAll({
        where: {id: index},

        attributes: [
          'id',
          'Sala',
          'Filme',
          'Duracao',
          'Horario',
          'Ingressos_Restantes',
          'Sinopse'
        ]
        
      })
      
      res.status(200).json(dados)
    }
}

module.exports = teste;



