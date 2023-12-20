const { Router } = require("express");
const controller = require("../controllers/data.controller");
const { controllerHandler: c } = require("../utils");

const router = new Router();

router.get(
    "/thermometerLog",
    c(controller.getThermometerLog, (req) => [req.body])
);

router.get(
    "/dailyAccountBalance",
    c(controller.getDailyAccountBalance, (req) => [req.body])
);

router.get(
    "/dailyEmailLog",
    c(controller.getDailyEmailLog, (req) => [req.body])
);

module.exports = router;
