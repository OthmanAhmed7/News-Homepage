const MainHero = () => {
  return (
    <section className="col-span-2 pb-8">
      <img
        className="hidden md:block"
        src="/assets/images/image-web-3-desktop.jpg"
        alt="hero img"
      />

      <img
        className="block md:hidden"
        src="/assets/images/image-web-3-mobile.jpg"
        alt="hero img"
      />

      <div className="grid grid-cols-1 md:grid-cols-2">
        <h1 className="text-6xl font-bold text-[#00001a] my-6">
          The Bright Future of Web 3.0
        </h1>

        <div className="grid justify-between grid-cols-1 md:my-6">
          <p className="text-slate-600">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of people. But is it
            really fulfilling its promise?
          </p>

          <button className="w-40 py-3 font-semibold tracking-widest uppercase hover:bg-[#00001a] bg-btn text-white mt-6 text-sm">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
