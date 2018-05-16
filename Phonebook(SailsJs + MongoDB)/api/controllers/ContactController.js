/**
 * ContactController
 *
 * @description :: Server-side logic for managing Contacts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	list:function(req,res){
            Contact.find({}).exec(function(err,contact){
                if(err){
                        res.send(500,{error : 'Database Error'})
                }
                res.view('list',{contact:contact});
            })
    },

    add: function(req,res){
        res.view('add');
    },
    create: function(req,res){
            var name =req.body.name;
            var phonenumber=req.body.phoneno;

            Contact.create({name:name,phonenumber:phonenumber}).exec(function(err){
                    if(err){
                        res.send(500,{error: 'Database error'});
                    }
                    res.redirect('/Contact/list');
            });
    },

    Home: function(req,res){
        res.view('homepage');
    },
};

