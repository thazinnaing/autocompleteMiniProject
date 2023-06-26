const productId= localStorage.getItem("productId");
console.log(productId);

fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(productStore=>{
    console.log(productStore);
    const showProduct= productStore.filter(product=>{
        return product.id.toString() === productId;
        
    })
    console.log(showProduct);

    const container=document.getElementsByClassName("container")[0];

    const leftContainer=document.createElement("div");
    leftContainer.classList.add("leftContainer");

    const productImage=document.createElement("img");
    productImage.classList.add("productImage");
    productImage.src=showProduct[0].image;

    const price=document.createElement("div");
    price.classList.add("price");
    price.append(`$${showProduct[0].price}`);

    leftContainer.append(productImage, price);

    const rightContainer=document.createElement("div");
    rightContainer.classList.add("rightContainer");

    const category=document.createElement("div");
    category.classList.add("category");
    category.append(showProduct[0].category);

    const ul=document.createElement("ul");

    const li1=document.createElement("li");
    li1.classList.add("li");
    li1.append(showProduct[0].title);

    const li2=document.createElement("li");
    li2.classList.add("li");
    li2.append(showProduct[0].description);

    

    const li3=document.createElement("li");
    li3.classList.add("li");
    li3.append(`Limited count: ${showProduct[0].rating.count}`);

    ul.append(li1, li2, li3);

    rightContainer.append(category, li1, li2, li3);

    container.append(leftContainer, rightContainer);

})



