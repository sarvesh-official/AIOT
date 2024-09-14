"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#A917FE] dark:bg-slate-800/[0.8 block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-transparent dark:border-[#A917FE] group-hover:border-[#A917FE] relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-black font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-black tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
export const projects = [
  {
    title: "Flight Agent",
    description:
      "Flight Tracker API is a service that allows users to access real-time data on flights worldwide. It provides detailed information such as flight status, departure and arrival times, flight paths, and delays. The API is commonly used by travel apps, airlines, and logistics companies to track flights and provide up-to-date travel information to customers.",
    link: "https://app.on-demand.io/playground",
  },
  {
    title: "Google Translate",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://app.on-demand.io/playground",
  },
  {
    title: "Trip Advisor",
    description:
      "Online travel plugin that offers online hotel reservations and bookings for transportation, lodging, travel experiences, and restaurants. It also offers a comparison shopping feature.",
    link: "https://app.on-demand.io/playground",
  },
  {
    title: "Currency Exchange",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://app.on-demand.io/playground",
  },
  {
    title: "Train Agent",
    description:
      "Train Agent Tracker is an API that offers real-time tracking of trains, providing key data such as train schedules, current locations, delays, and platform information. It allows railway operators, logistics companies, and passengers to monitor train movements and stay updated on service status, ensuring efficient and informed travel planning",
    link: "https://app.on-demand.io/playground",
  },
  {
    title: "Trip Expense Tracker Agent",
    description:
      "Trip Expense Tracker Agent is an API designed to help users monitor and manage their travel expenses in real time. It tracks spending across various categories such as transportation, accommodation, food, and activities, offering a detailed breakdown of costs. The API enables seamless budgeting for travelers, ensuring they stay on top of their financials throughout the trip.",
    link: "https://app.on-demand.io/playground",
  },
];
export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
