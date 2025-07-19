import React from "react";
import { FaTwitter, FaFacebook, FaGooglePlay, FaApple } from "react-icons/fa";
import dmca from "../assets/photo/DMCA_logo-grn-btn100w.png";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black w-full relative text-white">
        <div className="bg-gray-900 text-white">
          {/* Top Grid Links */}
          <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-sm">
            {[
              {
                title: "TRENDING",
                links: ["Credit Score India", "Free CIBIL Check", "WhatsApp CIBIL"],
              },
              {
                title: "CREDIT CARDS",
                links: ["Apply Online", "Best Cards", "CIBIL for Cards"],
              },
              {
                title: "PERSONAL LOAN",
                links: ["Best Personal Loans", "Loan on PF", "Apply on WhatsApp"],
              },
              {
                title: "HOME LOAN",
                links: ["Best Home Loans", "PM Awas Yojana", "CLSS Scheme"],
              },
              {
                title: "CAR LOAN",
                links: ["Best Car Loans", "Two Wheeler Loan"],
              },
              {
                title: "FIXED DEPOSIT",
                links: ["Best FD Rates", "TDS on Salary"],
              },
            ].map((section) => (
              <div key={section.title} className="group relative">
                <h4 className="font-bold cursor-pointer">{section.title}</h4>
                <div className="hidden group-hover:block absolute bg-gray-800 mt-2 p-4 space-y-2 z-10">
                  {section.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="block hover:text-green-400"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Middle Links */}
          <div className="flex flex-wrap justify-center text-center text-xs sm:text-sm md:text-base gap-x-2 gap-y-1 px-4 py-4">
            {[
              "ABOUT US",
              "BLOGS",
              "TERMS",
              "CONTACT US",
              "TESTIMONIAL",
              "OUR PARTNER",
              "PRIVACY POLICY",
              "CONSENT WITHDRAWAL",
              "GRIEVANCE REDRESSAL DETAILS",
            ].map((text, idx) => (
              <React.Fragment key={text}>
                <button className="cursor-pointer hover:text-green-400">
                  <a href="">{text}</a>
                </button>
                {idx !== 8 && <span>|</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Social & App & Address */}
          <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-6 md:gap-10">
            {/* Social */}
            <div className="flex items-center gap-2 md:gap-4">
              <h1>Contact Us:</h1>
              <FaTwitter className="text-blue-400" size={20} />
              <FaFacebook className="text-blue-600" size={20} />
            </div>

            {/* App Links */}
            <div className="flex flex-wrap gap-3 items-center">
              <h1>Download Our App:</h1>
              <div className="flex items-center h-10 w-36 bg-white text-black shadow-md border rounded cursor-pointer px-2 gap-2 hover:bg-gray-50">
                <FaGooglePlay className="text-green-600 text-xl" />
                <span className="text-sm font-medium">Google Play</span>
              </div>

              <div className="flex items-center h-10 w-36 bg-white text-black shadow-md border rounded cursor-pointer px-2 gap-2 hover:bg-gray-50">
                <FaApple className="text-black text-xl" />
                <span className="text-sm font-medium">App Store</span>
              </div>
            </div>

            {/* Address */}
            <div className="flex-1 text-xs sm:text-sm md:text-base md:text-right space-y-2">
              <h1>Address:</h1>
              <p>
                E-30, Sector-8, Noida, UP-201301
                <br />
                +91-9873054225
                <br />
                contactus@wishfin.com
                <br />
                Customer Care Working Hours:
                <br />
                Monday through Friday, 10:00 A.M.
              </p>
            </div>

            {/* DMCA */}
            <div className="flex justify-end">
              <img
                src={dmca}
                className="inline-block h-10 w-auto"
                alt="DMCA"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
