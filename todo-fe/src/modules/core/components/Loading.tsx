const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="mb-8">
        <div className="w-16 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
      </div>
      <h1 className="text-2xl font-bold mb-4">Loading...</h1>
      <p className="text-sm">Please wait while we prepare your content</p>
    </div>
  );
};

export default LoadingPage;
