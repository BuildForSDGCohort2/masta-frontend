import React from "react";
import FoodNew from "./FoodNew";

const Food = ({ recipe }) => {
    const keys = Object.keys(recipe);
    if(!recipe.length){
        return(
            <FoodNew/>
        )
    }
    return (
        <>
            {recipe.map((result) => (
                <div className="course-card course-card-list">
                    <div className="course-card-thumbnail">
                        <img src= {result.recipe.image} />
                        <a href="course-intro.html" className="play-button-trigger"></a>
                    </div>
                    <div className="course-card-body">
                        <a href="course-intro.html">
                            <h4>{result.recipe.label} </h4>
                        </a>
                        <p>{result.recipe.ingredientLines} </p>
                        <div className="course-details-info">
                            <ul>
                                <li> <i className="icon-feather-sliders"></i> {result.recipe.ingredientLines.length} Ingredients </li>
                                <li> <a href="user-profile-1.html">Calories: {Math.trunc(result.recipe.calories)} </a> </li>
                                <li className="uk-visible@s">
                                    <div className="star-rating"><span className="avg"> 4.8 </span> <span
                                        className="star"></span><span className="star"></span><span
                                            className="star"></span><span className="star"></span><span className="star"></span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            ))}

        </>
    )
}

export default Food;
