import React from "react";
import deskimage from "../assets/image-header-desktop.jpg";
export default function Stats() {
  return (
    <div>
      <div className="h-screen w-screen text-center mx-auto flex overflow-hidden justify-center items-center">
        <div className="bg-[hsl(244,38%,16%)] text-white cardo md:w-[77%] w-[89%] rounded-xl text-left shadow-2xl translate-y-[0px]">
          <div className="grid lg:grid-cols-2">
          <div>
          <div className="relative block lg:hidden">
              <img src={deskimage} alt="desk" className="w-full rounded-t   -lg" />
              <div className="absolute top-0 left-0 w-full h-full rounded-r-lg bg-[hsl(277,64%,61%)] opacity-40"></div>
              {/* <div className="absolute top-0 left-0 w-full h-full rounded-r-lg bg-[hsl(244,38%,16%)] opacity-60"></div> */}

            </div>
            <div className="my-10 lg:my-16 lg:ml-20 lg:mr-16 text-center lg:text-left mx-6">
            
              <h1 className="inter-extrabold text-4xl lg:text-[40px] lg:leading-[50px] lg:pr-8">
                Get <span className="text-[hsl(277,64%,61%)]">insights</span>{" "}
                that help your business grow.
              </h1>

              <p className="inter-regular text-[hsla(0,0%,100%,0.6)] px-4 lg:px-0 py-4 lg:py-8 text-[17px] lg:pr-12">
                Discover the benefits of data analytics and make better
                decisions regarding revenue, customer experience, and overall
                efficiency.
              </p>
              <div className="grid lg:grid-cols-3 pt-4 lg:pt-8">
              <div className="pb-6">
                    <h1 className="inter-extrabold text-[25px] tracking-wider">10k+</h1>
                    <p className="lexend text-[14px] text-[hsla(0,0%,100%,0.6)] tracking-wider">COMPANIES</p>
                </div>
                <div className="pb-6">
                    <h1 className="inter-extrabold text-[25px] tracking-wider">314</h1>
                    <p className="lexend text-[14px] text-[hsla(0,0%,100%,0.6)] tracking-wider">TEMPLATES</p>
                </div>
                <div >
                    <h1 className="inter-extrabold text-[25px] tracking-wider">12M+</h1>
                    <p className="lexend text-[14px] text-[hsla(0,0%,100%,0.6)] tracking-wider">QUERIES</p>
                </div>
              </div>
            </div>
            </div>

            <div className="relative hidden lg:block">
              <img src={deskimage} alt="desk" className="w-full rounded-r-lg" />
              <div className="absolute top-0 left-0 w-full h-full rounded-r-lg bg-[hsl(277,64%,61%)] opacity-40"></div>
              {/* <div className="absolute top-0 left-0 w-full h-full rounded-r-lg bg-[hsl(244,38%,16%)] opacity-60"></div> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
