// Cart.js
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  clearCart,
} from "../utils/cartSlice";
import CartItem from "./CartItem";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {cartItems.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-gray-700">
            Shopping Cart
          </h2>
          <div className="grid gap-4 mb-8">
            {cartItems.map((cart) => (
              <CartItem
                key={cart.id}
                cart={cart}
                onIncrease={(id) => dispatch(increaseQuantity(id))}
                onDecrease={(id) => dispatch(decreaseQuantity(id))}
                onRemove={(id) => dispatch(removeFromCart(id))}
              />
            ))}
          </div>
          <div className="flex justify-between items-center border-t pt-4 mt-6">
            <p className="text-xl font-bold text-gray-800">
              Total Price: ${totalPrice}
            </p>
            <button
              onClick={() => dispatch(clearCart())}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Clear Cart
            </button>
          </div>
        </>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-gray-600">Your cart is empty.</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
