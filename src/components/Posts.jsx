const Posts = () => {
  const posts = [
    {
      imgURL: "/assets/images/image-retro-pcs.jpg",
      num: "01",
      header: "Reviving Retro PCs",
      paragraph: "What happens when old pcs are given modern upgrades?",
    },
    {
      imgURL: "/assets/images/image-top-laptops.jpg",
      num: "02",
      header: "Top 10 Laptops of 2022",
      paragraph: "Our best picks for various needs and budgets",
    },
    {
      imgURL: "/assets/images/image-gaming-growth.jpg",
      num: "03",
      header: "The Growth of Gaming",
      paragraph: "How the pandemic has sparked fresh opportunities",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 padding lg:grid-cols-3">
      {posts.map((i) => (
        <div
          key={i}
          className="grid items-center grid-cols-2 place-items-start"
        >
          <img src={i.imgURL} alt={i.header} className="w-[10rem] h-[14rem]" />

          <div className="grid grid-cols-1 gap-5">
            <p className="text-5xl text-slate-400">{i.num}</p>

            <h1 className="text-[#00001a] text-lg font-semibold hover:text-[#f15e50] cursor-pointer">
              {i.header}
            </h1>

            <p className="leading-8 text-slate-400">{i.paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
