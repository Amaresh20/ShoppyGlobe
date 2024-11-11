import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function Header() {
  const addToCartCount = useSelector((store) => store.cart.items.length);

  return (
    <header className="border-b-2 shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 sm:p-6 lg:px-10 flex justify-between items-center">
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-wide">
          ShoppyGlobe
        </h1>
      </div>
      <nav className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 text-white">
        <ul className="flex space-x-4 sm:space-x-6 md:space-x-8 text-sm sm:text-base lg:text-lg font-semibold">
          <li className="hover:scale-105 transition duration-200 ease-in-out cursor-pointer">
            <Link to="/">Home</Link>
          </li>

          <li className="hover:scale-105 transition duration-200 ease-in-out cursor-pointer">
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
        <Link
          to="/cart"
          className="relative hover:scale-105 transition duration-200 ease-in-out cursor-pointer"
        >
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="text-xl sm:text-2xl lg:text-3xl"
          />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {addToCartCount}
          </span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
