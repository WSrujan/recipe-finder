import { model, Schema } from "mongoose";

const MealSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required!"],
      minlength: [2, "Name must be at least 2 characters long!"],
      maxlength: [80, "Name name must be less than 20 characters long"],
    },
    cookingTime: {
      type: Number,
      required: [true, "Cooking Time is required!"],
      min: [2, "Cooking Time should be at least 2 Minutes"],
      max: [240, "Cooking Time should be at under 240 Minutes"],
    },
    instructions: {
      type: String,
      required: [true, "Dish instructions is required!"],
      minlength: [10, "Dish instructions must be at least 10 characters long!"],
    },
    ingredients: {
      type: String,
      required: [true, "Dish ingredients is required!"],
    },
    servingSize: {
      type: String,
      required: [true, "Serving Size is required!"],
    },
    nutritionalValue: {
      type: String,
    },
    image: {
      type: String,
      required: [true, "Image is required!"],
    },
    veg: {
      type: Boolean,
      default: false,
    },
    cuisine: {
      type: String,
    },
    rating: {
      type: Number,
      required: [true, "Rating is required!"],
      min: [0, "Rating should be at least 0"],
      max: [5, "Rating should be at most 5"],
    },
    like: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        name: String,
        text: String,
      },
    ],
  },
  { timestamps: true }
);

const Meal = model("Meal", MealSchema);

export default Meal;
