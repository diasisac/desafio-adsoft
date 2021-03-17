const { User } = require('../models');

class UserController {
  
  async index(req, res) {
    try {
      let limit = 10;   
      let offset = 0;
      User.findAndCountAll()
      .then((data) => {
        let page = req.query.page ? parseInt(req.query.page) : 1;
        
        let pages = Math.ceil(data.count / limit);
        offset = limit * (page - 1);
        User.findAll({
          limit: limit,
          offset: offset,
          $sort: { id: 1 }
        })
        .then((users) => {
          res.status(200).json({'error':false,'result': users, 'count': data.count, 'pages': pages, 'page':page});
        });
      })
      .catch(function (error) {
        res.status(500).send('Internal Server Error');
      });
    }catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const {id} = req.params;
      const user = await User.findAll({
        where: {
          id: id
        }
      }).then((users) => {
        console.log(users);
        if(users!='')
        res.status(200).json({'error':false,'result': users});
        else
        res.status(400).json({'error':true,'msg': "Usuário não encontrado"});
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      req.body.salt = Math.random();
      const user = await User.create(req.body);
      res.status(200).json({'error':false,'msg': "Usuário criado com sucesso!"});
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
    const {id} = req.params;
    const user = await User.findAll({
      where: {
        id: id
      }
    }).then( async (users) => {
      if(users!='')
      {
            await User.update({ 
            nome: req.body.nome,
            sobrenome:req.body.sobrenome,
            username:req.body.username,
            senha:req.body.senha,
            salt:req.body.salt,
            datacriacao:req.body.datacriacao,
          }, {
            where: {
              id: id
            }
          }).then((users) => {
            res.status(200).json({'error':false,'msg': "Alteração realizada com sucesso!"});
          });
      }else{
        res.status(400).json({'error':true,'msg': "Usuário não encontrado"});
      }
    });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const {id} = req.params;

      const user = await User.findAll({
        where: {
          id: id
        }
      }).then( async (users) => {
        if(users!='')
        {
            await User.destroy({
                    where: {
                      id: id
                    }
            }).then((users) => {
                res.status(200).json({'error':false,'msg': "Exclusão realizada com sucesso!"});
              });   
        }else{
          res.status(400).json({'error':true,'msg': "Usuário não encontrado"});
        }
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new UserController();