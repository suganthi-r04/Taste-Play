// Function to store selected recipe and go to recipe page
function openRecipe(recipeId) {
  localStorage.setItem("selectedRecipe", recipeId);
  window.location.href = "recipe.html";
}

// Full recipe dataset
const recipes = {
  // 🍳 Breakfast
  pancakes: {
    title: "Pancakes",
    ingredients: ["1 cup flour", "2 eggs", "1 cup milk", "Sugar", "Butter"],
    steps: ["Mix all ingredients", "Cook on pan", "Serve hot with syrup"]
  },
  omelette: {
    title: "Omelette",
    ingredients: ["2 eggs", "Salt", "Pepper", "Oil"],
    steps: ["Beat eggs", "Pour into pan", "Cook and fold"]
  },
  sandwich: {
    title: "Sandwich",
    ingredients: ["Bread slices", "Cheese", "Tomato", "Lettuce"],
    steps: ["Place filling between bread", "Grill or serve fresh"]
  },

  // 🍴 Lunch
  pasta: {
    title: "Pasta",
    ingredients: ["200g pasta", "Tomato sauce", "Olive oil", "Cheese"],
    steps: ["Boil pasta", "Prepare sauce", "Mix and serve"]
  },
  friedrice: {
    title: "Fried Rice",
    ingredients: ["2 cups rice", "Mixed veggies", "Soy sauce", "Eggs"],
    steps: ["Cook rice", "Stir-fry veggies and eggs", "Mix with rice & soy sauce"]
  },
  salad: {
    title: "Salad",
    ingredients: ["Lettuce", "Tomato", "Cucumber", "Dressing"],
    steps: ["Chop veggies", "Add dressing", "Toss and serve"]
  },

  // 🍕 Dinner
  pizza: {
    title: "Pizza",
    ingredients: ["Pizza base", "Tomato sauce", "Cheese", "Toppings"],
    steps: ["Spread sauce on base", "Add toppings", "Bake for 15 mins"]
  },
  curry: {
    title: "Curry",
    ingredients: ["Onion", "Tomato", "Spices", "Vegetables/Chicken"],
    steps: ["Fry onion & tomato", "Add spices", "Cook with veggies/meat"]
  },
  noodles: {
    title: "Noodles",
    ingredients: ["Noodles", "Veggies", "Soy sauce", "Oil"],
    steps: ["Boil noodles", "Stir fry veggies", "Mix with noodles & sauce"]
  },

  // 🍔 Snacks
  samosa: {
    title: "Samosa",
    ingredients: ["Potatoes", "Spices", "Flour", "Oil"],
    steps: ["Prepare potato filling", "Fill dough", "Deep fry till golden"]
  },
  burger: {
    title: "Burger",
    ingredients: ["Buns", "Patty", "Lettuce", "Cheese", "Sauce"],
    steps: ["Grill patty", "Assemble burger", "Serve with fries"]
  },
  fries: {
    title: "Fries",
    ingredients: ["Potatoes", "Salt", "Oil"],
    steps: ["Cut potatoes", "Deep fry", "Add salt & serve"]
  },

  // 🍨 Dessert
  icecream: {
    title: "Ice Cream",
    ingredients: ["Milk", "Sugar", "Cream", "Flavor"],
    steps: ["Mix ingredients", "Freeze", "Serve chilled"]
  },
  cake: {
    title: "Cake",
    ingredients: ["Flour", "Eggs", "Sugar", "Butter", "Baking powder"],
    steps: ["Mix ingredients", "Bake at 180°C", "Decorate & serve"]
  },
  brownie: {
    title: "Brownie",
    ingredients: ["Chocolate", "Butter", "Flour", "Sugar", "Eggs"],
    steps: ["Melt chocolate", "Mix ingredients", "Bake till set"]
  }
};

// On recipe.html, fill the recipe details
window.addEventListener("DOMContentLoaded", () => {
  const recipeId = localStorage.getItem("selectedRecipe");
  const recipeTitleEl = document.getElementById("recipe-title");
  const ingredientsEl = document.getElementById("ingredients");
  const stepsEl = document.getElementById("steps");
  const favoriteBtn = document.getElementById("favorite-btn");

  if (recipeId && recipes[recipeId]) {
    // Fill recipe info
    recipeTitleEl.querySelector("#recipe-name").textContent = recipes[recipeId].title;
    ingredientsEl.innerHTML = recipes[recipeId].ingredients.map(i => `<li>${i}</li>`).join("");
    stepsEl.innerHTML = recipes[recipeId].steps.map(s => `<li>${s}</li>`).join("");

    // --- FAVORITE STAR LOGIC ---
    let favorites = JSON.parse(localStorage.getItem("favoriteRecipes") || "[]");
    if (favorites.includes(recipeId)) favoriteBtn.classList.add("favorited");

    // Toggle favorite on click
    favoriteBtn.addEventListener("click", () => {
      let favs = JSON.parse(localStorage.getItem("favoriteRecipes") || "[]");
      if (favs.includes(recipeId)) {
        favs = favs.filter(id => id !== recipeId);
        favoriteBtn.classList.remove("favorited");
      } else {
        favs.push(recipeId);
        favoriteBtn.classList.add("favorited");
      }
      localStorage.setItem("favoriteRecipes", JSON.stringify(favs));
    });
    // --- END FAVORITE STAR LOGIC ---
  } else {
    recipeTitleEl.querySelector("#recipe-name").textContent = "Recipe not found";
  }
});

// Go back to home page
function goHome() {
  window.location.href = "home.html";
}
