const Subscription = require("../models/Subscription");
const upload = require("../services/SetPicture");
const cloudinary = require("cloudinary");
require("../services/cloudinary");

// @desc    GET USER SUBSCRIPTION
// @route   GET /api/subscription/me
// @access  Private
exports.getSubscription = async (req, res, next) => {
  try {
    let subscription = await Subscription.find({ user: req.user.id }).sort({
      createdAt: -1,
    });

    res
      .status(200)
      .json({ success: true, count: subscription.length, data: subscription });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    GET USER SUBSCRIPTION
// @route   GET /api/SUBSCRIPTION
// @access  Private
exports.getSubscriptions = async (req, res, next) => {
  try {
    let subscription = await Subscription.find();

    res
      .status(200)
      .json({ success: true, count: subscription.length, data: subscription });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    GET USER SUBSCRIPTION
// @route   GET /api/subscription/:id
// @access  Private
exports.getSubscriptionById = async (req, res, next) => {
  try {
    let subscription = await Subscription.find({ user: req.params.id });

    res
      .status(200)
      .json({ success: true, count: subscription.length, data: subscription });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc   CREATE USER SUBSCRIPTION
// @route  POST /api/subscription
// @access Private
exports.postSubscription = async (req, res, next) =>
  upload(req, res, (err) => {
    const file = req.file;
    if (err === "ERROR: IMAGE ONLY") {
      res.status(400).json({ msg: "ERROR: IMAGE ONLY" });
    } else if (err) {
      res.status(400).json({ msg: err.message });
    } else {
      try {
        const { firstName, lastName, plan, deliveryAddress, phone } = req.body;

        const subscriptionFields = {};
        subscriptionFields.user = req.user.id;
        if (firstName) subscriptionFields.firstName = firstName;
        if (lastName) subscriptionFields.lastName = lastName;
        if (plan) subscriptionFields.plan = plan;
        if (deliveryAddress)
          subscriptionFields.deliveryAddress = deliveryAddress;
        if (phone) subscriptionFields.phone = phone;

        let subscription = new Subscription(subscriptionFields);
        cloudinary.v2.uploader.upload(file.path).then((result) => {
          // if (error) throw console.log(error);
          subscription.img = result.secure_url;
          // Create
          Subscription.create(subscription);
          res.status(200).json({ success: true, data: subscription });
        });
      } catch (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          error: "Server Error",
        });
      }
    }
  });

// @desc    UPDATE SUBSCRIPTION STATUS
// @route   PUT /api/subscription/:id
// @access  Private
exports.updateSubscriptionStatus = async (req, res, next) => {
  try {
    let subscriptionStatus = await Subscription.findById(req.params.id);

    let status = "Delivered";

    const newExp = {
      status,
    };

    subscriptionStatus = await Subscription.findByIdAndUpdate(
      req.params.id,
      { $set: newExp },
      { new: true }
    );

    return res.status(200).json({ success: true, data: subscriptionStatus });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
