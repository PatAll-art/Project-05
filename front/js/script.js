fetch('http://localhost:3000/api/products')
    .then(data => {
        return data.json();
        }).then(json => AddProducts(json));

    function AddProducts (products) {

        let item = document.getElementById('items');
        
        for (let product of products) {
            console.log(product._id);
            
            let newAnchor = document.createElement('a');
            let newArticle = document.createElement('article');
            let newColors = document.createElement('p');
            let newName = document.createElement('h3');
            let newId = document.createElement('p');
            let newPrice = document.createElement('p');
            let newImg = document.createElement('img');
            let newDescription = document.createElement('p');
            let newAltTxt = document.createElement('p');
            

            newColors.textContent = product.colors;
            newName.textContent = product.name;
            newId.textContent = product._id;
            newPrice.textContent = product.price;
            newImg.src = product.imageUrl;
            newDescription.textContent = product.description;
            newAltTxt.textContent = product.altTxt;

            newAnchor.setAttribute('href','./product.html?id=' + product._id) ;

            newAnchor.appendChild(newArticle);
            newArticle.appendChild(newColors);
            newArticle.appendChild(newName);
            newArticle.appendChild(newId);
            newArticle.appendChild(newPrice);
            newArticle.appendChild(newImg);
            newArticle.appendChild(newDescription);
            newImg.appendChild(newAltTxt);
       

            newName.classList.add('productName');
            newDescription.classList.add('productDescription');

            const sectionProduct = document.querySelector('section');

            sectionProduct.appendChild(newAnchor);

        

            
        }
            
    

    }

