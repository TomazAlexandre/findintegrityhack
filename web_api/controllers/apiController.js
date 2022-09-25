exports.test = function (req, res) {
    res.send("Olá! Teste ao Controller");
  };

// TODO: listar pontos de interesse da BD
exports.details = function (req, res) {
    res.send({type: "GET"});
  };
  // TODO: adicionar novo ponto de interesse
  exports.add = function (req, res) {
    res.send({type: "POST"});
  };
  // TODO: atualizar ponto de interesse
  exports.update = function (req, res) {
    res.send({type: "PUT"});
  };
  // TODO: apagar ponto de interesse
  exports.delete = function (req, res) {
    res.send({type: "DELETE"});
  };
// url do teste será: http://localhost:5000/api/teste
router.get("/teste", apiController.test);
// TODO: listar pontos de interesse da BD
router.get("/details",apiController.details);
// TODO: adicionar novo ponto de interesse
router.post("/interest",apiController.add);
// TODO: atualizar ponto de interesse
router.put("/interest/:id",apiController.update);
// TODO: apagar ponto de interesse
router.delete("/interest/:id",apiController.delete);
module.exports = router;