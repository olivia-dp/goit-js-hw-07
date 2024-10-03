const array = document.querySelectorAll(".item")
console.log(`Number of categories: ${array.length}`);
array.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`)
    console.log(`Elements: ${item.lastElementChild.children.length}`);   
});

