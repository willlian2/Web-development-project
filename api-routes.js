// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import contact controller
var contactController = require('./contactController');
// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
router.route('/contacts/:Player_name')
    .get(contactController.view)
    
    .delete(contactController.delete);
router.route('/contacts/playerinfo')
    .post(contactController.view2)
    .put(contactController.update)
// Export API routes
module.exports = router;