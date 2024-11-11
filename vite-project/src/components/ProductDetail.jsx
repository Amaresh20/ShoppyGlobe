import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../utils/useFetchData";
import { useNavigate } from "react-router-dom";
function ProductDetail() {
  const [showAllDetails, setShowAllDetails] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const fetchData = await useFetchData(
          `https://dummyjson.com/products/${id}`
        );
        setShowAllDetails(fetchData);
      } catch (error) {
        setError(error);
        console.log("err", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProductDetails();
  }, [id]); // Re-fetch if the id changes

  if (loading) {
    return (
      <p className="text-center text-2xl font-semibold text-black">
        Loading....
      </p>
    );
  }
  function handleNavigate() {
    navigate("/");
  }
  return (
    <>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="product-detail-container p-5 bg-gray-100 rounded-lg shadow-lg max-w-3xl mx-auto mt-5">
        <div className="flex flex-col items-center">
          <img
            src={showAllDetails?.images?.[0]}
            alt={showAllDetails.title}
            className="w-full h-80 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
            {showAllDetails.title}
          </h2>
          <p className="text-lg font-bold text-green-600 mb-4">
            ${showAllDetails.price}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Category: {showAllDetails.category}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Brand: {showAllDetails.brand}
          </p>
          <div className="text-sm text-gray-700 mb-4">
            <p>{showAllDetails.description}</p>
          </div>
          <button
            className="border-2 bg-blue-500 text-white p-3 rounded-md "
            onClick={() => handleNavigate()}
          >
            Back to Home page
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
