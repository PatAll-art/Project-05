console.log(window.location.href);

const url = window.location.href;
const productId = url.split('=').pop();

console.log(productId);

fetch('http://localhost:3000/api/products')
    .then(data => {
        return data.json();
        }).then(json => findProduct(json));


function findProduct (products){


for (i = 0; i < products.length; i++) {
    if (products[i]._id === productId) {

       
        const title = document.getElementById('title');
        const price = document.getElementById('price');
        const description = document.getElementById('description');
        const color = document.getElementsByClassName('item__content__settings__color');

        const imgCont = document.getElementsByClassName('item__img');
        const itemImg = document.createElement('img');
        itemImg.src = products[i].imageUrl;


        title.textContent = products[i].name;
        price.textContent = products[i].price;
        description.textContent = products[i].description;
        color.textContent = products[i].colors;
    

        imgCont.appendChild(itemImg);

    }
   
    

}

}