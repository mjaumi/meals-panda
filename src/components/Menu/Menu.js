import React from 'react';
import './Menu.css';

const Menu = (props) => {

    return (
        <div className='menu'>
            <h2>Added Menu</h2>
            {
                props.menu.map(meal => {
                    return (
                        <div className='menu-card'>
                            <h4>{meal.strMeal}</h4>
                            <p>{meal.strCategory}</p>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Menu;