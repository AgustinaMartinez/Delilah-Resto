import Order from '../models/orders.model';

export const getOrders = async (req, res) => {
    const orders = await Order.find();
    res.status(200).json(orders);
}

export const createOrder = async (req, res) => {
    const {idUser, idProduct, status} = req.body;
    const newOrder = new Order({idUser, idProduct, status});
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
}

export const getOrderByID = async (req, res) => {
    const order = await Order.findById(req.params.id);
    res.status(200).json(order);
}

export const updateOrderByID = async (req, res) => {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(200).json(updatedOrder);
}

export const deleteOrderByID = async (req, res) => {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "The order was deleted successfully."});
}
