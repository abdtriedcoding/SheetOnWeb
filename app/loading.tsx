const loading = () => {
  return (
    <div className="p-4">
      <div className="sm:flex sm:items-center animate-pulse pb-4">
        <div className="sm:flex-auto">
          <h1 className="bg-gray-200 h-6 w-1/2 mb-4"></h1>
          <p className="mt-2 bg-gray-300 h-4 w-3/4"></p>
        </div>
      </div>

      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="animate-pulse h-10 bg-gray-200 rounded mb-2"
        ></div>
      ))}
    </div>
  );
};

export default loading;
