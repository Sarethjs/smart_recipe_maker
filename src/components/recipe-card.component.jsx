const RecipeCard = ({ label, imageUrl, dietLabels, recipeUrl, calories }) => {
    return (
        <div className="col-3">

            <div className="card border-dark my-2">
                <img
                    className="card-img-top"
                    src={imageUrl}
                />
                <div className="card-body">
                    <p className="card-title fw-bold">{label}</p>
                    <div>
                        <p className="card-text">
                            <span className="fw-bold">Diet labels: </span>
                            {dietLabels}
                        </p>
                        <p className="">
                            <span className="fw-bold">Calories: </span>
                            {calories.toFixed(2)} cal
                        </p>
                    </div>
                    <div className="d-flex justify-content-end">
                        <a href={recipeUrl} target="_blank" className="card-link">View recipe</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;