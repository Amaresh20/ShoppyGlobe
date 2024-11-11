import { useState, useEffect } from "react";
import useFetchData from "../utils/useFetchData";
import ProductItem from "./ProductItem";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchData = await useFetchData("https://dummyjson.com/products");
        setProducts(fetchData.products);
      } catch (error) {
        setError("Failed to fetch data");
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <p className="text-center font-semibold text-2xl text-gray-600">
        Loading...
      </p>
    );
  }

  return (
    <>
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Search Input */}
      <div className="text-center p-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a product..."
          className="border border-gray-300 rounded-md p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-screen-xl mx-auto">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductItem key={product.id} item={product} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No products found for "{searchQuery}"
          </p>
        )}
      </div>
    </>
  );
}

export default ProductList;
