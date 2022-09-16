fetch('http://localhost:3000/api/products')
    .then(data => {
        return data.json();
        }).then(json => AddProducts(json));

    function AddProducts (products) {

        let item = document.getElementById('items');
        
        for (let product of products) {
            console.log(product._id);


            let section = document.getElementById('items');           
            let newAnchor = document.createElement('a');
            let newArticle = document.createElement('article');
      
            let newName = document.createElement('h3');
       
            let newImg = document.createElement('img');
            let newDescription = document.createElement('p');
            let newAltTxt = document.createElement('p');
            

        
            newName.textContent = product.name;
        
            newImg.src = product.imageUrl;
            newDescription.textContent = product.description;
            newAltTxt.textContent = product.altTxt;

            newAnchor.setAttribute('href','./product.html?id=' + product._id) ;

            newAnchor.appendChild(newArticle);
      
            newArticle.appendChild(newName);
          
   
            newArticle.appendChild(newImg);
            newArticle.appendChild(newDescription);
            newImg.appendChild(newAltTxt);
            section.appendChild(newAnchor);
       

            newName.classList.add('productName');
            newDescription.classList.add('productDescription');

            const sectionProduct = document.querySelector('section');

            sectionProduct.appendChild(newAnchor);

        

            
        }
            
    

    }

