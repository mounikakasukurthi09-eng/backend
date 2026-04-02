const Order = require("../models/order");
const Product = require("../models/product");
const User = require("../models/User");

exports.getOrders = async (req, res) => {
  const orders = await Order.find().populate("productId");
  res.json(orders);
};

exports.createOrder = async (req, res) => {
  const { productId, quantity, customerName } = req.body;

  const product = await Product.findById(productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  const order = await Order.create({
    productId,
    quantity,
    customerName,
  });

  res.json(order);
};

exports.updateOrder = async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  res.json(order);
};