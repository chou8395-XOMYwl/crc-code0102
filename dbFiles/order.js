class Order {
    constructor(Id, CustomerOrderId, ProductId, Quantity){
    this.Id = Id;
    this.CustomerOrderId = CustomerOrderId;
    this.ProductId = ProductId;
    this.Quantity = Quantity;
}
}

module.exports = Order;