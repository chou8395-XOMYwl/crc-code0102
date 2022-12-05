const config = require ('./dbConfig');
const sql = require('mssql');

const getOrders = async() => {
    try {
        let pool = await sql.connect(config);
        let orders = pool.request().query("SELECT * FROM OrderProduct")
    console.log(orders);
    return orders;
}
    catch(error) {
        console.log(error);
    }
}

const createOrder = async(Order) => {
    try {
        let pool = await sql.connect(config);
        let orders = pool.request()
        .query(`INSERT INTO OrderProduct VALUES
        (${Order.Id}, ${Order.CustomerOrderId}, ${Order.ProductId}, ${Order.Quantity})`)
    return orders;
}
    catch(error) {
        console.log(error);
    }
}


module.exports = {
    createOrder,
    getOrders
}