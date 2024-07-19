// home.jsx
import React, { useState } from "react";
import WebcamComponent from "./webcam.component";
import IngredientList from "./ingredient-list.component";
import RecipeCard from "./recipe-card.component";

const HomeComponent = () => {
    const [ingredients, setIngredients] = useState([]);
    const [ingredient, setIngredient] = useState('');
    const [recipes, setRecipes] = useState([]);

    const addIngredient = () => {
        if (ingredient && ingredient !== '') {
            setIngredients([...ingredients, ingredient]);
        }
    };

    const resetList = () => {
        setIngredients([]);
    };

    return (
        <div style={{ backgroundColor: '#d4f5f5' }}>
            <div className='bg-black text-center'>
                <h1 className='py-4 text-light fw-bold'>RECIPE MAKER BY G7</h1>
            </div>
            <div className="row my-3">
                <div className="col-8 d-flex flex-column align-items-center">
                    <WebcamComponent setIngredient={setIngredient} />
                    <button type="button"
                        className="btn btn-dark w-25 rounded-pill tex-white"
                        onClick={addIngredient}
                    >
                        Add
                    </button>
                </div>
                <div className="col-3 mr-1">
                    <IngredientList
                        ingredients={ingredients}
                        setRecipes={setRecipes}
                        resetList={resetList} />
                </div>
            </div>
            <div className="row mx-3">
                <hr />
                <div className="row mb-2">
                    <p className="h2 fw-bold">Recipes found</p>
                </div>
                <div className="row d-flex">
                    {recipes.length > 0 ? (
                        recipes.map((recipe, index) => (
                            <RecipeCard
                                key={index}
                                label={recipe.label}
                                imageUrl={recipe.imageUrl}
                                dietLabels={recipe.dietLabels}
                                recipeUrl={recipe.recipeUrl}
                                calories={recipe.calories}
                            />
                        ))
                    ) : (
                        <p className="fst-italic">No recipes found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;
