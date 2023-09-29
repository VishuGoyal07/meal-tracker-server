"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _addIngredientRoute = require("./addIngredientRoute");

var _addMealRoute = require("./addMealRoute");

var _deleteIngredientRoute = require("./deleteIngredientRoute");

var _deleteMealRoute = require("./deleteMealRoute");

var _getIngredientsRoute = require("./getIngredientsRoute");

var _getMealsRoute = require("./getMealsRoute");

var _getShoppingListRoute = require("./getShoppingListRoute");

var _searchRecipesRoute = require("./searchRecipesRoute");

var routes = [_addIngredientRoute.addIngredientRoute, _addMealRoute.addMealRoute, _deleteIngredientRoute.deleteIngredientRoute, _deleteMealRoute.deleteMealRoute, _getIngredientsRoute.getIngredientsRoute, _getMealsRoute.getMealsRoute, _getShoppingListRoute.getShoppingListRoute, _searchRecipesRoute.searchRecipesRoute];
exports.routes = routes;
//# sourceMappingURL=index.js.map