"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function AnimatedModal({ children }: { children: React.ReactNode }) {
  const [date, setDate] = React.useState<Date | null>(null);
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const router = useRouter();

  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const handleDateChange = (selectedDate: Date | null) => {
    setDate(selectedDate);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Check the date value
    console.log("Selected Date:", date);

    const formattedDate = date ? format(date, "dd-MM-yyyy") : "";
    console.log("Formatted Date:", formattedDate);

    // Ensure from and to fields are not empty before pushing
    if (from && to && formattedDate) {
      router.push(
        `/trip?from=${encodeURIComponent(from)}&to=${encodeURIComponent(
          to
        )}&date=${formattedDate}`
      );
    } else {
      // Show a toast or alert if any field is empty
      toast.error("Please fill in all fields.");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="mt-0">{children}</ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Plan your trip with{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                AIOT ✈️
              </span>{" "}
            </h4>
            <div className="flex justify-center items-center">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <Input
                type="text"
                placeholder="From"
                onChange={(e) => setFrom(e.target.value)}
              />
              <Input
                type="text"
                placeholder="To"
                onChange={(e) => setTo(e.target.value)}
              />
              {/* Date Picker */}
              <div className="w-full flex items-center gap-2">
                <DatePicker
                  selected={date}
                  onChange={handleDateChange}
                  dateFormat="dd-MM-yyyy"
                  placeholderText="Select Date"
                  className="w-full px-4 py-2 text-sm border border-neutral-300 rounded-md focus:outline-none"
                />
                {date && (
                  <p className="text-sm text-neutral-500">
                    Selected Date: {format(date, "dd-MM-yyyy")}
                  </p>
                )}
              </div>
            </div>
          </ModalContent>
          <ModalFooter className="flex gap-4 items-center">
            <button
              onClick={handleSubmit}
              className="bg-black text-white text-sm px-2 py-3 rounded-lg border border-black w-28"
            >
              Generate
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
      <ToastContainer />
    </div>
  );
}
