"use client";
import { ArrowLeft, Coin1 } from "iconsax-react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface CurrencyResponse {
  [key: string]: string;
}
const CurrencyConverterPage = () => {
  const [currencies, setCurrencies] = useState<any>({});
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("sar");
  const [amount, setAmount] = useState("");
  const [conversionResult, setConversionResult] = useState<string | null>(null);

  // Fetch available currencies
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(
          "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
        );
        const data = await response.json();
        setCurrencies(data);
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    };
    fetchCurrencies();
  }, []);

  // Handle conversion
  const handleConvert = async () => {
    try {
      const response = await fetch("https://aiot-backend.vercel.app/convert", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        // Sending query parameters
        body: JSON.stringify({
          from: fromCurrency,
          to: toCurrency,
          amount: amount,
        }),
      });

      const data = await response.json();
      setConversionResult(data.result);
    } catch (error) {
      console.error("Error during conversion:", error);
    }
  };

  return (
    <>
      <NavBar />
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
              Currency Exchange
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-center my-4">
              The Trip Currency Converter enables users to handle foreign
              transactions effortlessly during their travels.
            </p>
          </div>
          <div className="flex justify-between items-center mt-12">
            <div className="flex justify-left items-center p-4 pl-8 mr-2 w-[44.5vw] rounded-xl bg-white">
              <Coin1 size="32" color="#000" className="mr-4" />
              <div>
                <p className="text-gray-600 mx-auto text-left">From</p>
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="font-gilroy text-black text-[1.2vw] normal-case leading-normal tracking-[-1px] -mt-1"
                >
                  {Object.entries(currencies).map(([code, name]) => (
                    <option key={code} value={code}>
                      {name as string} ({code.toUpperCase()})
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-left items-center p-4 pl-8 mr-2 w-[44.5vw] rounded-xl bg-white">
              <Coin1 size="32" color="#000" className="mr-4" />
              <div>
                <p className="text-gray-600 mx-auto text-left">To</p>
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="font-gilroy text-black text-[1.2vw] normal-case leading-normal tracking-[-1px] -mt-1"
                >
                  {Object.entries(currencies).map(([code, name]) => (
                    <option key={code} value={code}>
                      {name as string} ({code.toUpperCase()})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center my-4 mb-14">
            <div className="flex-col justify-center items-center p-4 mr-2 w-[44.5vw] rounded-xl bg-white">
              <textarea
                placeholder="0.00"
                typeof="num"
                className="border-2 w-[95%] text-[8vw] rounded-lg p-4 text-left flex-wrap h-[40vh]"
                value={amount}
                onInput={(e) =>
                  setAmount(
                    e.currentTarget.value.replace(/[^0-9.]/g, "") +
                      " " +
                      fromCurrency.toUpperCase()
                  )
                }
              />
              <button
                onClick={handleConvert}
                className="bg-gradient-to-r from-[#A917FE] to-[#6C83FF] hover:opacity-80 text-white font-bold h-12 px-12 rounded-full m-4 ml-[70%]"
              >
                Convert
              </button>
            </div>
            <div className="flex justify-center items-center p-4 mr-2 w-[44.5vw] rounded-xl bg-white">
              <div className="border-2 w-[95%] h-[50vh] rounded-lg">
                {conversionResult && (
                  <div className="text-black mt-4 text-[6vw]">
                    {conversionResult} {toCurrency.toUpperCase()}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrencyConverterPage;
