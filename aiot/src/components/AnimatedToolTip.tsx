"use client";
import React from "react";
import Rajab from "../../public/Rajab.jpeg"; // Local image import
import Arun from "../../public/arun.jpeg";
import Yagna from "../../public/YAGNA.jpeg";
import Sarvesh from "../../public/sarvesh.png";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Rajab Shoukath",
    designation: "Product Designer @personate.ai",
    image: Rajab.src,
  },
  {
    id: 2,
    name: "Arun Kumar",
    designation: "SDE @Morgan Stanley",
    image: Arun.src,
  },
  {
    id: 3,
    name: "Sarvesh P",
    designation: "SDE @Lowe's",
    image: Sarvesh.src,
  },
  {
    id: 4,
    name: "Yagna Kusumanchi",
    designation: "SDE @Morgan Stanley",
    image: Yagna.src,
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
