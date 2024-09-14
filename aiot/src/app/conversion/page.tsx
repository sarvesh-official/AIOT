"use client";
import { ArrowLeft, Coin1 } from "iconsax-react";
import { Translate as TranslateIcon } from "iconsax-react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import React from "react";
const page = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen flex justify-center bg-[#F3F3F3] mt-12">
        <div className="w-full md:w-[90vw]">
          {/* give here link to "/" */}
          <Link href={"/"}>
            <div className="flex m-2 ml-0">
              <ArrowLeft size="24" color="#000" className="mr-2" />
              <p>Back</p>
            </div>
          </Link>
          <div className="items-center justify-center">
            <h1 className="font-gilroy text-[6vw] sm:text-[5vw] md:text-[5vw] lg:text-[6vw] font-normal leading-[1.2] sm:leading-[1.1] md:leading-[1] tracking-[-0.06em] text-center">
              Currency Exchange
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-center my-4">
              The Trip Currency Converter enables users to handle foreign
              transactions effortlessly during their travels. It converts
              different currencies in real-time, allowing travelers to easily
              understand local prices, make informed spending decisions, and
            </p>
          </div>
          <div className="flex justify-between items-center mt-12">
            <div className="flex justify-left items-center p-4 pl-8 mr-2 w-[44.5vw] rounded-xl bg-white">
              <Coin1
                size="32"
                color="#000"
                width={50}
                height={50}
                className="mr-4"
              />{" "}
              {/* Use renamed icon */}
              <div className="">
                <p className="text-gray-600 mx-auto text-left">From</p>
                <p className="font-gilroy text-black text-[1.2vw] normal-case leading-normal tracking-[-1px] -mt-1">
                  Dollars{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-left items-center p-4 pl-8 mr-2 w-[44.5vw] rounded-xl bg-white">
              <Coin1
                size="32"
                color="#000"
                width={50}
                height={50}
                className="mr-4"
              />{" "}
              {/* Use renamed icon */}
              <div className="">
                <p className="text-gray-600 mx-auto text-left">To</p>
                <p className="font-gilroy text-black text-[1.2vw] normal-case leading-normal tracking-[-1px] -mt-1">
                  Riyals{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center my-4 mb-14">
            <div className="flex-col justify-center items-center p-4 mr-2 w-[44.5vw]  rounded-xl bg-white">
              <textarea
                placeholder="0.00"
                typeof="num"
                className="border-2 w-[95%] text-[8vw] rounded-lg p-4 text-left flex-wrap h-[40vh]"
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.value = target.value.replace(/[^0-9.]/g, "");
                }}
              />
              <button className="bg-gradient-to-r from-[#A917FE] to-[#6C83FF] hover:opacity-80 text-white font-bold h-12 px-12 rounded-full m-4 ml-[70%]">
                Convert
              </button>
            </div>
            <div className="flex justify-center items-center p-4 mr-2 w-[44.5vw] rounded-xl bg-white">
              <div className="border-2 w-[95%] h-[50vh] rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
