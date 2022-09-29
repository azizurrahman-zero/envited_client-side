import React from "react";
import { Link } from "react-router-dom";
import sectionImage from "../Images/home.svg";

const Home = () => {
  return (
    <div className="flex items-center py-10 lg:py-20 px-24 lg:px-32 flex-col-reverse xl:flex-row gradient-background">
      {/* button */}
      <div className="flex xl:justify-end xl:hidden justify-center pt-10 lg:pt-14">
        <Link to="/create">
          <button className="btn btn-primary font-bold helvetica-font lg:px-16 lg:py-8 border-0 flex content-center text-base lg:text-xl gradient-button">
            <span>🎉 Create my event</span>
          </button>
        </Link>
      </div>
      {/* image section */}
      <div className="xl:w-5/12 w-full flex justify-center">
        <img src={sectionImage} alt="section" />
      </div>

      {/* event section */}
      <div className="xl:w-7-12 w-full">
        <div>
          <h1 className="lg:text-7xl text-4xl font-bold text-center xl:text-right text-[#240D57] mb-4 helvetica-font">
            Imagine if
            <br />
            <span className="gradient-text">Snapchat</span>
            <br />
            had events.
          </h1>
          <p className="font-light xl:pl-36 pl-0 text-center xl:text-right lg:text-3xl text-base mb-14 text-[#4F4F4F]">
            Easily host and share events with your friends across any social
            media.
          </p>
          <div className="xl:flex hidden xl:justify-end justify-center">
            <Link to="/create">
              <button className="btn btn-primary font-bold helvetica-font px-20 py-8 border-0 flex content-center text-xl  gradient-button">
                <span>🎉 Create my event</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
