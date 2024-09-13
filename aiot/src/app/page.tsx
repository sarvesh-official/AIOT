import { AnimatedModal } from "@/components/AnimatedModal";
import NavBar from "@/components/NavBar";
import { SearchBar } from "@/components/SearchBar";
import { WobbleCard } from "@/components/ui/wobble-card";
import { WobbleComponent } from "@/components/WobbleComponent";
import { Airplane, Car, Location, MoneyRecive, Translate } from "iconsax-react";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pt-36 font-gilroy">
        {/* Hero Section */}
        <div className="flex items-center flex-col justify-center gap-3">
          <h1 className="text-6xl">
            Plan Your Trips with <span className="text-1">AIOT</span>
          </h1>
          <p className="tracking-[1.8em] opacity-50	 text-xs">
            DREAM PLAN ACHIEVE
          </p>
        </div>
        {/* Search Bar */}
        <div className="flex items-center flex-col pt-12">
          {/* <form className="flex items-center px-4 py-2  rounded-full bg-white">
            <input
              placeholder="Search For Services"
              type="text"
              className="pl-10 text-sm py-1 pr-[600px] border-none focus:outline-none focus:ring-0"
            />
          </form> */}
          <SearchBar />
        </div>
        {/* Featured */}
        <div className="flex items-center flex-col py-10">
          <div className="w-full h-full pl-60 py-5">
            <h1 className="text-2xl">Featured</h1>
          </div>
          <div className="flex gap-3">
            <AnimatedModal>
              <WobbleCard
                containerClassName="flex flex-col w-64 h-64 rounded-[23.947px] bg-gradient-to-br  from-[#C986F0] to-[#650E98] cursor-pointer"
                className="py-10"
              >
                <div className="pl-24 mb-4">
                  <Airplane className="rotate-45" size="100" color="white" />
                </div>
                <h1 className="text-white text-2xl">
                  Plan Your <br />
                  Trip Using AI
                </h1>
              </WobbleCard>
            </AnimatedModal>
            <WobbleCard
              containerClassName="flex flex-col w-64 h-64 rounded-[23.947px] bg-gradient-to-br  from-[#86F0F0] to-[#0E5E98] cursor-pointer"
              className="py-10"
            >
              <div className="pl-24 mb-4">
                <Location size="100" color="white" />
              </div>
              <h1 className="text-white text-2xl">
                Saved <br />
                Destination
              </h1>
            </WobbleCard>
            <WobbleCard
              containerClassName="flex flex-col w-64 h-64 rounded-[23.947px] bg-gradient-to-br  from-[#F0DF86] to-[#98920E] cursor-pointer"
              className="py-10"
            >
              <div className="pl-24 mb-4">
                <MoneyRecive size="100" color="white" />
              </div>
              <h1 className="text-white text-2xl">
                Currency <br />
                Conversion
              </h1>
            </WobbleCard>
            <WobbleCard
              containerClassName="flex flex-col w-64 h-64 rounded-[23.947px] bg-gradient-to-br  from-[#86F0BD] to-[#0E984D] cursor-pointer"
              className="py-10"
            >
              <div className="pl-24 mb-4">
                <Translate size="100" color="white" />
              </div>
              <h1 className="text-white text-2xl">
                Translate <br />
                Speech
              </h1>
            </WobbleCard>
          </div>
        </div>
        {/* Services */}
        <div className="flex items-center flex-col">
          <div className="w-full h-full pl-60 py-5">
            <h1 className="text-2xl">Services</h1>
          </div>
          <div className="bg-white items-center rounded-lg flex-col px-5">
            <div className="flex">
              {/* Stack 1 */}
              <div className="flex gap-1 flex-col px-10 pt-12">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <Car size="32" color="#A917FE" />
                </div>
                <p>Cab Taxi</p>
              </div>
              <div className="flex gap-1 flex-col px-10 pt-12">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <Car size="32" color="#A917FE" />
                </div>
                <p>Cab Taxi</p>
              </div>
              <div className="flex gap-1 flex-col px-10 pt-12">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <Car size="32" color="#A917FE" />
                </div>
                <p>Cab Taxi</p>
              </div>
              <div className="flex gap-1 flex-col px-10 pt-12">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <Car size="32" color="#A917FE" />
                </div>
                <p>Cab Taxi</p>
              </div>
              <div className="flex gap-1 flex-col px-10 pt-12">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <Car size="32" color="#A917FE" />
                </div>
                <p>Cab Taxi</p>
              </div>
              <div className="flex gap-1 flex-col px-10 pt-12">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <Car size="32" color="#A917FE" />
                </div>
                <p>Cab Taxi</p>
              </div>
              <div className="flex gap-1 flex-col px-10 pt-12">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <Car size="32" color="#A917FE" />
                </div>
                <p>Cab Taxi</p>
              </div>
            </div>
            <div className="flex pb-10">
              {/* Stack 1 */}
              <div className="flex gap-1 flex-col px-10 pt-12">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <Car size="32" color="#A917FE" />
                </div>
                <p>Cab Taxi</p>
              </div>
              <div className="flex gap-1 flex-col px-10 pt-12">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <Car size="32" color="#A917FE" />
                </div>
                <p>Cab Taxi</p>
              </div>
              <div className="flex gap-1 flex-col px-10 pt-12">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <Car size="32" color="#A917FE" />
                </div>
                <p>Cab Taxi</p>
              </div>
              <div className="flex gap-1 flex-col px-10 pt-12">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <Car size="32" color="#A917FE" />
                </div>
                <p>Cab Taxi</p>
              </div>
              <div className="flex gap-1 flex-col px-10 pt-12">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <Car size="32" color="#A917FE" />
                </div>
                <p>Cab Taxi</p>
              </div>
              <div className="flex gap-1 flex-col px-10 pt-12">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <Car size="32" color="#A917FE" />
                </div>
                <p>Cab Taxi</p>
              </div>
              <div className="flex gap-1 flex-col px-10 pt-12">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <Car size="32" color="#A917FE" />
                </div>
                <p>Cab Taxi</p>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll Div */}
        <div className="py-20">
          <WobbleComponent />
        </div>
      </main>
    </>
  );
}
