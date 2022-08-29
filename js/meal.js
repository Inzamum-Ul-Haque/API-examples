const loadMealDetails = () => {
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=fish";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetails(data.meals));
};

const displayMealDetails = (meals) => {
  const mealDbContainer = document.getElementById("meal-db-container");
  mealDbContainer.innerHTML = ``;
  meals.forEach((meal) => {
    const mealDiv = document.createElement("div");
    mealDiv.innerHTML = `
      <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">
                  ${meal.strInstructions.slice(0, 200)}
                </p>
            </div>
        </div>
      `;
    mealDbContainer.appendChild(mealDiv);
  });
};

const searchMeal = (event) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${event.target.value}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => searchMealDetails(data.meals));
};

const searchMealDetails = (meals) => {
  displayMealDetails(meals);
};

loadMealDetails();
