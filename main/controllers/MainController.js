var USER = {
    name: 'admin',
    password: 'meditek123456'
}

var knex = require('../../db/connect');

module.exports = {
    getLoginForm: function(req, res){
        res.render('main/login');
    },
    getPost: function(req, res){
        var session = req.session;
        if(session.name){
            knex.select('*').from('post')
            .then(function(post){
                res.render('main/post', {posts: post});
            })
        }else
            res.redirect('/admin/login');
    },
    getLogout: function(req, res){
        req.session.destroy(function(err){
            if(err)
                res.send('no logout');
            else
                res.redirect('/admin/login');
        })
    },
    postLoginForm: function(req, res){
        var user = req.body.user.name;
        var password = req.body.user.password;

        if(user === USER.name && password === USER.password){
            var hour = 3600000;
            req.session.cookie.expires = new Date(Date.now() + hour);
            req.session.cookie.maxAge = hour;
            var session = req.session;
            session.name = user;
            res.redirect('/admin/post');
        }else{
            res.send('Sai mat khau va ten');
        }
    },
    postPost: function(req, res){
        var name = req.body.post.name;
        var content = req.body.post.content;

        knex('post').insert({name: name, content: content})
        .then(function(post){
            res.redirect('/admin/post');
        })
    }
}