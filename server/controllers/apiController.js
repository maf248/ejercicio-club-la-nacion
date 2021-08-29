const accountsData = require('../data/accounts.json');

// Pagination helper - función para paginar los resultados con querys "?page=X&limit=X"
function apiPagination(req, res, resultToPaginate) {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    // Si se cumplen las condiciones para un paginado correcto, se realiza, caso contrario se redirije para ver todos los resultados
    if (page >= 1 && startIndex < resultToPaginate.length && limit >= 1) {
        var resultPart = resultToPaginate.slice(startIndex, endIndex);

        const paginationData = {
            actualPage: {
                page: page,
                limit: limit,
                count: resultPart.length
            }
        };

        if (startIndex > 0) {
            paginationData.previousPage = {
                page: page - 1,
                url: `${req.protocol}://${req.get('host')}/api${req.url.split('?').shift()}?page=${page - 1}&limit=${limit}`
            }
        }
        if (endIndex < resultToPaginate.length) {
            paginationData.nextPage = {
                page: page + 1,
                url: `${req.protocol}://${req.get('host')}/api${req.url.split('?').shift()}?page=${page + 1}&limit=${limit}`
            }
        }

        res.paginationData = paginationData;

        return resultPart;

    } else {
        // Retorna falso para poder redirigir adecuadamente desde el metodo del controller en cuestion.
        return false;
    }

}

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
        // Funcion para ordenar accounts con sucursales más cercanas primero, con sucursales más lejanas despues
        function compareBranches(a, b) {
            // Se obtiene el local más cercano (menor location) de cada account
            var firstClosest = Math.min.apply(null, a.branches.map(function (branch) {
                return branch.location;
            }));
            var secondClosest = Math.min.apply(null, b.branches.map(function (branch) {
                return branch.location;
            }));
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

        // Se paginan los resultados en caso de tener query string "?page=X&limit=X"
        if (req.query.page && req.query.limit) {
            var readyTourismData = apiPagination(req, res, filterTourismData);
            // Si el pedido de paginacion por query string es incorrecto se redirige
            if (!readyTourismData) {
                return res.redirect(`/api${req.url.split('?').shift()}`);
            }
        } else {
            // Caso contrario, sin query strings, se entregan todos los resultados
            var readyTourismData = filterTourismData;
        }

        var response = {
            meta: {
                status: 200,
                total: filterTourismData.length,
                ...res.paginationData
            },
            accounts: readyTourismData
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

        // Se paginan los resultados en caso de tener query string "?page=X&limit=X"
        if (req.query.page && req.query.limit) {
            var readyDiscountData = apiPagination(req, res, filterDiscountData);
            // Si el pedido de paginacion por query string es incorrecto se redirige
            if (!readyTourismData) {
                return res.redirect(`/api${req.url.split('?').shift()}`);
            }
        } else {
            // Caso contrario, sin query strings, se entregan todos los resultados
            var readyDiscountData = filterDiscountData;
        }

        var response = {
            meta: {
                status: 200,
                total: filterDiscountData.length,
                ...res.paginationData
            },
            accounts: readyDiscountData
        }
        res.json(response)
    }
}