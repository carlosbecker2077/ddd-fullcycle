import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/orderItem";

let customer = new Customer("123", "John Birdman");
const address = new Address("Rua 2", 230, "01230123-12", "San Paolo");
customer.Address = address;
customer.validate();

const item1 = new OrderItem("1", "item 1", 10);
const item2 = new OrderItem("2", "item 2", 15);

const order = new Order("1", customer._id, [item1, item2])