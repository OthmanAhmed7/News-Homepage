import "./index.css";
import { NavBar, MainHero, NewPosts, Posts } from "./components";

function App() {
  return (
    <>
      <main className="bg-[#fffdfa] max-w-[1440px] mx-auto">
        <NavBar />
        <section className="grid grid-cols-1 px-8 lg:gap-6 lg:grid-cols-3">
          <MainHero />
          <NewPosts />
        </section>
        <Posts />
      </main>
    </>
  );
}

export default App;
