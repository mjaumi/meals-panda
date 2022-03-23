import React from 'react';
import './Meal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const Meal = (props) => {
    const { strMeal, strArea, strMealThumb, strCategory } = props.meals;

    return (
        <div className='meal-card'>
            <div className='meal-card-image'>
                <img src={strMealThumb} alt="" />
            </div>
            <div className='meal-card-body'>
                <h2>{strMeal}</h2>
                <p>Region: {strArea}</p>
            </div>
            <div className='meal-card-footer'>
                <div className='meal-category'>
                    <p><small>{strCategory}</small></p>
                </div>
                <div className='meal-card-btn-container'>
                    <button onClick={() => props.addToMenuHandler(props.meals)}>
                        <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                        <p>Add to Menu</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Meal;