const asyncHandler = require("express-async-handler");

//get goals
//route get/api/goals
//access private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: " Get goals" });
});

//set goals
//route post/api/goals
//access private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: " set goals" });
});

//update goals
//route get/api/goals/:id
//access private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

//delete goals
//route delete /api/goals/:id
//access private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
