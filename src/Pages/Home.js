import React from "react";
import { Link } from "react-router-dom";
import sectionImage from "../Images/home.svg";
const Home = () => {
  return (
    <div className="flex items-center py-10 px-24 gradient-background">
      {/* image section */}
      <div className="w-5/12 flex justify-center">
        <img className="" src={sectionImage} alt="section" />
      </div>

      {/* event section */}
      <div className="w-7-12">
        <div className="hero">
          <div className="hero-content">
            <div className="">
              <h1 className="text-7xl font-bold text-right text-[#240D57] mb-4 helvetica-font">
                Imagine if
                <br />
                <span className="gradient-text">Snapchat</span>
                <br />
                had events.
              </h1>
              <p className="font-light pl-36 text-3xl text-right mb-14 text-[#4F4F4F]">
                Easily host and share events with your friends across any social
                media.
              </p>
              <dir className="flex justify-end">
                <Link to="/create">
                  <button className="btn btn-primary font-bold helvetica-font px-20 py-8 border-0 flex content-center text-xl gradient-button">
                    <span>🎉 Create my event</span>
                  </button>
                </Link>
              </dir>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
