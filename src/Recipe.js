import React from "react";
import style from "./recipe.module.css";


const Recipe = ({title, calories, image, ingredients, servings}) => {
    return (
        <div className={style.recipe}>
            <h1 className={ style.title }>{ title }</h1>
            <h4>Servings: { servings }</h4>
            <ol>
                { ingredients.map(ingredient => (
                    <li>{ ingredient.text }</li>
                ))}
            </ol>
            <p><strong>Calories: { Math.round((calories)/(servings))} per serving</strong></p>
            <img className={style.image} src={ image } alt={ title } />
        </div>
    );
}

export default Recipe;