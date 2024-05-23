import '../assets/ShowOne.css'
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ShowOne = () => {
    const [meal, setMeal] = useState(null);
    const [newComment, setNewComment] = useState('');
    const [commenterName, setCommenterName] = useState('');
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:9999/api/meals/" + id)
            .then((res) => {
                setMeal(res.data);
                console.log(meal)
            })
            .catch(err => console.log(err));
    }, [id]);

    const deleteMeal = (mealId) => {
        console.log(mealId)
        axios.delete("http://localhost:9999/api/meals/" + id)
            .then(res => {
                console.log(res.data)
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    const handleCommentChange = (event) => { // New function to handle changes to the new comment
        setNewComment(event.target.value);
    }

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        const comment = {
            name: commenterName,
            text: newComment,
        };
        axios.post("http://localhost:9999/api/meals/" + id + "/comments", comment)
            .then(res => {
                setMeal(res.data);
                setNewComment('');
                setCommenterName('');
            })
            .catch(err => console.log(err));
    }


    return (
        <div className="show-one-container">
            {meal ? <>
                <div className="show-one-header">
                    <h1>{meal.name}</h1>
                    <div className="show-one-image">
                        <img src={meal.image} alt={meal.name} className="meal-image" />
                    </div>
                </div>
                <div className="show-one-details">
                    <div className="show-one-info">
                        <p><strong>Cooking Time:</strong> {meal.cookingTime}</p>
                        <p><strong>Serving Size:</strong> {meal.servingSize}</p>
                        <p><strong>Veg:</strong> {meal.veg ? "Yes" : "No"}</p>
                        <p><strong>Cuisine:</strong> {meal.cuisine}</p>
                        <p><strong>Rating:</strong> {meal.rating}</p>
                        <p><strong>Like:</strong> {meal.like}</p>
                    </div>
                    <div className="show-one-ingredients">
                        <h2>Ingredients</h2>
                        <ul>
                            {meal.ingredients.split(/,|\n/).filter(line => line.trim() !== '').map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="show-one-instructions">
                        <h2>Instructions</h2>
                        <ol>
                            {meal.instructions.split('\n').filter(line => line.trim() !== '').map((line, index) => (
                                <li key={index}>{line}</li>
                            ))}
                        </ol>
                    </div>
                    <div className="show-one-nutrition">
                        <h2>Nutritional Value</h2>
                        <p>{meal.nutritionalValue}</p>
                    </div>
                    <div className="show-one-comments"> {/* New comments section */}
                        <h2>Comments</h2>
                        {meal && meal.comments && meal.comments.map((comment, index) => (
                            comment && <div key={index} className="comment">
                                <p>{comment.text} by {comment.name}</p>
                            </div>
                        ))}

                        <form onSubmit={handleCommentSubmit}>
                            <input type="text" value={commenterName} onChange={e => setCommenterName(e.target.value)} placeholder="Your name" />
                            <input type="text" value={newComment} onChange={handleCommentChange} placeholder="Add a comment" />
                            <button type="submit">Post Comment</button>
                        </form>
                    </div>
                    <div className="show-one-actions">
                        <Link to={"/edit/" + meal._id} className="button">Edit</Link>
                        <button onClick={() => deleteMeal(meal._id)}>Delete</button> {/* Delete button */}
                    </div>
                </div>


            </> : "Loading..."}
        </div>
    );
}

export default ShowOne;
