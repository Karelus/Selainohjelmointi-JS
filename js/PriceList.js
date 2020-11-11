let priceList;

export function setPriceList(thePriceList) {

    priceList = thePriceList;

}

export function getPrice(itemID, quantity) {

    let currentItem = priceList.find(currentItem => currentItem.itemid == itemID);
    
    if (quantity < currentItem.prices[1]['qty']) {
        return (quantity * currentItem.prices[0]['price']);
    } else if (quantity < currentItem.prices[2]['qty']) {
        return (quantity * currentItem.prices[1]['price']);
    } else {
        return (quantity * currentItem.prices[2]['price']);
    }
}