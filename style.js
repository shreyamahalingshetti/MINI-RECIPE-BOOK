document.getElementById("searchForm").addEventListener("submit", function(e) {
    e.preventDefault(); 
    searchRecipe();     
});

function searchRecipe() {
    const input = document.getElementById("search").value.toLowerCase();
    const items = document.querySelectorAll("li");

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(input) ? "list-item" : "none";
    });
}

function showRecipe(element) {
    const title = element.getAttribute("data-title");
    const recipe = element.getAttribute("data-recipe");

    document.getElementById("recipeTitle").textContent = title;
    document.getElementById("recipeContent").textContent = recipe;

    document.getElementById("recipePage").style.display = "block";
    setTimeout(() => {
        document.getElementById("recipePage").style.opacity = "1";
    }, 10);

    document.getElementById("cards").style.display = "none";
    document.getElementById("searchForm").style.display = "none"; 
}

function goBack() {
    document.getElementById("recipePage").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("recipePage").style.display = "none";
        document.getElementById("cards").style.display = "flex";
        document.getElementById("searchForm").style.display = "flex"; 
    }, 500);
}