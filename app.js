let products = Array.from(document.querySelectorAll(".container h3"));
const input = document.querySelector("#products-filter");
const showcase = document.querySelector(".showcase");
const dropdown = document.querySelector("#dropdown select");
const addBtn = document.querySelector("#add-btn");
const pr = [
  {
    name: "Milo",
    price: "10",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.J7mk3SVy5LSV0Oru8EMi0AHaHa%26pid%3DApi&f=1",
    cat: "beverages"
  },
  {
    name: "Oreo",
    price: "20",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._90P_8cj0z2GqnKen6EKjQHaHa%26pid%3DApi&f=1",
    cat: "snacks"
  },
  {
    name: "Garlic",
    price: "1",
    img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.myelomacrowd.org%2Fwp-content%2Fuploads%2F2014%2F12%2Fphotodune-7269783-garlic-l.jpg&f=1&nofb=1",
    cat: "vegetables"
  },
  {
    name: "Jack Daniels",
    price: "70",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.worldwidebev.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fimage%2F1200x1200%2F9df78eab33525d08d6e5fb8d27136e95%2F1%2F0%2F1041-jack-daniels-tennessee-whiskey_2_1.jpg&f=1&nofb=1",
    cat: "alcohol"
  },
  {
    name: "Avocado",
    price: "2",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.goodhousekeeping.co.uk%2Fmain%2Fembedded%2F24723%2Fbest-way-peeling-avocado-goodhousekeepinguk.jpg&f=1&nofb=1",
    cat: "vegetables"
  },
  {
    name: "Veggie Burger",
    price: "2",
    img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0750%2F1095%2Fproducts%2F71eEB48W-VL._SL1417_1024x1024.jpeg%3Fv%3D1422102892&f=1&nofb=1",
    cat: "meat"
  }
];

const main = document.querySelector("main");

dropdown.addEventListener("click", categories);
input.addEventListener("keyup", showProduct);
addBtn.addEventListener("click", cr);
showcase.addEventListener("click", removeProduct);
showcase.addEventListener("click", editProduct);
main.addEventListener("click", outsideDropdown);


function showProduct (event) {
  /* const containers =  */
  products.forEach(pro => {
    if (pro.textContent.toLowerCase().includes(event.target.value.toLowerCase())) {
      pro.parentElement.parentElement.style.display = "inline-block";
    } else {
      pro.parentElement.parentElement.style.display = "none";
    }
  })
}

function categories (event) {
  products.forEach(pro => {
    if ((event.target.value === "")) {
      pro.parentElement.parentElement.style.display = "inline-block";
    } else {
      if (pro.parentElement.parentElement.classList.contains(event.target.value)) {
        pro.parentElement.parentElement.style.display = "inline-block";
      } else {
        pro.parentElement.parentElement.style.display = "none";
      }
    }
  })
}

function tryAgain (name) {
  if (name === "")  {
    while (name === "") {
      name = prompt("Your input can't be empty, try again")
    } 
    return name; 
  } else {
    return null; 
  }
}

function createProduct (name, price, im, cat) {
  let chars = [name, price, im, cat];
  let chars2 = ["Insert the name of your product",
                "Insert the price of your product",
                "Insert URL of the image of the product",
                "Insert the category of your product"
              ];
  
  for (let i = 0; i < chars.length; i++) {
    if (!chars[i]) chars[i] = prompt(chars2[i]); 
    if (!chars[i]) {
      chars[i] = tryAgain(chars[i]);
      if (!chars[i]) {
        return null;
      }  
    }
  }

  const removeButton = document.createElement("button");
  removeButton.textContent = "remove";
  removeButton.classList = "remove";
  const editButton = document.createElement("button");
  editButton.textContent = "edit";
  editButton.classList = "edit";
  const p = document.createElement("p");
  p.textContent = `$${chars[1]}`;
  const a = document.createElement("a");
  a.textContent = "Description";
  a.href = "#";
  const h3 = document.createElement("h3");
  h3.textContent = chars[0];
  const container = document.createElement("div");
  container.classList = "container";
  container.appendChild(h3);
  container.appendChild(a);
  container.appendChild(p);
  container.appendChild(editButton);
  container.appendChild(removeButton);
  const img = document.createElement("img");
  img.src = chars[2];
  const productBox = document.createElement("div");
  productBox.classList = `product-box ${chars[3]}`;
  productBox.appendChild(img);
  productBox.appendChild(container);
  showcase.appendChild(productBox);
  products = Array.from(document.querySelectorAll(".container h3"));
  return {name: chars[0], price: chars[1], img: chars[2], cat: chars[3]};
}

function cr () {
  pr.push(createProduct());
}

function removeProduct (event) {
  if (event.target.classList.contains("remove")) {
    if (confirm("Are you sure?")) {
      showcase.removeChild(event.target.parentElement.parentElement);
    }    
  }
}

function editProduct (event) {
  if (event.target.classList.contains("edit")) {
    const name = prompt("Assign a new name\n\nLeave empty to not do changes and press OK to continue");
    const img = prompt("Assign a new image (URL)\n\nLeave empty to not do changes and press OK to continue");
    const price = prompt("Assign a new price\n\nLeave empty to not do changes and press OK to continue");
    const cat = prompt("Assign a new category\n\nLeave empty to not do changes and press OK to continue");
    if (name) event.target.parentElement.querySelector("h3").textContent = name;
    if (price) event.target.parentElement.querySelector("p").textContent = `$${price}`;
    if (cat) event.target.parentElement.parentElement.classList = `product-box ${cat}`;
    if (img) event.target.parentElement.parentElement.querySelector("img").src = img;
  }
}

for (let i = 0; i < pr.length; i++) {
  let prod = pr[i];
  createProduct(prod.name, prod.price, prod.img, prod.cat);
}

function outsideDropdown (event) {
  if (event.target.tagName === "SELECT" || event.target.tagName === "INPUT") {
    dropdown.value = "";
  } 
}

