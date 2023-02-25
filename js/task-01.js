const categoryItems = document.querySelectorAll(".item");
console.log('Number of categories: ', categoryItems.length);

for (const item of categoryItems) {
  const categoryName = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("li").length;
  console.log(``);
  console.log('Category: ', categoryName);
  console.log('Elements: ', categoryElements);
}




// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

