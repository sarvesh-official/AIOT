"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function SearchBar({
  onSearchResult,
}: {
  onSearchResult: (data: any) => void;
}) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<any>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const placeholders = [
    "Search For Services",
    "Available Flights",
    "Currency Conversion",
    "Shopping",
    "Food",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setModalOpen(true);

    try {
      const response = await fetch("https://aiot-backend.vercel.app/search", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      if (response.ok) {
        const data = await response.json();

        const cleanedAnswer = data.response.data.answer
          .replace(/^```json/, "")
          .replace(/```$/, "");

        const jsonData = JSON.parse(cleanedAnswer);

        setSearchResult(jsonData);
        onSearchResult(jsonData);
      } else {
        console.error("Error fetching search results");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setSearchResult(null);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Trip Plan", 10, 10);

    if (searchResult) {
      const tripPlan = searchResult.trip_plan;
      let y = 20;
      doc.setFontSize(12);

      tripPlan.itinerary.forEach((item: any) => {
        doc.setFontSize(14);
        doc.text(`Day ${item.day}:`, 10, y);
        y += 10;

        doc.setFontSize(12);
        item.activities.forEach((activity: string, index: number) => {
          doc.text(`- ${activity}`, 10, y);
          y += 10;
        });

        y += 10;
      });

      doc.save("trip_plan.pdf");
    }
  };

  return (
    <>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 rounded-lg shadow-lg w-full max-w-3xl mx-4 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 text-black rounded-full"
            >
              X
            </button>
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                Your Trip Plan! ✈️
              </h4>
              <div className="flex justify-center items-center flex-wrap gap-4">
                {loading ? (
                  <div className="w-full text-center py-8">Loading...</div>
                ) : searchResult ? (
                  <div className="w-full">
                    {searchResult.trip_plan.itinerary.map(
                      (day: any, index: number) => (
                        <div key={index} className="border p-4 mb-4 rounded-md">
                          <h1 className="text-xl font-bold">Day {day.day}</h1>
                          <ul>
                            {day.activities.map(
                              (activity: string, idx: number) => (
                                <li key={idx}>- {activity}</li>
                              )
                            )}
                          </ul>
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <div className="w-full text-center py-8">
                    No results found.
                  </div>
                )}
              </div>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-neutral-700 border-t border-neutral-200 dark:border-neutral-600">
              <button
                onClick={downloadPDF}
                className="w-full px-4 py-2 bg-1 text-white rounded-md hover:bg-1"
              >
                Download as PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
