import { Router } from "express";
import MealController from "../controllers/meal.controller.js";

// Creating a router variable for ease of use
const router = Router();

router.route("/meals").get(MealController.readAll).post(MealController.create);

router
  .route("/meals/:id")
  .get(MealController.readOne)
  .put(MealController.update)
  .delete(MealController.delete);

router.route("/meals/:id/comments").post(MealController.addComment); // New route for adding a comment

export default router;
