"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import CarTravel from "../../public/Car Travel Illustration.png";
import Translateimage from "../../public/Translation language icon.png";
export function WobbleComponent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-5xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Plan Your Trip Using AI{" "}
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            This application empowers users to plan their trips effortlessly
            using AI. By generating personalized travel itineraries, suggesting
            destinations, and optimizing travel routes, the app helps users
            explore new places while saving time and enhancing their overall
            travel experience.̉
          </p>
        </div>
        <Image
          src={CarTravel}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Trip Expense Tracker
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          The Trip Expense Tracker helps users easily manage and monitor their
          travel expenses. It allows users to log spending, categorize costs,
          set budgets, and track their financial progress throughout the trip,
          ensuring a stress-free and organized travel experience.{" "}
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Translate Speech
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            The Trip Speech Translator enables users to communicate effortlessly
            during their travels. It converts spoken language into text or audio
            in real-time, allowing travelers to break language barriers and
            interact seamlessly with locals, enhancing their travel experience.
          </p>
        </div>
        <Image
          src={Translateimage}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute md:-right-[10%] lg:-right-[5%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}