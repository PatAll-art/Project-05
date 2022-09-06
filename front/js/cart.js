const storedItem = localStorage.getItem("cart");
const itemStored = JSON.parse(storedItem);

for (let item of itemStored) {
  console.log(item);

  let items = document.getElementById("cart__items");

  let newArticle = document.createElement("article");
  let itemImg = document.createElement("img");
  let name = document.createElement("h2");
  let color = document.createElement("p");
  let price = document.createElement("p");
  let itemQuantity = document.createElement("p");
  let deleteButton = document.createElement("p");

  name.textContent = item.name;
  color.textContent = item.color;
  price.textContent = item.price;
  itemImg.src = item.img;
  deleteButton.textContent = "Delete";


  newArticle.setAttribute("href", "./product.html?id=" + item.id);
  itemImg.setAttribute("src", item.img);

  newArticle.appendChild(name);
  newArticle.appendChild(color);
  newArticle.appendChild(price);
  newArticle.appendChild(itemQuantity);
  newArticle.appendChild(deleteButton);
  newArticle.appendChild(itemImg);
  newArticle.appendChild(deleteButton);

  items.appendChild(newArticle);

  newArticle.classList.add('cart__item');
  itemImg.classList.add('cart__item__img');
  name.classList.add('cart__item__content__description');
  color.classList.add('cart__item__content__description');
  price.classList.add('cart__item__content__description');
  itemQuantity.classList.add('cart__item__content__settings__quantity');
  deleteButton.classList.add('deleteItem');

}
