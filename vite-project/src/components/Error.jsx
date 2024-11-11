import { useRouteError, Link } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log("error", error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 text-center max-w-md">
        <h1 className="text-5xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-gray-700 text-lg mb-6">
          Sorry, something went wrong.
        </p>
        <p className="text-gray-500 text-base">
          <span className="font-semibold">Error {error.status}:</span>{" "}
          {error.data}
        </p>

        <div className="flex justify-center space-x-4 mt-8">
          <Link
            to="/"
            className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-400 transition duration-200"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
