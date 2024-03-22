// User class
class User {
    constructor(username, email, password, dietaryRestrictions, cookingPreferences) {
      this.username = username;
      this.email = email;
      this.password = password;
      this.dietaryRestrictions = dietaryRestrictions;
      this.cookingPreferences = cookingPreferences;
      this.recipes = [];
    }
  
    // Add a recipe to the user's collection
    addRecipe(recipe) {
      this.recipes.push(recipe);
    }
  
    // Remove a recipe from the user's collection
    removeRecipe(recipeId) {
      this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
    }
  
    // Update a recipe in the user's collection
    updateRecipe(recipeId, updatedRecipe) {
      this.recipes = this.recipes.map(recipe => {
        if (recipe.id === recipeId) {
          return updatedRecipe;
        }
        return recipe;
      });
    }
  }
  
  // Recipe class
  class Recipe {
    constructor(id, title, ingredients, instructions, imageUrl, userId, likes, comments) {
      this.id = id;
      this.title = title;
      this.ingredients = ingredients;
      this.instructions = instructions;
      this.imageUrl = imageUrl;
      this.userId = userId;
      this.likes = likes;
      this.comments = comments;
    }
  
    // Add a like to the recipe
    addLike() {
      this.likes++;
    }
  
    // Remove a like from the recipe
    removeLike() {
      this.likes--;
    }
  
    // Add a comment to the recipe
    addComment(comment) {
      this.comments.push(comment);
    }
  
    // Remove a comment from the recipe
    removeComment(