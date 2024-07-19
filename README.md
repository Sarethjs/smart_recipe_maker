# Smart recipe maker

This is an interesting project made with react. It is a small project where you can put in front of the camera certain ingredients to be recognized by the system.

After recognizing and adding the ingredients you consider necessary, you can generate recipes containing these ingredients.

## Demostration
Project running on localhost

[![Watch demostration]()](demostration.mp4)


## Dependecies

+ [Mobilenet v2](https://www.kaggle.com/models/google/mobilenet-v2)
+ [Tensorflowjs](https://www.tensorflow.org/js)
+ [Vite](https://vitejs.dev/)
+ [Edaman](https://developer.edamam.com/edamam-recipe-api)

I use the pre-trained model ***Mobilenet v2*** to recognize the ingredients and classify them and ***Edaman API*** to get the recipes.

## Usage

+ Clone the repository `git clone https://github.com/Sarethjs/smart_recipe_maker.git`
+ Install the dependencies `npm install`
+ Run on the local host `npm run dev`

Also you can build the project using vite: `npm run build`, see the `package.json` file for more information about scripts.