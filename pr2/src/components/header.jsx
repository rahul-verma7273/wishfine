import React, { useState } from "react";
import image from "../assets/photo/wishfin-logo.svg";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleCloseNav = () => {
    setIsNavOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 bg-white z-50 shadow">
      <div className="relative">
        {/* Top bar - hidden on mobile */}
        <div className="hidden md:flex justify-center md:justify-end px-4 md:px-20 py-2 gap-4 text-sm md:text-base">
          <h1 className="cursor-pointer flex items-center gap-1 text-black">
            📞 +91 70 22 47 84 98
          </h1>
          <span>|</span>
          <h2 className="cursor-pointer flex items-center gap-1 text-black">
            📝 Blog
          </h2>
        </div>

        {/* Logo + Toggle */}
        <div className="flex justify-between items-center px-4 md:px-20 py-2">
          <img src={image} alt="logo" className="h-10 w-24 md:w-32" />
          <button
            onClick={() => {
              setIsNavOpen(!isNavOpen);
              setOpenDropdown(null);
            }}
            className="md:hidden text-3xl text-black"
          >
            ☰
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-6 text-black">
              <li><a href="#">Home Loan</a></li>
              <li><a href="#">CIBIL Score</a></li>

              {/* Credit Cards */}
              <li className="relative group">
                <a href="#" className="flex items-center gap-1 cursor-pointer">
                  Credit Cards <span>▼</span>
                </a>
                <ul className="absolute hidden group-hover:flex flex-col bg-white shadow-md rounded mt-2 z-10 p-2 text-black min-w-max">
                  {[
                    "Credit Card Apply",
                    "Best Credit Cards",
                    "Axis Bank Credit Cards",
                    "SBI Bank Credit Cards",
                    "Indusind Bank Credit Cards",
                    "Standard Chartered Bank Credit Cards",
                    "Yes Bank Credit Cards",
                  ].map((item, i) => (
                    <li key={i} className="px-4 py-1 hover:bg-gray-100">
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </li>

              <li><a href="#">Personal Loan</a></li>
              <li><a href="#">Business Loan</a></li>

              {/* Wishes */}
              <li className="relative group">
                <a href="#" className="flex items-center gap-1 cursor-pointer">
                  Wishes <span>▼</span>
                </a>
                <ul className="absolute hidden group-hover:flex flex-col bg-white shadow-md rounded mt-2 z-10 p-2 text-black min-w-max">
                  {["Travel", "Car", "Child’s Future", "Dream Home"].map(
                    (item, i) => (
                      <li key={i} className="px-4 py-1 hover:bg-gray-100">
                        <a href="#">{item}</a>
                      </li>
                    )
                  )}
                </ul>
              </li>

              {/* Download App */}
              <li className="relative group">
                <a href="#" className="flex items-center gap-1 cursor-pointer">
                  Download App <span>▼</span>
                </a>
                <ul className="absolute hidden group-hover:flex flex-col bg-white shadow-md rounded mt-2 z-10 p-2 text-black min-w-max">
                  {["Google Play", "App Store"].map((item, i) => (
                    <li key={i} className="px-4 py-1 hover:bg-gray-100">
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <a href="#" className="text-black">
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Nav */}
        {isNavOpen && (
          <nav className="md:hidden absolute left-0 right-0 bg-gray-100 shadow-md max-h-[90vh] overflow-y-auto">
            <ul className="flex flex-col gap-4 text-black px-4 py-4">
              <li><a href="#" onClick={handleCloseNav}>Home Loan</a></li>
              <li><a href="#" onClick={handleCloseNav}>CIBIL Score</a></li>

              {/* Credit Cards */}
              <li>
                <button
                  onClick={() => toggleDropdown("credit")}
                  className="w-full text-left flex justify-between items-center"
                >
                  Credit Cards <span>{openDropdown === "credit" ? "▲" : "▼"}</span>
                </button>
                {openDropdown === "credit" && (
                  <ul className="flex flex-col bg-white shadow-md rounded mt-2 z-10 p-2 space-y-1 text-black">
                    {[
                      "Credit Card Apply",
                      "Best Credit Cards",
                      "Axis Bank Credit Cards",
                      "SBI Bank Credit Cards",
                      "Indusind Bank Credit Cards",
                      "Standard Chartered Bank Credit Cards",
                      "Yes Bank Credit Cards",
                    ].map((item, i) => (
                      <li key={i}>
                        <a href="#" className="px-4 py-1 hover:bg-gray-100 block" onClick={handleCloseNav}>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li><a href="#" onClick={handleCloseNav}>Personal Loan</a></li>
              <li><a href="#" onClick={handleCloseNav}>Business Loan</a></li>

              {/* Wishes */}
              <li>
                <button
                  onClick={() => toggleDropdown("wishes")}
                  className="w-full text-left flex justify-between items-center"
                >
                  Wishes <span>{openDropdown === "wishes" ? "▲" : "▼"}</span>
                </button>
                {openDropdown === "wishes" && (
                  <ul className="flex flex-col bg-white shadow-md rounded mt-2 z-10 p-2 space-y-1">
                    {["Travel", "Car", "Child’s Future", "Dream Home"].map(
                      (item, i) => (
                        <li key={i}>
                          <a href="#" className="px-4 py-1 hover:bg-gray-100 block" onClick={handleCloseNav}>
                            {item}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </li>

              {/* Download App */}
              <li>
                <button
                  onClick={() => toggleDropdown("download")}
                  className="w-full text-left flex justify-between items-center"
                >
                  Download App <span>{openDropdown === "download" ? "▲" : "▼"}</span>
                </button>
                {openDropdown === "download" && (
                  <ul className="flex flex-col bg-white shadow-md rounded mt-2 z-10 p-2 space-y-1">
                    {["Google Play", "App Store"].map((item, i) => (
                      <li key={i}>
                        <a href="#" className="px-4 py-1 hover:bg-gray-100 block" onClick={handleCloseNav}>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <a href="#" className="text-black" onClick={handleCloseNav}>
                  Login
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
