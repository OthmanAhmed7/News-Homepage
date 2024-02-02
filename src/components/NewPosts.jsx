import { newPosts } from "../constants/data";

const NewPosts = () => {
  return (
    <section className="bg-[#00001a] px-6 pt-6 pb-3 text-2xl font-semibold w-[100%]">
      <h1 className="text-[#e9ab53] text-4xl">New</h1>
      <div className="mt-6 divide-y">
        {newPosts.map((i) => (
          <div key={i}>
            <h1 className="mt-3 text-2xl text-white hover:text-[#e9ab53] cursor-pointer">
              {i.header}
            </h1>

            <p className="mt-3 mb-3 text-lg text-slate-400">{i.paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewPosts;
