import React from "react";
import { Link } from "react-router-dom";
import sectionImage from "../Images/home.svg";

const Home = () => {
  return (
    <div className="flex items-center py-10 lg:py-20 px-24 lg:px-32 flex-col-reverse xl:flex-row gradient-background">
      {/* image section */}
      <div className="xl:w-5/12 w-full flex justify-center">
        <img src={sectionImage} alt="section" />
      </div>

      {/* event section */}
      <div className="xl:w-7-12 w-full">
        <div className="hero">
          <div className="hero-content">
            <div className="">
              <h1 className="text-7xl font-bold text-center xl:text-right text-[#240D57] mb-4 helvetica-font">
                Imagine if
                <br />
                <span className="gradient-text">Snapchat</span>
                <br />
                had events.
              </h1>
              <p className="font-light xl:pl-36 pl-0 text-center xl:text-right text-3xl mb-14 text-[#4F4F4F]">
                Easily host and share events with your friends across any social
                media.
              </p>
              <dir className="flex xl:justify-end justify-center">
                <Link to="/create">
                  <button className="btn btn-primary font-bold helvetica-font px-20 py-8 border-0 flex content-center text-xl hidden lg:visible gradient-button">
                    <span>🎉 Create my event</span>
                  </button>
                </Link>
              </dir>
            </div>
          </div>
          <dir className="flex xl:justify-end justify-center">
            <Link to="/create">
              <button className="btn btn-primary font-bold helvetica-font px-20 py-8 border-0 flex content-center text-xl lg:hidden visible gradient-button">
                <span>🎉 Create my event</span>
              </button>
            </Link>
          </dir>
        </div>
      </div>
    </div>
  );
};

export default Home;
