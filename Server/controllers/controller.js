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



create database cinema;

use cinema;

desc programacaos;
select * from programacaos;

insert into programacaos values(null, 'Sala 1', 'Orfã: A origem', '98min', '15:00', '100', '0', '100', '0', 'A aterradora saga de Esther continua nesta emocionante prequela, Órfã.Depois de planear uma brilhante fuga de um hospital psiquiátrico na Estónia, Esther viaja até a América passando-se pela filha desaparecida de uma família milionária.No entanto, após uma inesperada reviravolta, a mãe começa a desconfiar da "criança" assassina, e tudo faz para proteger a sua família.',now(), now());
insert into programacaos values(null, 'Sala 1', 'Orfã: A origem', '98min', '18:00', '100', '0', '100', '0', 'A aterradora saga de Esther continua nesta emocionante prequela, Órfã.Depois de planear uma brilhante fuga de um hospital psiquiátrico na Estónia, Esther viaja até a América passando-se pela filha desaparecida de uma família milionária.No entanto, após uma inesperada reviravolta, a mãe começa a desconfiar da "criança" assassina, e tudo faz para proteger a sua família.',now(), now());
insert into programacaos values(null, 'Sala 2', 'Não se preocupe, querida', '123min', '17:00', '120', '0', '120', '0', 'Uma dona de casa que vive em uma comunidade experimental começa a suspeitar que a empresa de seu marido está escondendo segredos perturbadores.',now(), now());
insert into programacaos values(null, 'Sala 3', 'O telefone preto', '103min', '22:00', '110', '0', '110', '0', 'Finney Shaw, de 13 anos, é sequestrado por um sádico assassino mascarado e mantido em um porão à prova de som. Até que um telefone desconectado na parede começa a tocar, e ele logo descobre que pode ouvir as vozes das vítimas anteriores do maníaco.',now(), now());
insert into programacaos values(null, 'Sala 4', 'A mulher Rei', '120min', '16:00', '90', '0', '90', '0', 'Em 1800, o general Nanisca treina um grupo de mulheres guerreiras para proteger o reino africano de Dahomey de um inimigo estrangeiro.',now(), now());
insert into programacaos values(null, 'Sala 4', 'A mulher Rei', '120min', '20:00', '90', '0', '90', '0', 'Em 1800, o general Nanisca treina um grupo de mulheres guerreiras para proteger o reino africano de Dahomey de um inimigo estrangeiro.',now(), now());
insert into programacaos values(null, 'Sala 5', 'Avatar', '150min', '18:00', '100', '0', '100', '0', 'No exuberante mundo alienígena de Pandora vivem os Navi, seres que parecem ser primitivos, mas são altamente evoluídos. Como o ambiente do planeta é tóxico, foram criados os avatares, corpos biológicos controlados pela mente humana que se movimentam livremente em Pandora. Jake Sully, um ex-fuzileiro naval paralítico, volta a andar através de um avatar e se apaixona por uma Navi. Esta paixão leva Jake a lutar pela sobrevivência de Pandora.',now(), now());
insert into programacaos values(null, 'Sala 6', 'Sorria', '115min', '21:00', '90', '0', '90', '0', 'Após um paciente sofrer um trauma, um médico começa a se distrair em seus próprios pensamentos.',now(), now());
insert into programacaos values(null, 'Sala 7', 'A Queda', '107min', '15:00', '150', '0', '150', '0', 'O Terror Alcança Novas Alturas! Para Becky e Hunter, vencer o medo é encará-lo de frente. Mas será que elas vão continuar pensando assim depois de escalarem quase 600 metros de uma torre de rádio remota e abandonada?',now(), now());
insert into programacaos values(null, 'Sala 7', 'A Queda', '107min', '20:30', '150', '0', '150', '0', 'O Terror Alcança Novas Alturas! Para Becky e Hunter, vencer o medo é encará-lo de frente. Mas será que elas vão continuar pensando assim depois de escalarem quase 600 metros de uma torre de rádio remota e abandonada?',now(), now());


