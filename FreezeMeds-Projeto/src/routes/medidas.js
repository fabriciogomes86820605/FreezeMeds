var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");


router.get("/ultimasMedidas/", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/listarKpi", function (req, res) {
    medidaController.listarKpi(req, res);
});


module.exports = router;