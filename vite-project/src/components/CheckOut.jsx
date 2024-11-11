import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    paymentMethod: "creditCard",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", formData);

    navigate("/");
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6 bg-gray-100">
      <h2 className="text-2xl font-semibold text-center mb-6">Checkout</h2>

      {/* Order Summary Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-3 p-3 border-b"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <p className="text-lg font-medium">{item.title}</p>
                  <p className="text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
              <p className="text-lg font-semibold">
                ${item.price * item.quantity}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
        <div className="text-lg font-semibold text-right pt-4">
          Total Price: ${totalPrice.toFixed(2)}
        </div>
      </div>

      {/* Billing Details Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold mb-4">Billing Details</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="address" className="text-sm font-medium">
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="payment" className="text-sm font-medium">
                Payment Method
              </label>
              <select
                id="payment"
                name="paymentMethod"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={formData.paymentMethod}
                onChange={handleChange}
                required
              >
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="cashOnDelivery">Cash on Delivery</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
            >
              Complete Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
