// CartItem.js
function CartItem({ cart, onIncrease, onDecrease, onRemove }) {
  return (
    <div
      key={cart.id}
      className="flex items-center bg-white p-4 rounded-lg shadow-md"
    >
      <img
        className="w-32 h-32 object-cover rounded-md"
        src={cart.images[0]}
        alt={cart.title}
      />
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{cart.title}</h3>
        <p className="text-gray-600 mt-1">Rating: {cart.rating}</p>
        <p className="text-blue-600 font-semibold mt-2">
          ${cart.price * cart.quantity}
        </p>
        <div className="flex items-center mt-2 space-x-4">
          <button
            onClick={() => onDecrease(cart.id)}
            className="px-2 py-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
          >
            -
          </button>
          <span className="text-gray-700">{cart.quantity}</span>
          <button
            onClick={() => onIncrease(cart.id)}
            className="px-2 py-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
          >
            +
          </button>
          <button
            onClick={() => onRemove(cart.id)}
            className="ml-4 text-red-600 hover:underline"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
