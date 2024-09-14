import { ExpandableCardDemo } from "@/components/ui/Expandable-Cards";
import { ArrowLeft, Translate as TranslateIcon } from "iconsax-react"; // Rename the imported Translate
import Image from "next/image";

export default function TranslatePage() { // Rename the local component
    return (
        <>
            <div className="min-h-screen flex justify-center bg-[#F3F3F3] mt-12">
                <div className=" md:w-[90vw]">
                    <div className="flex m-2 ml-0">
                        <ArrowLeft size="24" color="#000" className="mr-2" />
                        <p>Back</p>
                    </div>
                    <div className="items-center justify-center">
                        <h1 className="font-gilroy text-[6vw] sm:text-[5vw] md:text-[5vw] lg:text-[6vw] font-normal leading-[1.2] sm:leading-[1.1] md:leading-[1] tracking-[-0.06em] text-center">
                            Saved Destinations
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto text-center my-4">
                            The Trip Speech Translator enables users to communicate effortlessly during their travels. It converts spoken language into text or audio in real-time, allowing travelers to break language barriers and interact seamlessly with locals, enhancing their travel experience.                    </p>
                    </div>
                    <div className="mt-6">
                        <ExpandableCardDemo />
                    </div>
                </div>
            </div>
            <div>
            </div>
        </>
    );
}