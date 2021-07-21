const Info = () => {
  return (
    <div className="relative bg-gray-900 font-body ">
      <div className="h-56  sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover "
          src="https://images.unsplash.com/photo-1506157786151-b8491531f063?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          alt=""
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-thin uppercase tracking-wider text-gray-600">
            About Let Go Records
          </h2>
          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
            Fast Forward your music career
          </p>
          <p className="mt-3 text-lg text-gray-300">
            Let Go Records Productions dedicated team of music professionals
            curated by us to ensure we maintain the highest quality of results
            and work. From music producers to A&R, we can handle your project
            from start to finish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
