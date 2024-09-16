import { SearchBar } from "@/components/SearchBar";
import { ExpandableCardDemo } from "@/components/ui/Expandable-Cards";
import { ArrowLeft, Translate as TranslateIcon } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

export default function TranslatePage() {
  return (
    <>
      <div className="min-h-screen flex justify-center bg-[#F3F3F3] mt-12">
        <div className=" md:w-[90vw]">
          <Link href="/">
            <div className="flex m-2 ml-0">
              <ArrowLeft size="24" color="#000" className="mr-2" />
              <p>Back</p>
            </div>
          </Link>
          <div className="items-center justify-center">
            <h1 className="font-gilroy text-[6vw] sm:text-[5vw] md:text-[5vw] lg:text-[6vw] font-normal leading-[1.2] sm:leading-[1.1] md:leading-[1] tracking-[-0.06em] text-center">
              Saved Destinations
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-center my-4">
              Explore and conveniently access all of your saved destinations
              right here, where you can view, manage, and navigate to your
              favorite places effortlessly
            </p>
          </div>
          <div className="mt-6">
            <ExpandableCardDemo />
          </div>
        </div>
      </div>
      <div> </div>
    </>
  );
}
