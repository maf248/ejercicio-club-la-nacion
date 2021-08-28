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
        // Filtrado de accounts con Tag "Turismo en Buenos Aires"
        var filterTourismData = accountsData.accounts.filter((account) => {
            return account.tags.some((tag) => {
                return tag.name === "Turismo en Buenos Aires"
            });
        });
        // Funcion para ordenar accounts con sucursales más cercanas primero, sucursales más lejanas despues
        function compareBranches(a, b) {
            // Se obtiene el local más cercano (menor location) de cada account
            var firstClosest = Math.min.apply(null, a.branches.map(function(branch) { return branch.location; }));
            var secondClosest = Math.min.apply(null, b.branches.map(function(branch) { return branch.location; }));
            // Se comparan locales más cercanos de accounts para ordenarlos
            if (firstClosest < secondClosest) {
                return -1;
            }
            if (firstClosest > secondClosest) {
                return 1;
            }
            return 0;
        }
        // Ordenado accounts con sucursales más cercanas
        filterTourismData = filterTourismData.sort(compareBranches);

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
        var filterDiscountData = accountsData.accounts.filter((account) => {
            return account.haveVoucher;
        });
        // Función para ordenar alfabeticamente en base a propiedad 'name'
        function compareNames(a, b) {
            if (a.name < b.name) {
                return 1;
            }
            if (a.name > b.name) {
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