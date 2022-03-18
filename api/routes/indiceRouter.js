const { Router } = require("express");
const { Indicator } = require("../models");

const router = Router();

router.get("", async (request, response) => {
  const name = request.query.name;
  Indicator.findOne({
    where: {
      commune: name,
    },
  })
    .then((data) => response.status(200).send(data).json())
    .catch((e) => response.status(500).send(e).json());
});

module.exports = router;
