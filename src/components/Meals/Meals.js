import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Menu from '../Menu/Menu';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, []);

    const addToMenuHandler = meal => {

        let newMenu = [...menu];

        if (menu.length !== 0) {

            /* for (const item in menu) {
                if (!meal.idMeal === item.idMeal) {
                    
                }
            } */

            const existingItem = menu.find(item => item.idMeal === meal.idMeal);

            if (!existingItem) {
                newMenu = [...newMenu, meal];
            }
        }
        else {
            newMenu = [...newMenu, meal];
        }

        setMenu(newMenu);
    }

    return (
        <section className='container'>
            <div className='meals-container'>
                {
                    meals.map(meal => <Meal key={meal.idMeal} meals={meal} addToMenuHandler={addToMenuHandler}></Meal>)
                }
            </div>
            <div className='menu-container'>
                <Menu menu={menu}></Menu>
            </div>
        </section>
    );
};

export default Meals;