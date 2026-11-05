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
    {element:"Oxygen", price:0.02, abbreviation:"O",  atomicNumber:8},
    {element:"Calcium", price:1.64, abbreviation:"Ca",  atomicNumber:20},
    {element:"Copper", price:6.57, abbreviation:"Cu",  atomicNumber:29},
    {element:"Strontium", price:9.44, abbreviation:"Sr",  atomicNumber:38},
    {element:"Yttrium", price:15.82, abbreviation:"Y",  atomicNumber:39},
    {element:"Barium", price:3.84, abbreviation:"Ba",  atomicNumber:56},
    {element:"Mercury", price:292.69, abbreviation:"Hg",  atomicNumber:80},
    {element:"Bismuth", price:24.09, abbreviation:"Bi",  atomicNumber:83},
    {element:"Hydrogen", price:1.13, abbreviation:"H",  atomicNumber:1},
    {element:"Helium", price:44.00, abbreviation:"He",  atomicNumber:2},
    {element:"Nitrogen", price:0.06, abbreviation:"N",  atomicNumber:7},
    {element:"Sodium", price:1.36, abbreviation:"Na",  atomicNumber:11},
    {element:"Aluminum", price:1.39, abbreviation:"Al",  atomicNumber:13},
    {element:"Silicon", price:0.77, abbreviation:"Si",  atomicNumber:14},
    {element:"Titanium", price:5.17, abbreviation:"Ti",  atomicNumber:22},
    {element:"Iron", price:0.19, abbreviation:"Fe",  atomicNumber:26},
    {element:"Nickel", price:6.31, abbreviation:"Ni",  atomicNumber:28},
    {element:"Silver", price:236.32, abbreviation:"Ag",  atomicNumber:47},
    {element:"Tungsten", price:16.01, abbreviation:"W",  atomicNumber:74},
    {element:"Gold", price:20430.96, abbreviation:"Au",  atomicNumber:79},
]
cart=[]
cost=0
cartfiller=[]
function shoppingEnter(){
    shop.forEach(shop => {console.log(shop.element)});
}
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
shoppingTotal()
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("test")

function getRGB(){
    let r = Math.floor(Math.random()* 256);
    let g = Math.floor(Math.random()* 256);
    let b = Math.floor(Math.random()* 256);
    const box = document.querySelector(".box");
    box.style.backgroundColor = `rgb(${r},${g},${b})`
    header.textContent = `rgb(${r},${g},${b})`;
}

function inject(){
    const box = document.querySelector(".box");
    box.insertAdjacentHTML("afterbegin", `<h2 class="test>Inserted</h2>`)
}



const header= document.getElementById("color");
let x = 0;
document.getElementById("btn").addEventListener("click", function(){
    getRGB();
    inject("HIIIII");
});

//select the contianer
//create inject function that takes argument for item
//inject 1 full HTML card into the container


