import React, { useState, useEffect } from "react";
import img1 from "../assets/photo/img.png";
import bann from "../assets/photo/bann-new.png";
import card from "../assets/photo/card-2.png";
import top from "../assets/photo/top-banner-background.png";
import { GoArrowRight } from "react-icons/go";

const slides = [
  {
    image: img1,
    lines: [
      <div key="1" className="text-3xl font-bold">Enable</div>,
      <div key="2" className="text-5xl font-extrabold">
        <span className="text-black">Healthy</span>{" "}
        <span className="text-green-600">Credit</span>
      </div>,
      <div key="3" className="text-lg">Check and Monitor Your CIBIL Score at Wishfin</div>
    ]
  },
  {
    image: card,
    lines: [
      <div key="1" className="text-3xl font-bold">Wish For a</div>,
      <div key="2" className="text-5xl font-extrabold">
        <span className="text-black">Credit</span>{" "}
        <span className="text-green-600">Card</span>
      </div>,
      <div key="3" className="text-lg">We Have The Right One For You!</div>
    ]
  },
  {
    image: bann,
    lines: [
      <div key="1" className="text-3xl font-bold">Choose a</div>,
      <div key="2" className="text-5xl font-extrabold">
        <span className="text-green-600">Personal</span>{" "}
        <span className="text-black">Loan</span>
      </div>,
      <div key="3" className="text-lg">With Lowest Interest & Instant Approval</div>
    ]
  }
];

const Crousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000); // slower

    return () => clearInterval(interval);
  }, []);

  return (
   <section
  className="relative bg-cover bg-center py-10 md:py-20"
  style={{ backgroundImage: `url(${top})` }}
>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-4 md:px-20">
        {/* Left Text */}
        <div
          key={current}
          className="max-w-md text-center md:text-left space-y-3 animate-slide"
        >
          {slides[current].lines}

          <a
            href="#"
            className="inline-flex items-center gap-2 h-12 px-6 bg-green-500 hover:bg-green-600 text-white text-lg rounded-xl mt-4"
          >
            CHECK RATES
            <GoArrowRight />
          </a>
        </div>

        {/* Right Image */}
        <div
          className="w-full md:w-1/2 flex justify-center items-center transition-all duration-700"
        >
          <img
            src={slides[current].image}
            alt="slide"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Crousel;
