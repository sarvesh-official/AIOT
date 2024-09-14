"use client";

import React, { useState } from "react";

import axios from "axios";

import { ArrowLeft, Clock, DollarCircle, Sun1 } from "iconsax-react";
import Image from "next/image";
import Malaysia from "../../../assets/Malaysia images 1.png";
import Link from "next/link";

interface FlightSearchParams {
    sourceAirportCode: string;
    destinationAirportCode: string;
    date: string;
    itineraryType?: string;
    sortOrder?: string;
    numAdults?: number;
    numSeniors?: number;
    classOfService?: string;
    pageNumber?: number;
    nearby?: string;
    nonstop?: string;
    currencyCode?: string;
    region?: string;
  }

export default function Trip() {

  const [data, setData] = useState([]);

  // Function to get flight search results
  const fetchFlights = async(params: FlightSearchParams)  => {
    try {
      const response = await axios.get(`${process.env.NEXT_DEPLOYED_LINK}/api/search/flights`, { params });
      console.log(`${process.env.NEXT_DEPLOYED_LINK}/api/search/flights`)
      return response.data; // Return the data from the response
    } catch (error) {
      // Handle the error
      console.error("Error fetching flights:", error);
      throw error; // Re-throw the error if you want to handle it further up the chain
    }
  }

  // Example usage of fetchFlights function
  async function searchFlights() {
    const searchParams = {
      sourceAirportCode: "BOM",
      destinationAirportCode: "DEL",
      date: "2024-09-14",
    };

    try {
      const fetchData = await fetchFlights(searchParams);
      setData(fetchData)
      console.log("Flight search results:", data);
    } catch (error) {
      console.error("Error in searchFlights function:", error);
    }
  }

  searchFlights();
    
  return (
    <div className="min-h-screen flex justify-center bg-[#F3F3F3] mt-12">
      <div className="w-full md:w-[90vw]">
        <Link href={"/"}>
          <div className="flex m-2 ml-0">
            <ArrowLeft size="24" color="#000" className="mr-2" />
            <p>Back</p>
          </div>
        </Link>
        <div className="items-center justify-center">
          <h1 className="font-gilroy text-[6vw] sm:text-[5vw] md:text-[5vw] lg:text-[6vw] font-normal leading-[1.2] sm:leading-[1.1] md:leading-[1] tracking-[-0.06em] text-center">
            Malaysia
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-center my-4">
            Malaysia is a Southeast Asian country occupying parts of the Malay
            Peninsula and the island of Borneo. It's known for its beaches,
            rainforests, and a mix of Malay, Chinese, Indian, and European
            cultural influences.
          </p>
          <div className="flex justify-center items-center">
            <button className="bg-transparent hover:opacity-80 text-[#A917FE] border-[1px] border-[#A917FE] font-light h-12 px-10 rounded-full m-4">
              Regenerate
            </button>
            <button className="bg-gradient-to-r from-[#A917FE] to-[#6C83FF] hover:opacity-80 text-white font-light h-12 px-11 rounded-full m-4">
              Save Trip
            </button>
          </div>

          <div className="flex justify-between items-center mt-2">
            <div className="flex justify-left items-center p-6 mr-2 w-[24vw] rounded-xl bg-white">
              <Image
                src={Malaysia}
                alt="Malaysia"
                width={50}
                height={50}
                className="mr-4"
              />
              <div className="">
                <p className="text-gray-600 mx-auto text-left">capital</p>
                <p className="font-gilroy text-black text-[1.5vw] normal-case leading-normal tracking-[-1px] -mt-1">
                  Kuala Lumpur
                </p>
              </div>
            </div>
            <div className="flex justify-left items-center p-6  mr-2 w-[20vw] rounded-xl bg-white">
              <Clock size="32" color="#000" className="mx-4" />
              <div className="">
                <p className="text-gray-600 mx-auto text-left">Time</p>
                <p className="font-gilroy text-black text-[1.5vw] normal-case leading-normal tracking-[-1px] -mt-1">
                  20:45
                </p>
              </div>
            </div>
            <div className="flex justify-left items-center p-6  mr-2 w-[17.5vw] rounded-xl bg-white">
              <DollarCircle size="32" color="#000" className="mx-4" />
              <div className="">
                <p className="text-gray-600 mx-auto text-left">1 Dollar</p>
                <p className="font-gilroy text-black text-[1.5vw] normal-case leading-normal tracking-[-1px] -mt-1">
                  82 Rupees
                </p>
              </div>
            </div>
            <div className="flex justify-left items-center p-6 rounded-xl bg-gradient-to-r from-[#6AE3FE] to-[#88B6E8] text-white w-[26.5vw]">
              <h1 className="font-gilroy text-[2vw] font-800 mx-2">27° C</h1>
              <div className="mx-2">
                <p className="text-gray-100 mx-auto text-sm text-center">
                  Tuesday, 13 September
                </p>
                <p>Kuala Lampur, Malaysia</p>
              </div>
              <Sun1 size="32" color="#fff" className="mx-4" />
            </div>
          </div>
          <div className="flex items-center justify-between w-[90vw] py-4">
            <div className="bg-white shadow-lg rounded-lg p-6 w-[44.5vw]">
              <h2 className="font-gilroy text-black text-[2vw] normal-case leading-normal mb-4">
                Suggested Flight
              </h2>
              <div className="m-4">
                {arr.map((fl, i) => {
                  return (
                    <div className="flex  justify-between items-center">
                      <div className="text-center m-2">
                        <p>{fl.start}</p>
                        <p>{fl.startTime}</p>
                      </div>
                      <div className="grow border-b border-gray-400 m-4"></div>
                      <p>{fl.TotalTime}</p>
                      <div className="grow border-b border-gray-400 m-4"></div>
                      <div className="text-center m-2">
                        <p>{fl.end}</p>
                        <p>{fl.endTime}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 w-[44.5vw]">
              <h2 className="font-gilroy text-black text-[2vw] normal-case leading-normal mb-4">
                Trains
              </h2>
              <div className="m-4">
                {arr.map((fl, i) => {
                  return (
                    <div className="flex  justify-between items-center">
                      <div className="text-center m-2">
                        <p>{fl.start}</p>
                        <p>{fl.startTime}</p>
                      </div>
                      <div className="grow border-b border-gray-400 m-4"></div>
                      <p>{fl.TotalTime}</p>
                      <div className="grow border-b border-gray-400 m-4"></div>
                      <div className="text-center m-2">
                        <p>{fl.end}</p>
                        <p>{fl.endTime}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
