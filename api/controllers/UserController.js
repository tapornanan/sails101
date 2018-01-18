/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    
    viewAll: function(req, res) {

        User.find().exec(function(err, result){
            return res.view('user/users', {
                layout: 'layouts/main-layout',
                data: result
            });

        })
    },

    viewUser: function(req, res) {
        const userId = req.param('id')

        User.findOne(userId).exec(function(err, result){
            if (err) return res.json(500, { error: err })
            return res.view('user/user_detail',{
                layout: 'layouts/main-layout',
                data: result
            })
        })
    },

    create: function(req, res) {

        const _firstname =   req.param('firstname')
        const _lastname  =   req.param('lastname')
        const _position  =   req.param('position')
        const _age       =   req.param('age')
        const _quote     =   req.param('quote')

        const data = {
            firstname: _firstname,
            lastname: _lastname,
            position: _position,
            age: _age,
            quote: _quote
        }
        User.create(data).exec(function(err, result){
            if (err) {
                return res.json(500, { error: err })
            }
            console.log(result)
            return res.redirect('/users')
        })

    }
};

