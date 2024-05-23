import '../assets/New.css'
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const New = () => {
    const [name, setName] = useState("");
    const [cookingTime, setCookingTime] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [servingSize, setServingSize] = useState("");
    const [nutritionalValue, setNutritionalValue] = useState("");
    const [image, setImage] = useState(null);
    const [veg, setVeg] = useState(false);
    const [cuisine, setCuisine] = useState("");
    const [rating, setRating] = useState(0);
    const [like, setLike] = useState(0);
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();

    const createMeal = (e) => {
        e.preventDefault();
        const newMeal = { name, cookingTime, ingredients, instructions, servingSize, nutritionalValue, image, veg, cuisine, rating, like };
        axios.post("http://localhost:9999/api/meals/", newMeal)
            .then(res => {
                navigate("/");
            })
            .catch(err => {
                console.log(err)
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div className='container'>
            <Link to="/">Back to Home</Link>
            <form onSubmit={createMeal}>

                <label htmlFor="name">Recipe Name:</label>
                <input type="text" id='name' onChange={(e) => setName(e.target.value)} value={name} />
                {errors.name && <p>{errors.name.message}</p>}



                <label htmlFor="cookingTime">Cooking Time:</label>
                <input type="text" id='cookingTime' onChange={(e) => setCookingTime(e.target.value)} value={cookingTime} />
                {errors.cookingTime && <p>{errors.cookingTime.message}</p>}



                <label htmlFor="ingredients">Ingredients:</label>
                <textarea type="text" id='ingredients' onChange={(e) => setIngredients(e.target.value)} value={ingredients} />
                {errors.ingredients && <p>{errors.ingredients.message}</p>}



                <label htmlFor="instructions">Instructions:</label>
                <textarea id='instructions' onChange={(e) => setInstructions(e.target.value)} value={instructions} />
                {errors.instructions && <p>{errors.instructions.message}</p>}



                <label htmlFor="servingSize">Serving Size:</label>
                <input type="text" id='servingSize' onChange={(e) => setServingSize(e.target.value)} value={servingSize} />
                {errors.servingSize && <p>{errors.servingSize.message}</p>}



                <label htmlFor="nutritionalValue">Nutritional Value:</label>
                <input type="text" id='nutritionalValue' onChange={(e) => setNutritionalValue(e.target.value)} value={nutritionalValue} />
                {errors.nutritionalValue && <p>{errors.nutritionalValue.message}</p>}



                <label htmlFor="image">Image:</label>
                <input type="text" id='image' onChange={(e) => setImage(e.target.value)} value={image} />
                {errors.image && <p>{errors.image.message}</p>}



                <label htmlFor="veg">Veg:</label>
                <input type="checkbox" id='veg' onChange={(e) => setVeg(e.target.checked)} checked={veg} />
                {errors.veg && <p>{errors.veg.message}</p>}



                <label htmlFor="cuisine">Cuisine:</label>
                <input type="text" id='cuisine' onChange={(e) => setCuisine(e.target.value)} value={cuisine} />
                {errors.cuisine && <p>{errors.cuisine.message}</p>}



                <label htmlFor="rating">Rating:</label>
                <input type="number" id='rating' onChange={(e) => setRating(e.target.value)} value={rating} />
                {errors.rating && <p>{errors.rating.message}</p>}



                <label htmlFor="like">Like:</label>
                <input type="number" id='like' onChange={(e) => setLike(e.target.value)} value={like} />
                {errors.like && <p>{errors.like.message}</p>}


                <button>Create</button>
            </form>
        </div>
    );
}

export default New;