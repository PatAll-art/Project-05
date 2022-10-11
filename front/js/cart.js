const storedItem = localStorage.getItem("cart");
const itemStored = JSON.parse(storedItem);

// use from below function everytime the page loads

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

// quantity and price total function

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

let totalQuantity = document.getElementById('totalQuantity');

totalQuantity.textContent = totalCart;

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

/*let submitFirstName = document.getElementById('firstName');
function firstNameInput(inputName) {
  let name = /^[A-Za-z]+$/;
  if(submitFirstName.value.match(name)) {
    alert('Thank you!');
    return true;
  } else {
    error.textContent = ""
  }*/

  /*let firstName = new RegExp('^[A-Za-z]+$');
  console.log(firstName.test('alias')); // true*/

  let textChecker = /[a-z]/gi;

  let firstName = document.getElementById('firstName');
 firstName.addEventListener('blur', ($event) => {
  console.log(firstName.value);
  if (!firstName.value.match(textChecker)) {
    firstName.setCustomValidity('Please input First Name');
    firstName.reportValidity();
  } else {
    firstName.setCustomValidity('');
  }
});



// last name code
let lastName = document.getElementById('lastName');
lastName.addEventListener('blur', ($event) => {
 console.log(lastName.value);
 if (!lastName.value.match(textChecker)) {
   lastName.setCustomValidity('Please input Last Name');
   lastName.reportValidity();
 } else {
   lastName.setCustomValidity('');
 }
});

// address code
let address = document.getElementById('address');
address.addEventListener('blur', ($event) => {
 console.log(address.value);
 if (!address.value.match(textChecker)) {
   address.setCustomValidity('Please input Address');
   address.reportValidity();
 } else {
   address.setCustomValidity('');
 }
});

// city code
let city = document.getElementById('city');
city.addEventListener('blur', ($event) => {
  console.log(city.value);
  if (!city.value.match(textChecker)) {
    city.setCustomValidity('Please input City');
    city.reportValidity();
  } else {
    city.setCustomValidity('');
  }
 });

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

// order confirmation after input of contact

let orderConfirm = document.getElementById('order');

orderConfirm.addEventListener('click',(event) =>{
  console.log('order is comanded');
  event.preventDefault();

  let contact = {
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
    city: city.value,
    email: email.value
  }

  console.log(contact);

  let productShopped = []

  for (i = 0; i < itemStored.length; i++) {
    console.log(itemStored[i]);
    productShopped.push(itemStored[i].id)
  }
  console.log(productShopped);
// POST method of product

  fetch("http://localhost:3000/api/products/order",{
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({contact: contact, products: productShopped})
  }).then(res => res.json())
    .then(res => {localStorage.setItem('orderId', res.orderId)
    console.log(res);

    // pull of order ID for confirmation page
    
    window.location.href = 'confirmation.html?id=' + res.orderId;

  // order ID response, save into local storage
  /*$('#done').click(function(){
    console.log({orderId})
    alert(`Thanks for ordering with us. Your order Id is ${orderId} . Use it to track your order.`);
    localStorage.clear();
  })*/
 
})
})
