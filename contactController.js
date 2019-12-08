// contactController.js
// Import contact model
Contact = require('./contactModel');
// Handle index actions
exports.index = function (req, res) {
    Contact.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Player recived",
            data: contacts
        });
    });
};

// Handle create contact actions
exports.new = function (req, res) {
    Contact.findOne({ Player_name: req.body.Player_name }, function (err, check) {
        if (err)
            res.json(err);


        if (check == null) {
            var contact = new Contact();
            contact.Player_name = req.body.Player_name ? req.body.Player_name : contact.Player_name;
            contact.str = req.body.str;
            contact.gold = req.body.gold;
            contact.int = req.body.int;
            contact.favor = req.body.favor;
            contact.pic=req.body.pic;
            contact.motivation=req.body.motivation;

            // save the contact and check for errors
            contact.save(function (err) {
                if (err)
                    res.json(err);
                res.json({
                    message: 'New Player created!',
                    data: contact
                });
            });

        }
        else {
            res.json({
                message: 'duplicate',
                data: null
            });
        }
    })
};
// Handle view contact info
exports.view = function (req, res) {
    Contact.find({ Player_name: req.params.Player_name }, function (err, contacts) {
        if (err)
            res.send(err);
        res.json({
            message: 'Player details loading..',
            data: contacts[0]
        });
    });
};
exports.view2 = function (req, res) {
    console.log(req)
    Contact.find({ Player_name: req.body.Player_name }, function (err, contacts) {
        if (err)
            res.send(err);
        if (contacts[0] == null) {
            res.json({
                message: 'failed',
                data: null

            })
        }
        else {
            res.json({
                message: 'Player details loading..',
                data: contacts[0]
            });
        }
    });
};
// Handle update contact info
exports.update = function (req, res) {
    console.log(req);
    Contact.findOne({ Player_name: req.body.Player_name }, function (err, contact) {
        if (err)
            res.send(err);
        contact.Player_name = req.body.Player_name ? req.body.Player_name : contact.Player_name;
        contact.str = req.body.str;
        contact.gold = req.body.gold;
        contact.int = req.body.int;
        contact.favor = req.body.favor;
        contact.pic = req.body.pic;
        contact.motivation=req.body.motivation;

        // save the contact and check for errors
        contact.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Player Info updated',
                data: contact
            });
        });
    });
};
// Handle delete contact
exports.delete = function (req, res) {
    Contact.remove({
        Player_name: req.params.Player_name
    }, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Player deleted'
        });
    });
};