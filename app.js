/* We will be creating a project that allows users to browse items and add
them to a shopping cart. You may use any theme you want. This project will
be revisited several times (adding UI layer, advanced sorting methods) so
pick something you’re happy with. We will
Create a list of at least 20 items to sell
Filter what products are shown with button clicks (clicks added later!)
Allow users to add to a cart
Remove Items from cart
Provide users a total for their purchase
*Later
All items shown and filtered on screen
Shopping cart with add/remove buttons and total order price */
shop=[
    {element:"Oxygen", price:0.02, abbreviation:"O",  atomicNumber:8, image:"Oxygen.png"},
    {element:"Calcium", price:1.64, abbreviation:"Ca",  atomicNumber:20, image:"Calcium.png"},
    {element:"Copper", price:6.57, abbreviation:"Cu",  atomicNumber:29, image:"Copper.jpg"},
    {element:"Strontium", price:9.44, abbreviation:"Sr",  atomicNumber:38, image:"Strontium.png"},
    {element:"Yttrium", price:15.82, abbreviation:"Y",  atomicNumber:39, image:"Yttrium.png"},
    {element:"Barium", price:3.84, abbreviation:"Ba",  atomicNumber:56, image:"Barium.png"},
    {element:"Mercury", price:292.69, abbreviation:"Hg",  atomicNumber:80, image:"Mercury.png"},
    {element:"Bismuth", price:24.09, abbreviation:"Bi",  atomicNumber:83, image:"Bismuth.png"},
    {element:"Hydrogen", price:1.13, abbreviation:"H",  atomicNumber:1, image:"Hydrogen.png"},
    {element:"Helium", price:44.00, abbreviation:"He",  atomicNumber:2, image:"Helium.png"},
    {element:"Nitrogen", price:0.06, abbreviation:"N",  atomicNumber:7, image:"Nitrogen.png"},
    {element:"Sodium", price:1.36, abbreviation:"Na",  atomicNumber:11, image:"Sodium.png"},
    {element:"Aluminum", price:1.39, abbreviation:"Al",  atomicNumber:13, image:"Aluminum.png"},
    {element:"Silicon", price:0.77, abbreviation:"Si",  atomicNumber:14, image:"Silicon.png"},
    {element:"Titanium", price:5.17, abbreviation:"Ti",  atomicNumber:22, image:"Titanium.png"},
    {element:"Iron", price:0.19, abbreviation:"Fe",  atomicNumber:26, image:"Iron.jpg"},
    {element:"Nickel", price:6.31, abbreviation:"Ni",  atomicNumber:28, image:"Nickel.png"},
    {element:"Silver", price:236.32, abbreviation:"Ag",  atomicNumber:47, image:"Silver.png"},
    {element:"Tungsten", price:16.01, abbreviation:"W",  atomicNumber:74, image:"Tungsten.png"},
    {element:"Gold", price:20430.96, abbreviation:"Au",  atomicNumber:79, image:"Gold.jpg"},
]
cart={items:"", price:0}
/* cart=[]
cost=0
cartfiller=[] */
/*
function shoppingAdd(z){
    shop.forEach(function(shop){
        if(z===shop.element){
            cart.push(z) 
            cost += shop.price
        }
    })
}
function shoppingRemove(y){
    cart.forEach(function(cart){
        if(y===cart){
            shop.forEach(function(shop){
                if(y===shop.element){
                    cost -= shop.price
                }
            })
        }else{
            cartfiller.push(cart) 
        }
    })
    cart = []
    cartfiller.forEach(cartfiller => {cart.push(cartfiller)});
} 
function shoppingTotal(){
    cart.forEach(cart => {console.log(cart)});
    console.log(cost)
}
function shoppingFilter(){

}
shoppingAdd('Gold');
shoppingAdd('Gold');
shoppingAdd('Helium');
shoppingRemove('Helium');

console.log(cart)
shoppingTotal() */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function inject(){
    const cardmenu = document.querySelector(".cardsmenu");
    shop.forEach(shop => {
    cardmenu.insertAdjacentHTML("beforeend", `
        <div class="card" data-item="${shop.element}"> 
            <h2 class="title">${shop.element}</h2>
            <img class ="image" src="img/${shop.image}" alt="">
            <p class="desc">Abbreviation: ${shop.abbreviation}</p>
            <p class="desc">Atomic Number: ${shop.atomicNumber}</p>
            <p class="price">$${shop.price}</p>
            <button id="buy">Add to Cart</button>
        </div>
        `)
    });
}
inject();

const buttons=document.querySelectorAll("button")
buttons.forEach((button) => 
  button.addEventListener("click", function (event){
    const nextItem=event.target.closest(".card").getAttribute("data-item")
    console.log(nextItem)
})
);
//select the contianer
//create inject function that takes argument for item
//inject 1 full HTML card into the container


