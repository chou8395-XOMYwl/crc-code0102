class Order {
    constructor(CustomerOrderId, ProductId, Quantity, Rating){
    //this.Id = Id;
    this.CustomerOrderId = CustomerOrderId;
    this.ProductId = ProductId;
    this.Quantity = Quantity;
    this.Rating = Rating;
}
}

module.exports = Order;