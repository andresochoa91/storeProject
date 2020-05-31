const input = document.querySelector("#products-filter");
let products = Array.from(document.querySelectorAll(".container h3"));
const showcase = document.querySelector(".showcase");
const dropdown = document.querySelector("#dropdown select");
const addBtn = document.querySelector("#add-btn");
const pr = [
  {
    name: "Milo",
    price: 10,
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.J7mk3SVy5LSV0Oru8EMi0AHaHa%26pid%3DApi&f=1",
    cat: "alcohol"
  },
  {
    name: "Oreo",
    price: 20,
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._90P_8cj0z2GqnKen6EKjQHaHa%26pid%3DApi&f=1",
    cat: "meat"
  }
];

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

const categories = (event) => {
  products.forEach(pro => {
    if (!(event.target.value === "")) {
      if (pro.parentElement.parentElement.classList.contains(event.target.value)) {
        pro.parentElement.parentElement.style.display = "inline-block";
      } else {
        pro.parentElement.parentElement.style.display = "none";
      }
    } else {
      pro.parentElement.parentElement.style.display = "inline-block";
    }
  })
};

const createProduct = (name = prompt("Name"), price = prompt("Price"), im = prompt("Image link"), cat = prompt ("Category")) => {
  const removeButton = document.createElement("button");
  removeButton.textContent = "remove";
  removeButton.classList = "remove";
  const editButton = document.createElement("button");
  editButton.textContent = "edit";
  editButton.classList = "edit";
  const p = document.createElement("p");
  p.textContent = `$${price}`;
  const a = document.createElement("a");
  a.textContent = "Description";
  a.href = "#";
  const h3 = document.createElement("h3");
  h3.textContent = name;
  const container = document.createElement("div");
  container.classList = "container";
  container.appendChild(h3);
  container.appendChild(a);
  container.appendChild(p);
  container.appendChild(editButton);
  container.appendChild(removeButton);
  const img = document.createElement("img");
  img.src = im;
  const productBox = document.createElement("div");
  productBox.classList = `product-box ${cat}`;
  productBox.appendChild(img);
  productBox.appendChild(container);
  showcase.appendChild(productBox);
  products = Array.from(document.querySelectorAll(".container h3"));
}

const cr = () => {
    createProduct();
}

for (let i = 0; i < pr.length; i++) {
  let prod = pr[i];
  createProduct(prod.name, prod.price, prod.img, prod.cat);
}

dropdown.addEventListener("click", categories);
input.addEventListener("keyup", showProduct);
addBtn.addEventListener("click", cr);