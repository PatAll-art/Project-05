console.log(window.location.href);

const url = window.location.href;
const productId = url.split("=").pop();

console.log(productId);

fetch("http://localhost:3000/api/products")
  .then((data) => {
    return data.json();
  })
  .then((json) => findProduct(json));

function findProduct(products) {
  for (i = 0; i < products.length; i++) {
    if (products[i]._id === productId) {
      const title = document.getElementById("title");
      const price = document.getElementById("price");
      const description = document.getElementById("description");

      title.textContent = products[i].name;
      price.textContent = products[i].price;
      description.textContent = products[i].description;

      const imgCont = document.getElementsByClassName("item__img");
      const itemImg = document.createElement("img");

      itemImg.src = products[i].imageUrl;

      imgCont[0].appendChild(itemImg);

      const colors = products[i].colors;

      for (j = 0; j < colors.length; j++) {
        const color = colors[j];

        console.log(color);

        const options = document.getElementById("colors");

        const colorOp = document.createElement("option");

        colorOp.textContent = color;

        colorOp.setAttribute("value", color);

        options.appendChild(colorOp);
      }
    }
  }
}

const cart = document.getElementById("addToCart");

function addCart() {
  console.log("in the cart");
  checkStorage();

  const url = window.location.href;
  const productId = url.split("=").pop();

  const colorSelect = document.getElementById("colors");
  const colorValue = colorSelect.options[colorSelect.selectedIndex].value;

  console.log(colorValue);
  const cartStorage = JSON.parse(localStorage.getItem("cart"));
  const quantityNum = document.getElementById("quantity");
  const number = quantityNum.value;
  const imgDiv = document.getElementsByClassName("item__img")[0];
  const itemImg = imgDiv.getElementsByTagName("img")[0].src;
  const price = document.getElementById("price").textContent;
  const description = document.getElementById("description").textContent;
  const title = document.getElementById("title").textContent;


  const index = cartStorage.findIndex((element) => {
    if (element.id === productId && element.color === colorValue) {
      return true;
    }
  });

  if (index === -1) {
    const newItem = {
      color: colorValue,
      quantity: number,
      id: productId,
      img: itemImg,
      price: price,
      description: description,
      name: title
    };

    cartStorage.push(newItem);
    localStorage.setItem("cart", JSON.stringify(cartStorage));
  }
  else {
    const element = cartStorage[index];
    element.quantity = Number(number) + Number(element.quantity);
    localStorage.setItem("cart", JSON.stringify(cartStorage));
  }
}

cart.addEventListener("click", addCart);

function checkStorage() {
  localStorage.getItem("cart");

  if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", "[]");
  }
}
