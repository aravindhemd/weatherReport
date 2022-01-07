const Express = require("express");
const router = Express.Router();
const wetherController = require('../controllers/wether');
router.get("/", wetherController.wetherCondition);
router.get("/all", wetherController.searchedWeathers);// searchedWeathers

module.exports = router;