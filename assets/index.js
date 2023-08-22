// var search = $("#searchInputArea").val();
// var searchButton = $("#searchButton");
// $("#searchButton").on("click", function () {
//   iDRecipe();
//   Alchool();
// });
// async function iDRecipe() {
//   const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${search}&instructionsRequired=true&fillIngredients=false&addRecipeInformation=false&titleMatch=Crock%20Pot&maxReadyTime=20&ignorePantry=true&sort=calories&sortDirection=asc&minCarbs=10&maxCarbs=100&minProtein=10&maxProtein=100&minCalories=50&maxCalories=800&minFat=10&maxFat=100&minAlcohol=0&maxAlcohol=100&minCaffeine=0&maxCaffeine=100&minCopper=0&maxCopper=100&minCalcium=0&maxCalcium=100&minCholine=0&maxCholine=100&minCholesterol=0&maxCholesterol=100&minFluoride=0&maxFluoride=100&minSaturatedFat=0&maxSaturatedFat=100&minVitaminA=0&maxVitaminA=100&minVitaminC=0&maxVitaminC=100&minVitaminD=0&maxVitaminD=100&minVitaminE=0&maxVitaminE=100&minVitaminK=0&maxVitaminK=100&minVitaminB1=0&maxVitaminB1=100&minVitaminB2=0&maxVitaminB2=100&minVitaminB5=0&maxVitaminB5=100&minVitaminB3=0&maxVitaminB3=100&minVitaminB6=0&maxVitaminB6=100&minVitaminB12=0&maxVitaminB12=100&minFiber=0&maxFiber=100&minFolate=0&maxFolate=100&minFolicAcid=0&maxFolicAcid=100&minIodine=0&maxIodine=100&minIron=0&maxIron=100&minMagnesium=0&maxMagnesium=100&minManganese=0&maxManganese=100&minPhosphorus=0&maxPhosphorus=100&minPotassium=0&maxPotassium=100&minSelenium=0&maxSelenium=100&minSodium=0&maxSodium=100&maxSugar=100&maxZinc=100&number=10&ranking=2`;
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "",
//       "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     console.log(result);
//     var idFood = result.id;
//   } catch (error) {
//     console.error(error);
//   }
//   fetchData(idFood);
// }

// iDRecipe();

// async function fetchData() {
//   const url =
//     "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information";
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "",
//       "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }
// fetchData();

// async function Alchool() {
//   const url = `https://the-cocktail-db.p.rapidapi.com/search.php?s=${encodeURIComponent(
//     search
//   )}`;
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "",
//       "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }
// Alchool();

// fetchData(); // Call the async function

// $(document).ready(function () {
//   var apiKey = "";
//   var id = "5ed6604691c37cdc054bd0d0"; // Replace with the actual endpoint you want to use
//   var queryURL = `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`;

//   fetch(queryURL)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       // Process the fetched data
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error("Fetch error:", error);
//     });
// });
// $(document).ready(function () {
//   $("#searchButton").click(function () {
//     const searchQuery = $("#searchInput").val();
//     if ($.trim(searchQuery) !== "") {
//       const apiUrl = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${encodeURIComponent(
//         searchQuery
//       )}`;
//       $.getJSON(apiUrl)
//         .done(function (data) {
//           console.log(data);
//           const resultsDiv = $("#results");
//           resultsDiv.empty();

//           data.data.recipes.forEach((recipe) => {
//             const recipeDiv = $("<div>").text(recipe.image_url);
//             resultsDiv.append(recipeDiv);
//           });
//         })
//         .fail(function (error) {
//           console.error("Fetch error:", error);
//         });
//     }
//   });
// });

// ----------Event Listeners for Headers------

$(document).ready(function () {
  const headerSection = $(".container-fluid.row.d-flex.justify-content-center");
  const headerButtons = $(".headerButton");
  headerButtons.on("click", function () {
    const target = $(this).data("target");
    headerSection.addClass("d-none");
    $("#" + target).removeClass("d-none");
  });
});
