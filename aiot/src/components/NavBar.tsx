import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="pt-12">
      <div className="flex items-center justify-between px-24">
        {/* Logo Div */}
        <div className="flex gap-2">
          <Image alt="Logo" src={"/favicon.svg"} height={34} width={35} />
          <h1 className="font-bold text-2xl">AIOT</h1>
        </div>

        {/* Nav Links */}
        <div className="flex gap-16 px-3 pl-20">
          <a href="">Home</a>
          <a href="">Saved Destinations</a>
          <a href="">Translate</a>
          <a href="">Forex</a>
        </div>

        {/* Auth */}
        <div className="flex gap-8 items-center">
          <h1 className="text-1 text-xl">Log In</h1>
          <button className="bg-1 text-xl font-light text-white px-7 py-1 rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
