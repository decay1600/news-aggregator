const User = require("../models/userModel");
const AppError = require("../utils/appError");
const catchAsyn = require("../utils/catchAsyn");
const Favourite = require("../models/favouriteModel");
const Article = require("../models/articleModel");
const Read = require("../models/readModel");

const filterObj = (obj, ...allowedFields) => {
  newObj = {};
  Object.keys(obj).forEach((key) => {
    if (allowedFields.includes(key)) newObj[key] = obj[key];
  });
  return newObj;
};

exports.preferences = catchAsyn(async (req, res, next) => {
  const { category, sources, country } = await User.findById(req.user);
  res
    .status(200)
    .json({ status: "success", data: { category, sources, country } });
});

exports.updatePreferences = catchAsyn(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm)
    return next(AppError("This route is not for updating password", 400));

  //! Filter out unawanted fields and only include whats needed
  const filteredObj = filterObj(req.body, "category", "country");
  const updatedPrefernces = await User.findByIdAndUpdate(
    req.user.id,
    filteredObj,
    { new: true, runValidators: true }
  );
  res.status(200).json({ status: "success", data: updatedPrefernces });
});
