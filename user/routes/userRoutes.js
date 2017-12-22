'use strict';

module.exports = (router) => {
    const user = require('../controllers/userController')

    // Routes
    router.route('/users')
        .get(user.list_all_users)
        .post(user.create_a_user)

    router.route('/users/:userId')
        .get(user.read_a_user)
        .put(user.update_a_user)
        .delete(user.delete_a_user)
}