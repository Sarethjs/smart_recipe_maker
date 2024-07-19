import axios from "axios";
import Recipe from "../entities/recipe.entity";

class RecipeService {

    private readonly BASE_URL = 'https://api.edamam.com/api/recipes/v2';
    private readonly APP_KEY = '70e8dd1efabfa3985b03829b7a477b25';
    private readonly APP_ID = '17b4fb76';
    private readonly TYPE = 'public';

    async getRecipes(ingredients: string[]): Promise<Recipe[]> {
        const ingreQuery: string = ingredients.join(',');
        console.log('Getting recipes...');

        try {
            const response = await axios.get(this.BASE_URL, {
                params: {
                    'app_id': this.APP_ID,
                    'app_key': this.APP_KEY,
                    'type': this.TYPE,
                    'q': ingreQuery
                }
            });

            const hits: any[] = response.data.hits;
            const recipes = hits.map((hit) => {
                const recipe = hit.recipe;
                return new Recipe(
                    recipe.label,
                    recipe.image,
                    recipe.dietLabels,
                    recipe.url,
                    recipe.calories
                );
            });
            //console.log(recipes);
            return recipes;

        } catch (msgError) {
            console.log('Recipes not found');
            return [];
        }
    }
}


export default RecipeService;