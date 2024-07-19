class Recipe {
    constructor(
        readonly label: string,
        readonly imageUrl: string,
        readonly dietLabels: string[],
        readonly recipeUrl: string,
        readonly calories: number,
    ) { }
}

export default Recipe;