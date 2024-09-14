"use client";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, useAuth } from "@clerk/nextjs";
import { SignedOut, UserButton, UserProfile } from "@clerk/clerk-react";

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
          <Link href="/conversion">Forex</Link>
        </div>

        {/* Auth */}
        <SignedIn>
          <div className="flex rounded-full items-center px-16">
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: "38px",
                    height: "38px",
                  },
                },
              }}
            />
          </div>
        </SignedIn>
        <SignedOut>
          <div className="flex items-center gap-5">
            <Link className="text-1 text-l" href={"/sign-in"}>
              Log In
            </Link>
            <Link href={"/sign-up"}>
              <button className="bg-1 text-l font-light text-white px-4 py-1 rounded-full">
                Sign Up
              </button>
            </Link>
          </div>
        </SignedOut>
      </div>
    </nav>
  );
};

export default NavBar;
