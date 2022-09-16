const storedItem = localStorage.getItem("cart");
const itemStored = JSON.parse(storedItem);

totalCheck();


for (i = 0; i < itemStored.length; i++)  {
  let item = itemStored[i];

  console.log(item);

  let items = document.getElementById("cart__items");

  let newArticle = document.createElement("article");
  let newImgDiv = document.createElement('div');
  let itemImg = document.createElement("img");
  let descriptionDiv = document.createElement('div');
  let contentDiv = document.createElement('div');
  let name = document.createElement("h2");
  let color = document.createElement("p");
  let price = document.createElement("p");
  let quantityDivSetting = document.createElement('div');
  let quantityDiv = document.createElement('div');
  let itemQuantity = document.createElement("p");
  let deleteDiv = document.createElement('div');
  let deleteButton = document.createElement("p");
  let quantity = document.createElement("input");

  quantity.setAttribute('type', 'number');
  quantity.setAttribute('class', 'itemQuantity');
  quantity.setAttribute('name', "itemQuantity");
  quantity.setAttribute('min', 1);
  quantity.setAttribute('max', 100);
  quantity.setAttribute('value', item.quantity);
 

  name.textContent = item.name;
  color.textContent = item.color;
  price.textContent = '€' + item.price;
  itemImg.src = item.img;
  deleteButton.textContent = "Delete";
  itemQuantity.textContent = "Quantity:";
  quantity.textContent = quantity.value;

  newArticle.setAttribute("href", "./product.html?id=" + item.id);
  itemImg.setAttribute("src", item.img);

  descriptionDiv.appendChild(contentDiv);
  contentDiv.appendChild(name);
  contentDiv.appendChild(color);
  contentDiv.appendChild(price);
  newArticle.appendChild(itemQuantity);
  newArticle.appendChild(deleteButton);
  newImgDiv.appendChild(itemImg);
  deleteDiv.appendChild(deleteButton);
  quantityDiv.appendChild(itemQuantity);
  quantityDivSetting.appendChild(quantity);

  items.appendChild(newArticle);

  newArticle.appendChild(newImgDiv);
  newArticle.appendChild(descriptionDiv);
  quantityDivSetting.appendChild(quantityDiv);
  quantityDivSetting.appendChild(deleteDiv);
  newArticle.appendChild(quantityDivSetting);

  newArticle.classList.add('cart__item');
  newImgDiv.classList.add('cart__item__img');
  contentDiv.classList.add('cart__item__content');
  descriptionDiv.classList.add('cart__item__content__description');
  quantityDivSetting.classList.add('cart__item__settings');
  quantityDiv.classList.add('cart__item__content__settings__quantity');

// add another item in cart

quantity.addEventListener('change', function(event){

  let value = event.target.value;

  let index = itemStored.indexOf(item);
  let element = itemStored[index];
  element.quantity = value;
  localStorage.setItem('cart', JSON.stringify(itemStored));

console.log(value);
console.log(itemStored);

totalCheck();

})

// delete function

deleteButton.addEventListener('click', function(){

newArticle.remove();

let index = itemStored.indexOf(item);

console.log(index);

let a = itemStored.splice(index, 1);

console.log(itemStored);

localStorage.setItem('cart', JSON.stringify(itemStored));

totalCheck();

});
}

function totalCheck() {

let totalCart = 0;
let totalSum = 0;

for (let i = 0; i < itemStored.length; i++) {

  let itemQuant = Number(itemStored[i].quantity);
 
  totalCart += itemQuant;

  let price = Number(itemStored[i].price);

  totalSum = totalSum + (price * itemQuant);

  console.log(itemStored);
  
}
let totalPrice = document.getElementById('totalPrice');
  
totalPrice.textContent = totalSum;
}


/* function name (firstName) {

let submitFirstName = document.getElementById('firstName');
let firstNameError = document.getElementById('firstNameErrorMsg');
let alpha = "-'ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i = 0, l = firstName.length; i < l; i++) {
    if (alpha.indexOf(submitFirstName[i]) === -1) return false;
  }
  return true;
}
*/
// name code

/*let firstName = document.getElementById('firstName').value;
let firstNameFormat = '^[ a-zA-Z\-\’]+$';
if (firstNameFormat.test(firstName)) {
  alert('Invalid');
} else {
  alert('Valid');
};*/
let submitFirstName = document.getElementById('firstName');
function firstNameInput(inputName) {
  let name = /^[A-Za-z]+$/;
  if(inputName.value.match(name)) {
    alert('Thank you!');
    return true;
  } else {
    alert('Try again!');
    return false;
  }
}



// email code
let email = document.getElementById('email');
email.addEventListener('input', ($event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('Need to be email format!');
    email.reportValidity();
  } else {
    email.setCustomValidity('');
  }
});





