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
    }
    ];

let price = getPrice(2, 1000);

function getPrice(itemID, quantity) {

    let currentItem = priceList.find(currentItem => currentItem.itemid == itemID);
    
    if (quantity < currentItem.prices[1]['qty']) {
        console.log(quantity * currentItem.prices[0]['price']);
    } else if (quantity < currentItem.prices[2]['qty']) {
        console.log(quantity * currentItem.prices[1]['price']);
    } else {
        console.log(quantity * currentItem.prices[2]['price']);
    }
}