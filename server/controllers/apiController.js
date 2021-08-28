const accountsData = require('../data/accounts.json');

module.exports = {
    index: (req, res, next) => {
        var response = {
            meta: {
                status: 200,
                total: accountsData.accounts.length
            },
            accounts: [...accountsData.accounts]
        }
        res.json(response)
    },
    tourism: (req, res, next) => {
        var filterAccountsTags = accountsData.accounts.filter((account)=> {
            return account.tags.length >= 1;
        });
        var filterTourismData = filterAccountsTags.filter((account) => {
            return account.tags[0].name === "Turismo en Buenos Aires";
        })

        var response = {
            meta: {
                status: 200,
                total: filterTourismData.length
            },
            accounts: filterTourismData
        }
        res.json(response)
    },

    discount: (req, res, next) => {
        var filterDiscountData = accountsData.accounts.filter((account)=> {
            return account.haveVoucher;
        });

        var response = {
            meta: {
                status: 200,
                total: filterDiscountData.length
            },
            accounts: filterDiscountData
        }
        res.json(response)
    }
}