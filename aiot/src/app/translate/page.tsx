"use client"
import { ArrowLeft, Translate as TranslateIcon } from "iconsax-react"; // Rename the imported Translate
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TranslatePage() {

  const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Italian",
    "Portuguese",
    "Dutch",
    "Russian",
    "Chinese (Simplified and Traditional)",
    "Japanese",
    "Korean",
    "Arabic",
    "Hindi",
    "Bengali",
    "Turkish",
    "Vietnamese",
    "Thai",
    "Greek",
    "Polish",
    "Swedish",
    "Norwegian",
    "Danish",
    "Finnish",
    "Hungarian",
    "Czech",
    "Romanian",
    "Hebrew",
    "Indonesian",
    "Malay",
    "Filipino",
    "Ukrainian",
    "Serbian",
    "Croatian",
    "Bulgarian",
    "Slovak",
    "Persian (Farsi)",
    "Urdu",
    "Swahili",
    "Tamil",
    "Telugu"
  ];

  const [fromLanguage, setFromLanguage] = useState(languages[0]);
  const [toLanguage, setToLanguage] = useState(languages[0]);

  const handleFromChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFromLanguage(event.target.value);
  };

  const handleToChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setToLanguage(event.target.value);
  };

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
            Translate
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-center my-4">
            The Trip Speech Translator enables users to communicate effortlessly
            during their travels. It converts spoken language into text or audio
            in real-time, allowing travelers to break language barriers and
            interact seamlessly with locals, enhancing their travel experience.{" "}
          </p>
        </div>
        <div className="flex justify-between items-center mt-12">
        <div className="flex">
            <div className="flex justify-left items-center p-4 pl-8 mr-2 w-[44.5vw] rounded-xl bg-white">
                <TranslateIcon
                    size="32"
                    color="#000"
                    width={50}
                    height={50}
                    className="mr-4"
                />
                <div className="">
                    <p className="text-gray-600 mx-auto text-left">From Language</p>
                    <select title="select_language" className="border-2 rounded-lg w-full p-2 text-left" onChange={(e) => setFromLanguage(e.target.value)}>
                        {languages.map((language, index) => (
                            <option key={index} value={language}>
                                {language}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="flex justify-left items-center p-4 pl-8 w-[44.5vw] rounded-xl bg-white">
                <TranslateIcon
                    size="32"
                    color="#A917FE"
                    width={50}
                    height={50}
                    className="mr-4"
                />
                <div className="">
                    <p className="text-gray-600 mx-auto text-left">To Language</p>
                    <select title="select_language" className="border-2 rounded-lg w-full p-2 text-left" onChange={(e) => setToLanguage(e.target.value)}>
                        {languages.map((language, index) => (
                            <option key={index} value={language}>
                                {language}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
        </div>
        <div className="flex justify-between items-center my-4 mb-14">
          <div className="flex-col justify-center items-center p-4 mr-2 w-[44.5vw]  rounded-xl bg-white">
            <textarea
              placeholder="Type here..."
              className="border-2 w-[95%] rounded-lg p-4 text-left flex-wrap h-[40vh]"
            />
            <button className="bg-gradient-to-r from-[#A917FE] to-[#6C83FF] hover:opacity-80 text-white font-bold h-12 px-16 rounded-full m-4 ml-[70%]">
              Translate
            </button>
          </div>
          <div className="flex justify-center items-center p-4 mr-2 w-[44.5vw] rounded-xl bg-white">
              <p className="border-2 w-[40vw]  h-[50vh] rounded-lg p-4 text-left flex-wrap">converting {fromLanguage} to {toLanguage}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
