var accountsData = require('../data/accounts.json');

module.exports = {
    index: (req, res, next) => {
        res.json(accountsData)
    }
}