import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";
function ProductItem(props) {
  const navigate = useNavigate();
  const { item } = props;
  const dispatch = useDispatch();
  function handleNavigate() {
    navigate(`/product/${item.id}`);
  }
  function handleAddToCart() {
    dispatch(addToCart(item));
  }
  return (
    <div
      onClick={handleNavigate}
      className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
    >
      <img
        src={item.images[0]}
        alt={item.title}
        className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
        loading="lazy"
      />
      <p className="text-lg font-semibold text-gray-800">{item.title}</p>
      <p className="text-xl font-bold text-orange-600 mt-2">${item.price}</p>
      <p className="text-sm text-gray-500 mt-1">Rating: {item.rating}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition mt-3"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
