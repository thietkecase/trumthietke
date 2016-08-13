var MainController = require('../controllers/MainController');

module.exports = function(router){
    router.get('/admin/login', MainController.getLoginForm);
    router.post('/admin/login', MainController.postLoginForm);
    router.get('/admin/logout', MainController.getLogout);
    router.get('/admin/post', MainController.getPost);
    router.post('/admin/post', MainController.postPost);
}