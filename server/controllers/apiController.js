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
        var filterTourismData = accountsData.accounts.filter((account)=> {
            if (account.tags.length >= 1) {
                return account.tags[0].name === "Turismo en Buenos Aires";
            }
        });

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
        // Filtrado de accounts con Voucher
        var filterDiscountData = accountsData.accounts.filter((account)=> {
            return account.haveVoucher;
        });
        // Función para ordenar alfabeticamente en base a propiedad 'name'
        function compareNames( a, b ) {
            if ( a.name < b.name ){
              return 1;
            }
            if ( a.name > b.name ){
              return -1;
            }
            return 0;
        }
        // Ordenado alfabetico descendiente (Z-A) de accounts
        filterDiscountData = filterDiscountData.sort(compareNames);

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