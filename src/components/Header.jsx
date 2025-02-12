import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";

const Header = () => {
  return (
    <div className="h-[80vh] w-[100vw] text-white bg-radial-[at_25%_25%] from-cyan-900 to-cyan-950 flex flex-col items-center">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
