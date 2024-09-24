import { products } from "./products.js";

export let cart=JSON.parse(localStorage.getItem('cart'));
if(!cart){
  cart=  [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
    },{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
    deliveryOptionId: '2'
    }
    ];
}


function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId,quantity){
    let matchingItem;
          cart.forEach((cartItem)=>{
              if(productId===cartItem.productId){
                  matchingItem=cartItem;
              }
          });
          // if item is present then it increase the value of quantity
          // we assume that cart has some items(quantity attribute) in it that's why we directly update the value of quantity
          if(matchingItem){
              matchingItem.quantity+=quantity;
          }else{
          cart.push({
          productId: productId,
          quantity: quantity,
          deliveryOptionId: '1'
         });
      }
      saveToStorage();
  }


export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);  // Only add items that don't match the productId
        }
    });

    cart = newCart;
    saveToStorage();  // Update the localStorage with the new cart
}


  export function updateDeliveryOption(productId,deliveryOptionId){
    let matchingItem;
    cart.forEach((cartItem)=>{
        if(productId===cartItem.productId){
            matchingItem=cartItem;
        }
    });
    matchingItem.deliveryOptionId=deliveryOptionId;
    saveToStorage();
  }