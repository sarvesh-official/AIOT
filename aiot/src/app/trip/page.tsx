import { ArrowLeft } from "iconsax-react";
import Image from "next/image";
import Malaysia from "../../../assets/Malaysia images 1.png";


export default function Trip() {
    return (
        <div className="min-h-screen flex justify-center bg-[#F3F3F3]">
            <div className="w-full md:w-[90%]">
                <div className="flex m-2">
                    <ArrowLeft size="24" color="#000" className="mx-2" />
                    <p>Back</p>
                </div>
                <div className="items-center justify-center">
                    <h1 className="font-gilroy text-[6vw] sm:text-[5vw] md:text-[5vw] lg:text-[6vw] font-normal leading-[1.2] sm:leading-[1.1] md:leading-[1] tracking-[-0.06em] text-center">
                        Malaysia
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-center my-4">
                        Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests, and a mix of Malay, Chinese, Indian, and European cultural influences.
                    </p>
                    <div className="flex justify-center items-center">
                        <button className="bg-transparent hover:opacity-80 text-[#A917FE] border-[1px] border-[#A917FE] font-light h-12 px-10 rounded-full m-4">
                            Regenerate
                        </button>
                        <button className="bg-gradient-to-r from-[#A917FE] to-[#6C83FF] hover:opacity-80 text-white font-light h-12 px-11 rounded-full m-4">
                            Save Trip
                        </button>
                    </div>

                    <div className="flex justify-between items-center bg-white rounded-md">
                        <div className="flex justify-center items-center">
                            <Image src={Malaysia}  alt="Malaysia" width={50} height={50}/>
                            <div className="mx-4">
                                <p className="text-gray-600 mx-auto text-left ">capital</p>
                                <p className="font-gilroy text-black text-[30px] normal-case leading-normal tracking-[-1.8px]">Kuala Lampur</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
