import { AnimatedModal } from "@/components/AnimatedModal";
import NavBar from "@/components/NavBar";
import { SearchBar } from "@/components/SearchBar";
import { WobbleCard } from "@/components/ui/wobble-card";
import { WobbleComponent } from "@/components/WobbleComponent";
import { CardHoverEffectDemo } from "@/components/ui/card-hover-effect";
import Link from "next/link";
import {
  Airplane,
  Bank,
  Book1,
  Briefcase,
  Bus,
  Car,
  CloudLightning,
  Command,
  GasStation,
  Happyemoji,
  Health,
  Location,
  MoneyRecive,
  ShoppingCart,
  SmartCar,
  Translate,
  WalletMinus,
} from "iconsax-react";
import { AnimatedTooltipPreview } from "@/components/AnimatedToolTip";

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
            <Link href={"/saved"}>
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
              </Link>
            <Link href={"/conversion"}>
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
            </Link>
            <Link href={"/translate"}>
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
            </Link>
          </div>
        </div>
        {/* Services */}
        <div className="flex items-center flex-col">
          <div className="w-full h-full pl-60 py-5">
            <h1 className="text-2xl">Services</h1>
          </div>
          <div className="bg-white items-center rounded-2xl px-24 py-8">
            {/* Grid with 2 rows and 7 columns */}
            <div className="grid grid-cols-7 gap-14">
              {/* Cab Taxi */}
              <div className="flex flex-col items-center cursor-pointer">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <Car size="32" color="#A917FE" />
                </div>
                <p className="text-xs pt-2">Cab Taxi</p> {/* Smaller font */}
              </div>
              {/* Guide */}
              <div className="flex flex-col items-center cursor-pointer">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <Book1 size="32" color="#A917FE" />
                </div>
                <p className="text-xs pt-2">Guide</p> {/* Smaller font */}
              </div>
              {/* Pilgrimage */}
              <div className="flex flex-col items-center cursor-pointer">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <Command size="32" color="#A917FE" />
                </div>
                <p className="text-xs pt-2">Pilgrimage</p> {/* Smaller font */}
              </div>
              {/* Shopping */}
              <div className="flex flex-col items-center cursor-pointer">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <ShoppingCart size="32" color="#A917FE" />
                </div>
                <p className="text-xs pt-2">Shopping</p> {/* Smaller font */}
              </div>
              {/* Dresses */}
              <div className="flex flex-col items-center cursor-pointer">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <Briefcase size="32" color="#A917FE" />
                </div>
                <p className="text-xs pt-2">Dresses</p> {/* Smaller font */}
              </div>
              {/* Food */}
              <div className="flex flex-col items-center cursor-pointer">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <Happyemoji size="32" color="#A917FE" />
                </div>
                <p className="text-xs pt-2">Food</p> {/* Smaller font */}
              </div>
              {/* Parking */}
              <div className="flex flex-col items-center cursor-pointer">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <SmartCar size="32" color="#A917FE" />
                </div>
                <p className="text-xs pt-2">Parking</p> {/* Smaller font */}
              </div>
              {/* Rent Vehicle */}
              <div className="flex flex-col items-center cursor-pointer">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <Bus size="32" color="#A917FE" />
                </div>
                <p className="text-xs pt-2">Rent Vehicle</p>{" "}
                {/* Smaller font */}
              </div>
              {/* Nearby Banks */}
              <div className="flex flex-col items-center cursor-pointer">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <Bank size="32" color="#A917FE" />
                </div>
                <p className="text-xs pt-2">Nearby Banks</p>{" "}
                {/* Smaller font */}
              </div>
              {/* Weather */}
              <div className="flex flex-col items-center cursor-pointer">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <CloudLightning size="32" color="#A917FE" />
                </div>
                <p className="text-xs pt-2">Weather</p> {/* Smaller font */}
              </div>
              {/* Petrol Price */}
              <div className="flex flex-col items-center cursor-pointer">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <GasStation size="32" color="#A917FE" />
                </div>
                <p className="text-xs pt-2">Petrol Price</p>{" "}
                {/* Smaller font */}
              </div>
              {/* Tourist Spot */}
              <div className="flex flex-col items-center cursor-pointer">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <Location size="32" color="#A917FE" />
                </div>
                <p className="text-xs pt-2">Tourist Spot</p>{" "}
                {/* Smaller font */}
              </div>
              {/* Emergency */}
              <div className="flex flex-col items-center cursor-pointer">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <Health size="32" color="#A917FE" />
                </div>
                <p className="text-xs pt-2">Emergency</p> {/* Smaller font */}
              </div>
              {/* Visa */}
              <div className="flex flex-col items-center cursor-pointer">
                <div className="p-4 flex items-center justify-center bg-[#F3F3F3] rounded-full">
                  <WalletMinus size="32" color="#A917FE" />
                </div>
                <p className="text-xs pt-2">Visa</p> {/* Smaller font */}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Div */}
        <div className="py-20">
          <WobbleComponent />
        </div>
      </main>
      <div className="text-center">
        <h1 className="text-5xl">Meet the Creators</h1>
        <div className="mt-6">
          <AnimatedTooltipPreview />
        </div>
      </div>
      {/* <div className="mt-24">
        <h1 className="text-5xl text-center">API's Used</h1>
        <CardHoverEffectDemo />
      </div> */}
    </>
  );
}
