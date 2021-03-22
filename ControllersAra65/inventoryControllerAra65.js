const axios = require('axios')
var inventory = [];

exports.getInventory = async function(req, res) {
    
    if(inventory.length === 0){
        
        // URL of the sattic file inventory
        const URL = "http://localhost:8000/static/inventory.json";
        
        console.log(`Inventory Controller running: Get Inventory`);
        async function fetchData(){
            const response = await axios(URL);
            inventory = await response.data;    
            
            res.header("Content-Type: application/json");
            res.send(inventory);
        }

        await fetchData();
    }
    else{
        res.header("Content-Type: application/json");
        res.send(inventory);
    }
    
}

exports.updateInventory = async function(req, res){

    const cart = req.body;

    const newInventory = await inventory.map(item => {
        cart.forEach((cartItem) => {
            if(item.sku === cartItem.sku){
                item.quantity = item.quantity - cartItem.quantity;
            }
        })

        return item;
    })

    inventory = newInventory;

    console.log(newInventory);

    res.header("Content-Type: application/json");
    res.send(newInventory);
}

