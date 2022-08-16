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
      
        title.textContent = products[i].name;
        price.textContent = products[i].price;
        description.textContent = products[i].description;
  
        const imgCont = document.getElementsByClassName('item__img');
        const itemImg = document.createElement('img');

        itemImg.src = products[i].imageUrl;

        imgCont[0].appendChild(itemImg);

        const colors = products[i].colors;


       for (j = 0; j < colors.length; j++) {


            const color = colors[j]

        console.log(color);

            const options = document.getElementById('colors');

            const colorOp = document.createElement('option');

            colorOp.textContent = color;

            colorOp.setAttribute('value', color);

            options.appendChild(colorOp);
       


       }
   

}

}
}