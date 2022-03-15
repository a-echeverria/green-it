const {Router} = require("express");

const router = Router();

router.get("", async (request, response) => {
  response.status(200).send(["1", "2", "3"]).json();
  return;
});

module.exports = router;
