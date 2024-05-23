import '../assets/Home.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [rating, setRating] = useState('');

    useEffect(() => {
        axios.get("http://localhost:9999/api/meals")
            .then((res) => {
                setMeals(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const filteredMeals = meals.filter(meal =>
        meal.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="home-container">
            <input type="text" placeholder="Search for recipes..." onChange={handleSearch} id='search' />
            <Link to="/create">Add a Meal</Link>
            <div className="meals-container">
                {
                    filteredMeals.map((meal) => {
                        return (
                            <div key={meal._id} className="meal-card">
                                <img src={meal.image} alt={meal.name} className="meal-image" />
                                <h3>{meal.name}</h3>
                                <p><strong>Cooking Time: </strong>{meal.cookingTime}</p>
                                <p><strong>Cuisine: </strong>{meal.cuisine}</p>
                                <p>{meal.veg ? "Vegetarian" : "Non Vegetarian"}</p>
                                <p><strong>Ratings: </strong>{meal.rating}</p>
                                <Link to={"/recipe/" + meal._id}>Click here</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Home;
