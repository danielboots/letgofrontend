const Info = () => {
  return (
    <div className="relative bg-gray-900 font-body ">
      <div className="h-56  sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover "
          src="/images/head3.webp"
          alt=""
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-thin uppercase tracking-wider text-gray-600">
            About Let Go Records
          </h2>
          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
            For the love of Music
          </p>
          <p className="mt-3 text-lg text-gray-300">
            Let Go Records - Our philosophy is to only release quality music
            from artists who are pushing boundaries in the music industry! We
            love to hear from you so if you think you fit this criteria, we want
            you to get intouch!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
