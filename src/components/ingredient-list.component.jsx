import { Button } from 'react-bootstrap';
import RecipeService from '../services/recipe.service';


const IngredientList = ({ ingredients, setRecipes, resetList }) => {

    const recipeService = new RecipeService();

    const getRecipes = async () => {
        const recipes = await recipeService.getRecipes(ingredients);
        setRecipes(recipes);
    }

    return (
        <div>
            <p className='text-center fw-bold'>LIST OF INGREDIENTS</p>
            <div className='border border-dark border-3 rounded overflow-auto'
                style={{ height: '350px' }}
            >
                <ul className='list-group list-group-numbered'>
                    {ingredients.map((ingredient, index) => (
                        <li key={index} className='list-group-item'>{ingredient}</li>
                    ))}
                </ul>
            </div >
            <div className='d-flex justify-content-center p-3'>
                <Button className='btn btn-dark mx-1' onClick={getRecipes}>
                    Generate
                </Button>
                <button className='btn btn-danger mx-1' onClick={resetList}>
                    Reset
                </button>
            </div>
        </div>
    )
}


export default IngredientList;