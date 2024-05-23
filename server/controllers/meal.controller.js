import Meal from "../models/meal.model.js";

const MealController = {
  create: async (req, res) => {
    try {
      const newMeal = await Meal.create(req.body);
      res.json(newMeal);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },
  readAll: async (req, res) => {
    try {
      const allMeal = await Meal.find(); // here is our query to find Users
      res.json(allMeal);
    } catch (error) {
      console.log(error);
      res.status(400).json(error); // here is our error response
    }
  },
  readOne: async (req, res) => {
    try {
      const foundMeal = await Meal.findById(req.params.id);
      res.json(foundMeal);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },
  update: async (req, res) => {
    const options = {
      new: true,
      runValidators: true,
    };
    try {
      const updatedMeal = await Meal.findByIdAndUpdate(
        req.params.id,
        req.body,
        options
      );
      res.json(updatedMeal);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },
  delete: async (req, res) => {
    try {
      const deletedMeal = await Meal.findByIdAndDelete(req.params.id);
      res.json(deletedMeal);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },
  addComment: async (req, res) => {
    const options = {
      new: true,
      runValidators: true,
    };
    try {
      let updatedMeal = await Meal.findById(req.params.id);
      updatedMeal.comments.push({ name: req.body.name, text: req.body.text }); // Updated this line
      updatedMeal = await updatedMeal.save();
      res.json(updatedMeal);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },
};
export default MealController;
