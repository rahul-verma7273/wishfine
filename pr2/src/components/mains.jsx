import React from "react";
import { RiFundsLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";
import { GrScorecard } from "react-icons/gr";
import { MdOutlineSavings } from "react-icons/md";
import { FaGooglePlay } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import one from '../assets/photo/2 (1).jpg';
import two from '../assets/photo/1.jpg';
import three from '../assets/photo/3.jpg';
import five from '../assets/photo/4 (1).jpg';
import seven from '../assets/photo/6.jpg';
import eight from '../assets/photo/9.jpg';
import ten from '../assets/photo/12.jpg';
import shap1 from '../assets/photo/shape1.svg';
import shap2 from '../assets/photo/shape2.svg';
import girl from '../assets/photo/girl-credit-card.png'
import girl2 from "../assets/photo/wishes.png";
import test from '../assets/photo/testmonials-img.svg';
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import dow1 from '../assets/photo/download (1).jpeg';
import dow2 from '../assets/photo/download (2).jpeg';
import dow3 from '../assets/photo/download.jpeg';
import { GoChevronRight } from "react-icons/go";
import smart from '../assets/photo/smartphones.png'

const Mains= () =>{
    return(
<mains>
 <div className="px-4 py-4">
  <h1 className="text-xl sm:text-2xl md:text-3xl flex flex-wrap justify-center text-center gap-x-1">
    <span className="font-bold">Exclusive Offers</span>
    <span>For Our</span>
    <span className="font-bold">Heroes</span>
  </h1>
</div>

<div className="mt-10 px-4 flex flex-wrap gap-3 justify-center">
  <button className="flex items-center gap-2 bg-slate-50 rounded-lg border border-gray-300 px-4 py-2 cursor-pointer">
    <span className="text-green-600">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2a6 6 0 00-6 6v2a6 6 0 0012 0V8a6 6 0 00-6-6zM8 12h4v2H8v-2z" />
      </svg>
    </span>
    <span>Armed Forces</span>
  </button>

  <button className="flex items-center gap-2 bg-slate-50 rounded-lg border border-gray-300 px-4 py-2 cursor-pointer">
    <span className="text-teal-600">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8 2a6 6 0 016 6v2h-2V8a4 4 0 10-8 0v2H2V8a6 6 0 016-6zm4 8h2v8h-2v-8zm-8 0h2v8H4v-8z" />
      </svg>
    </span>
    <span>Doctors</span>
  </button>

  <button className="flex items-center gap-2 bg-slate-50 rounded-lg border border-gray-300 px-4 py-2 cursor-pointer">
    <span className="text-blue-600">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 4h12v12H4V4zm2 2v8h8V6H6z" />
      </svg>
    </span>
    <span>Government Employees</span>
  </button>

  <button className="flex items-center gap-2 bg-slate-50 rounded-lg border border-gray-300 px-4 py-2 cursor-pointer">
    <span className="text-pink-600">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2a4 4 0 00-4 4v2H4v8h12V8h-2V6a4 4 0 00-4-4z" />
      </svg>
    </span>
    <span>Women</span>
  </button>
</div>

<div className="w-full bg-slate-100 mt-10">
  <h1 className="text-lg sm:text-xl md:text-2xl text-center px-4 py-6">
    Bringing you the <span className="font-bold">Best Products</span> from
    <span className="font-bold"> Top Banks & Financial Institutions</span>
  </h1>
</div>

<div className="mx-4 p-4 flex flex-wrap gap-4 justify-center">
  <div className="h-40 w-40 bg-white shadow-2xl cursor-pointer hover:bg-pink-100 rounded-xl flex flex-col items-center justify-center">
    <RiFundsLine className="h-20 w-20" />
    <p>Personal Loan</p>
  </div>

  <div className="h-40 w-40 bg-white shadow-2xl cursor-pointer hover:bg-pink-100 rounded-xl flex flex-col items-center justify-center">
    <FaHome className="h-20 w-20" />
    <p>Home Loan</p>
  </div>

  <div className="h-40 w-40 bg-white shadow-2xl cursor-pointer hover:bg-pink-100 rounded-xl flex flex-col items-center justify-center">
    <FaBusinessTime className="h-20 w-20" />
    <p>Business Loan</p>
  </div>

  <div className="h-40 w-40 bg-white shadow-2xl cursor-pointer hover:bg-pink-100 rounded-xl flex flex-col items-center justify-center">
    <FaCreditCard className="h-20 w-20" />
    <p>Credit Card</p>
  </div>

  <div className="h-40 w-40 bg-white shadow-2xl cursor-pointer hover:bg-pink-100 rounded-xl flex flex-col items-center justify-center">
    <GrScorecard className="h-20 w-20" />
    <p>Scorecard</p>
  </div>

  <div className="h-40 w-40 bg-white shadow-2xl cursor-pointer hover:bg-pink-100 rounded-xl flex flex-col items-center justify-center">
    <MdOutlineSavings className="h-20 w-20" />
    <p>Savings</p>
  </div>
</div>

<div className="relative">
<div className="flex p-10 place-content-center space-x-3">
  <p className="m-2">Download Our App:</p>

  <FaGooglePlay className="h-10 w-20 bg-white shadow-2xl cursor-pointer border border-gray-300" />

  <FaApple className="h-10 w-20 bg-white shadow-2xl cursor-pointer border border-gray-300" />
</div>

<div className="bg-slate-700 text-white text-center py-4 sm:py-6">
  <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold">
    Millions of Wishes, Enabled!
  </h1>
  <h4 className="text-sm sm:text-base md:text-lg mt-2">
    We achieve such numbers, because you are more than a number to us.
  </h4>
</div>

<div className="bg-slate-700 w-full flex flex-col md:flex-row justify-between px-4 sm:px-6 md:px-10 text-white mt-4 md:mt-6 gap-6 md:gap-0 rounded">
  {/* Left */}
  <div className="flex-1 text-center md:text-left md:ml-5 p-4">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400">
      5,68,08,157
    </h2>
    <span className="text-xs sm:text-sm md:text-base">Satisfied Wishers</span>
  </div>

  {/* Dotted Line */}
  <div className="hidden md:block w-px bg-white opacity-50 border-l border-dotted"></div>

  {/* Center */}
  <div className="flex-1 text-center relative p-4">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400">
      43
    </h2>
    <span className="text-xs sm:text-sm md:text-base">
      Number of banks that bank on us
    </span>
  </div>

  {/* Dotted Line */}
  <div className="hidden md:block w-px bg-white opacity-50 border-l border-dotted"></div>

  {/* Right */}
  <div className="flex-1 text-center md:text-right md:mr-5 p-4">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400">
      ₹25,000Cr.
    </h2>
    <span className="text-xs sm:text-sm md:text-base">
      worth of Credit disbursed
    </span>
  </div>
</div>

<div className="bg-white shadow-xl h-24 w-full max-w-6xl mx-auto -mt-2 rounded-xl overflow-hidden">
  <div className="flex animate-marquee space-x-4 min-w-max">
    <img src={one} className="h-16 sm:h-20 w-auto" />
    <img src={two} className="h-16 sm:h-20 w-auto"/>
    <img src={three} className="h-16 sm:h-20 w-auto" />
    <img src={five} className="h-16 sm:h-20 w-auto" />
    <img src={seven} className="h-16 sm:h-20 w-auto" />
    <img src={eight} className="h-16 sm:h-20 w-auto" />
    <img src={ten} className="h-16 sm:h-20 w-auto" />
    </div>
    </div>

<div className="relative flex flex-col md:flex-row justify-between py-10 px-4 md:px-10 gap-6 mt-10">
  {/* Left Side: Images + Calculator + EMI */}
  <div className="relative z-10 flex flex-col gap-4 w-full md:w-1/2 order-1">
    <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-12 items-center md:items-start">
      
      {/* Calculator */}
      <div className="h-60 w-60 sm:h-80 sm:w-80 bg-white shadow-2xl rounded-md relative z-10 -mt-6 md:mt-0">
        <div className="ml-4 md:ml-6 mt-4 md:mt-6">
          <h3>EMI Calculator for</h3>
          <h1 className="text-lg md:text-2xl font-bold">PERSONAL LOAN</h1>

          <h1 className="mt-4 md:mt-5 text-sm md:text-base">Loan Amount (₹)</h1>
          <input
            type="range"
            min="1"
            max="100"
            step="1"
            className="w-50"
          />

          <h2 className="mt-4 md:mt-8 text-sm md:text-base">Interest Rate %</h2>
          <input
            type="range"
            min="1"
            max="100"
            step="1"
            className="w-50"
          />

          <h3 className="mt-4 md:mt-8 text-sm md:text-base">Tenure (Months)</h3>
          <input
            type="range"
            min="1"
            max="100"
            step="1"
            className="w-50"
          />
        </div>
      </div>

      {/* EMI Result */}
      <div className="h-40 w-40 sm:h-[240px] sm:w-[240px] bg-white shadow-2xl flex flex-col items-center justify-center gap-2 sm:gap-4 rounded-lg relative z-10 mt-4 md:mt-0">
        <h1 className="text-base md:text-xl font-medium">Monthly EMI</h1>
        <h3 className="text-xl md:text-3xl font-bold text-green-500">
          ₹ 20,017
        </h3>
        <button className="h-10 md:h-12 px-4 md:px-6 bg-green-600 rounded-xl font-bold text-white cursor-pointer">
          APPLY NOW
        </button>
      </div>
    </div>
  
</div>

  {/* Right Side: Text Section */}
  <div className="max-w-full md:max-w-md mt-6 md:mt-0 w-full md:w-1/2 order-2">
    <h1 className="text-lg md:text-2xl font-bold text-left">EMI Calculator</h1>

    <h2 className="px-4 md:px-6 text-sm md:text-base text-left mt-2 md:mt-4">
      Measure twice, cut once. You may have a target amount, a target tenure or a target EMI.
      When it comes to loans, no matter how big or small, always get an idea how it will affect
      your monthly finances, before you take a decision.
    </h2>

    <div className="cursor-pointer space-y-2 text-left px-4 mt-4 md:mt-6">
      <h1 className="text-base md:text-xl font-bold">Personal Loan EMI Calculator</h1>
      <p className="text-sm md:text-base">
        Calculate how much it will take to enable short-term liquidity.
      </p>

      <h5 className="text-base md:text-xl font-bold mt-4">Home Loan EMI Calculator</h5>
      <p className="text-sm md:text-base">
        Calculate how much it will take to enable your dream home.
      </p>
    </div>

    <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center px-4 md:px-10 mt-6 md:mt-10 space-y-2 sm:space-y-0 sm:space-x-3">
      <p className="m-2">Download Our App:</p>
      <FaGooglePlay className="h-8 w-8 sm:h-10 sm:w-10 bg-white shadow-2xl cursor-pointer border border-gray-300" />
      <FaApple className="h-8 w-8 sm:h-10 sm:w-10 bg-white shadow-2xl cursor-pointer border border-gray-300" />
    </div>
  </div>
  </div>
  </div>
<hr className="w-full border-t border-gray-300 mt-8" />

{/* Section 1 */}
<section className="px-4 py-10 flex flex-col md:flex-row md:items-start md:justify-center gap-8">
  <img
    src={girl}
    className="w-64 md:w-80 mx-auto md:mx-0"
    alt="Girl"
  />

  <div className="max-w-lg space-y-4 mx-auto md:mx-0">
    <h1 className="text-2xl font-bold text-center md:text-left">
      Looking for the Credit Card with the Best Benefits?
    </h1>

    <p className="text-center md:text-left">
      Check and Compare the Top Credit Cards you may be eligible for...
    </p>

    <div className="flex justify-center md:justify-start gap-x-5 mt-6 text-sm md:text-base">
      <h4>Your Credit Score</h4>
      <h5>Your Requirement</h5>
    </div>

    <div className="flex flex-col md:flex-row gap-4 mt-4">
      <div className="relative w-full md:w-48">
        <button className="shadow-md text-black font-bold py-2 px-4 w-full rounded flex justify-between items-center border">
          <span>Select Value</span>
          <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div className="relative w-full md:w-48">
        <button className="shadow-md text-black font-bold py-2 px-4 w-full rounded flex justify-between items-center border">
          <span>Select Please</span>
          <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <button className="h-11 px-4 bg-green-700 text-white rounded-xl w-full md:w-96">
        FIND CARD
      </button>
    </div>

    <p className="mt-6 text-center md:text-left">
      Don't know your score? <a href="#" className="text-green-800 underline">Get it free.</a>
    </p>

    <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 mt-4">
      <p className="text-sm md:text-base">Download Our App:</p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex items-center h-10 w-32 bg-white shadow-md border rounded cursor-pointer px-2 gap-2">
          <FaGooglePlay className="text-green-600 text-xl" />
          <span className="text-sm font-medium">Google Play</span>
        </div>

        <div className="flex items-center h-10 w-32 bg-white shadow-md border rounded cursor-pointer px-2 gap-2">
          <FaApple className="text-black text-xl" />
          <span className="text-sm font-medium">App Store</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Section 2 */}
<section className="relative px-4 py-10 flex flex-col md:flex-row md:items-center md:justify-center gap-8">
  {/* Left Content */}
  <div className="flex flex-col gap-4 md:gap-6 md:w-1/2 mx-auto md:mx-0">
    <h1 className="text-2xl font-bold text-center md:text-left">
      Wishes. Enabled
    </h1>
    <h2 className="text-xl font-normal text-center md:text-left">
      through Investment, Credit & Smart Financial Management.
    </h2>
    <p className="text-center md:text-left">I wish to</p>

    <div className="relative inline-block text-left group mx-auto md:mx-0">
      <button
        className="bg-white shadow-2xl text-black font-bold py-2 px-4 rounded flex justify-between items-center border border-gray-400 h-11 w-full md:w-80"
      >
        <span>Select Please</span>
        <svg
          className="ml-2 w-4 h-4 transform group-hover:rotate-180 transition"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className="absolute left-0 top-full mt-2 w-52 rounded shadow-lg bg-green-600 text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition"
      >
        <div className="px-4 py-2 hover:bg-green-700 cursor-pointer">Select Please</div>
        <div className="px-4 py-2 hover:bg-green-700 cursor-pointer">Travel around the world</div>
        <div className="px-4 py-2 hover:bg-green-700 cursor-pointer">Buy my favourite car</div>
        <div className="px-4 py-2 hover:bg-green-700 cursor-pointer">Brighten my child's future</div>
        <div className="px-4 py-2 hover:bg-green-700 cursor-pointer">Own my dream home</div>
      </div>
    </div>

    <button className="h-11 w-40 bg-green-500 text-white text-lg cursor-pointer rounded-xl mx-auto md:mx-0">
      PLAY NOW
    </button>
  </div>

  {/* Right Image */}
  <div className="flex justify-center md:justify-end md:w-1/2">
    <img
      src={girl2}
      alt="Girl"
      className="w-64 md:w-80"
    />
  </div>
</section>
<hr/>

<section className="px-4 py-10">

  <div className="mt-10 md:ml-20">
    <h1 className="text-2xl font-bold">Wishfin's Success Stories</h1>

    <div className="relative flex flex-wrap justify-center gap-10 my-10">
      {/* Arrows */}
      <div className="absolute -top-10 right-0 flex gap-3">
        <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center cursor-pointer shadow-lg">
          <GoArrowLeft />
        </div>
        <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center cursor-pointer shadow-lg">
          <GoArrowRight />
        </div>
      </div>

      {/* Cards */}
      {[1, 2].map((_, idx) => (
        <div key={idx} className="relative w-full max-w-sm md:w-[500px] h-[400px] bg-white shadow-2xl rounded-lg p-5">
          <div className="absolute -top-3 right-2 w-[60px] h-[60px] bg-white shadow rounded-full flex items-center justify-center">
            <img src={test} className="max-h-full max-w-full rounded-full" />
          </div>
          <div className="h-[250px] overflow-y-scroll pr-2 text-sm">
            <p>
              {idx === 0
                ? `Hi everyone yesterday I got a call from Sapna Motwani The quick approval, fast disbursal and easy documentation make personal loans one of the best credit options for people these days. With this loan, you can meet purposes like marriage The quick approval, fast disbursal and easy documentation make personal loans one of the best credit options for people these days. With this loan, you can meet purposes like marriage,...`
                : `It helps me a lot to manage my credit portfolios The quick approval, fast disbursal and easy documentation make personal loans one of the best credit options for people these days. With this loan, you can meet purposes like marriage The quick approval, fast disbursal and easy documentation make personal loans one of the best credit options for people these days. With this loan, you can meet purposes like marriage,...`}
            </p>
          </div>
          <hr className="my-2" />
          <div className="flex flex-col space-y-1 text-sm">
            <span className="text-lg font-bold">{idx === 0 ? `Sachin Sir` : `Ashish Sir`}</span>
            <span>16, July 2025</span>
            <div className="flex space-x-1">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Recent Articles */}
    <div className="mt-20">
      <h1 className="text-3xl font-bold">Recent Articles</h1>
      <div className="text-green-500 text-right">
        <h3 className="flex justify-end items-center gap-1">
          See More Option <GoChevronRight />
        </h3>
      </div>





     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
  {[ 
    {
      img: dow1,
      title: "What is the Best Way to Get a Personal Loan in India?",
      desc: "The quick approval, fast disbursal and easy documentation make personal loans one of the best credit options for people these days. With this loan, you can meet purposes like marriage,..."
    },
    {
      img: dow2,
      title: "Latest RBI Guidelines for Home Loans",
      desc: "The Reserve Bank of India (RBI) brought changes recently in terms of interest rates and LTV ratio. The RBI has ensured that home loan interest rates run in parallel with its repo rate,..."
    },
    {
      img: dow3,
      title: "How to Improve your CIBIL Score Immediately?",
      desc: "A CIBIL Score is the first thing a bank enquires about before lending any loan or a credit card to the applicant. So, you must always keep a positive CIBIL Score before you apply for an..."
    }
  ].map((item, idx) => (
    <div key={idx} className="flex flex-col items-center text-center px-4">
      <img src={item.img} className="h-60 md:h-80 w-60 md:w-80 object-cover" />
      <h2 className="text-lg md:text-xl font-semibold mt-4 cursor-pointer">
        {item.title}
      </h2>
      <p className="text-sm md:text-base mt-2">
        {item.desc}
      </p>
    </div>
  ))}
</div>






    </div>
</div>
    <hr className="my-10" />

   <div className="relative w-full h-[400px] md:h-[500px]">
  {/* Background Image */}
  <img
    src={smart}
    alt="smart"
    className="absolute inset-0 w-full h-full object-cover"
/>
{/* Overlay Content */}
<div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4 gap-2 md:gap-4">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
    Free <span className="text-green-400">CIBIL</span> Score Check,
  </h1>
  <p className="text-lg sm:text-xl md:text-2xl text-white">
    Credit Card Rewards & Loans
  </p>
  <p className="text-base sm:text-lg text-white">
    Upgrade to Wishfin CIBIL App on
  </p>

  <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-2">
    <p className="text-sm sm:text-base md:text-lg text-white">
      Download Our App:
    </p>
    <FaGooglePlay className="h-8 w-24 sm:h-10 sm:w-28 bg-white shadow-xl cursor-pointer border border-gray-300 rounded p-1" />
    <FaApple className="h-8 w-24 sm:h-10 sm:w-28 bg-white shadow-xl cursor-pointer border border-gray-300 rounded p-1" />
  </div>
</div>
  </div>
</section>
      </mains>
    );
};
export default Mains;