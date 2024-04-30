export interface Recipe {
    id: number,
    name: string,
    ingredients: string[]
    instructions: string[],
    prepTimeMinutes: number,
    cookTimeMinutes: number,
    servings: number,
    difficulty: string,
    cuisine: string,
    caloriesPerServing: number,
    tags: string[],
    image: string,
    rating: number,
}


// "id": 1,
//     "name": "Classic Margherita Pizza",
//     "ingredients": "Pizza dough\nTomato sauce\nFresh mozzarella cheese\nFresh basil leaves\nOlive oil\nSalt and pepper to taste\n"
//     "instructions": "Preheat the oven to 475°F (245°C).\nRoll out the pizza dough and spread tomato sauce evenly.\nTop with slices of fresh mozzarella and fresh basil leaves.\nDrizzle with olive oil and season with salt and pepper.\nBake in the preheated oven for 12-15 minutes or until the crust is golden brown.\nSlice and serve hot.\n"
//     "prepTimeMinutes": 20,
//     "cookTimeMinutes": 15,
//     "servings": 4,
//     "difficulty": "Easy",
//     "cuisine": "Italian",
//     "caloriesPerServing": 300,
//     "tags": "Pizza\nItalian"
//     "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
//     "rating": 4.6,