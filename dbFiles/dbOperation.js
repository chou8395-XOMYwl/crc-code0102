const config = require ('./dbConfig');
const sql = require('mssql');

const getOrders = async(customerorderid) => {
    try {
        let pool = await sql.connect(config);
        let orders = await pool.request().query(`SELECT * FROM OrderProduct WHERE CustomerOrderId = ${customerorderid}`)
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
        let orders = await pool.request()
        .query(`INSERT INTO OrderProduct VALUES
        (${Order.CustomerOrderId}, ${Order.ProductId}, ${Order.Quantity}, ${Order.Rating})`)
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