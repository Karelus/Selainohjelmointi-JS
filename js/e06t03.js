import {setPriceList, getPrice} from "/PriceList.js";

let priceList = [   
    {
      itemid: 1, 
      itemname: 'bottle', 
      prices: [{ qty: 1, price: 1.25},{ qty: 100, price: 1.10},{ qty: 1000, price: 1.00}]
    },
    {
      itemid: 2, 
      itemname: 'glass', 
      prices: [{ qty: 1, price: 2.50},{ qty: 50, price: 2.00},{ qty: 200, price: 1.60}]
    },
    {
      itemid: 3, 
      itemname: 'log', 
      prices: [{ qty: 1, price: 0.75},{ qty: 75, price: 0.60},{ qty: 100, price: 0.50}]
      }
    ];
  
setPriceList(priceList);

let price = getPrice(1, 15);
let price2 = getPrice(2, 202);
let price3 = getPrice(3, 80);
let price4 = getPrice(1, 500);

console.log(price);
console.log(price2);
console.log(price3);
console.log(price4);