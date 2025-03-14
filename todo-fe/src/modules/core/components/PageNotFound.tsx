import { AlertTriangle } from "lucide-react";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-[100dvh] bg-gray-900">
      <div className="text-center">
        <AlertTriangle className="mx-auto h-16 w-16 text-yellow-500 mb-4" />
        <h1 className="text-4xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-400 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <a
          href="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
