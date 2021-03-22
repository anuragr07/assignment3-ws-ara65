var cart = [];

exports.getCartAra65 = function(req, res){
    console.log(`Cart controller running: Get cart`);

    res.header("Content-Type: application/json");
    res.send(cart);
}

exports.addItemAra65 = function(req, res){

    const newItem = {
        sku: req.body.sku,
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity
    }
    
    // This flag checks if the item has been added already or not
    var flag = true;

    if(cart.length === 0){
        newItem.quantity = 1;
        cart.push(newItem);
        flag = false;
    }
    else if(cart.length !== 0){
        cart.forEach((item, index) => {
            if(item.sku === newItem.sku){
                item.quantity = item.quantity + 1;
                flag = false; 
            }
        });
    }

    // To push a new item to the cart
    if(flag){
        newItem.quantity = 1;
        cart.push(newItem);
    }
    
    res.header("Content-Type: application/json");
    res.send(cart);
}

exports.removeItemAra65 = function(req, res){
    newCart = cart.filter(item => item.sku !== req.body.id);
    cart = newCart;

    res.header("Content-Type: application/json");
    res.send(cart);
}

exports.checkout = function(req, res){
    cart = [];
    res.header("Content-Type: application/json");
    res.send(cart);
}