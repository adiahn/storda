import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";

const Header = () => {
  return (
    <div className="min-h-[90vh] w-full max-w-screen text-white bg-radial-[at_25%_25%] from-cyan-950 to-black flex flex-col items-center relative overflow-x-hidden px-1 sm:px-1 lg:px-4">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
