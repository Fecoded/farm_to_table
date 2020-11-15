const express = require("express");
const router = express.Router();
const {
  getSubscriptionById,
  getSubscriptions,
  postSubscription,
  getSubscription,
  updateSubscriptionStatus,
} = require("../controllers/subscription");
const auth = require("../middleware/auth");

router.route("/").post(auth, postSubscription).get(auth, getSubscriptions);
router.route("/me").get(auth, getSubscription);
router
  .route("/:id")
  .get(auth, getSubscriptionById)
  .put(auth, updateSubscriptionStatus);

module.exports = router;
