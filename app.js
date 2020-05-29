const input = document.querySelector("#products-filter");
const products = Array.from(document.querySelectorAll(".container h3"));
const showcase = document.querySelector(".showcase");
console.log(showcase);

console.log(products)
products.forEach(h3 => console.log(h3.textContent));


const showProduct = (event) => {
  /* const containers =  */
  products.forEach(pro => {
    if (pro.textContent.toLowerCase().includes(event.target.value.toLowerCase())) {
      pro.parentElement.parentElement.style.display = "inline-block";
    } else {
      pro.parentElement.parentElement.style.display = "none";
    }
  })
};

input.addEventListener("keyup", showProduct);