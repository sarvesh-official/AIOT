import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="pt-12">
      <div className="flex items-center justify-between px-24">
        {/* Logo Div */}
        <Link href={"/"}>
          <div className="flex gap-2">
            <Image alt="Logo" src={"/favicon.svg"} height={34} width={35} />
            <h1 className="font-bold text-2xl">AIOT</h1>
          </div>
        </Link>

        {/* Nav Links */}
        <div className="flex gap-16 px-3 pl-20">
          <Link href="/">Home</Link>
          <Link href="">Saved Destinations</Link>
          <Link href="/translate">Translate</Link>
          <Link href="">Forex</Link>
        </div>

        {/* Auth */}
        <div className="flex gap-5 items-center">
          <h1 className="text-1 text-l">Log In</h1>
          <button className="bg-1 text-l font-light text-white px-4 py-1 rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
