import React from "react";
import eventImage from "../Images/event.png";
import { ImCalendar, ImMap } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";

const Event = ({ event, start, end }) => {
  const { eName, hName, location } = event;

  return (
    <div className="flex xl:flex-row flex-col-reverse xl:px-44 lg:px-32 px-0 lg:py-32 py-0 xl:gap-20 gap-10">
      <div className="xl:w-6/12 w-full px-5 md:px-0">
        <h2 className="text-[#240D57] font-bold text-5xl helvetica-font">
          {eName ? eName : "Birthday Bash"}
        </h2>
        <p className="text-lg text-[#828282] helvetica-font">
          Hosted by{" "}
          <span className="font-bold">{hName ? hName : "Elysia"}</span>
        </p>
        <div className="flex flex-col gap-8 mt-16">
          <div className="flex gap-5">
            <div className="icon-shadow flex justify-center items-center text-[#8456EC] h-14 w-14 rounded-xl bg-white">
              <ImCalendar className="text-3xl" />
            </div>
            <div className="flex items-center justify-between w-full">
              <div>
                <h6 className="font-bold text-lg text-[#240D57] helvetica-font">
                  {start}
                </h6>
                <h6 className="text-lg text-[#240D57] helvetica-font">
                  to <span className="font-bold">{end}</span> UTC +10
                </h6>
              </div>
              <div>
                <IoIosArrowForward />
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="icon-shadow flex justify-center items-center text-[#8456EC] h-14 w-14 rounded-xl bg-white">
              <ImMap className="text-3xl" />
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col justify-center">
                {location ? (
                  <h6 className="font-bold text-lg text-[#240D57] helvetica-font">
                    {location}
                  </h6>
                ) : (
                  <>
                    <h6 className="font-bold text-lg text-[#240D57] helvetica-font">
                      Street Name
                    </h6>
                    <h6 className="text-lg text-[#240D57] helvetica-font">
                      Suburb, State, Postcode
                    </h6>
                  </>
                )}
              </div>
              <div>
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:w-6/12 w-full">
        <img
          src={eName ? URL.createObjectURL(event.image[0]) : eventImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default Event;
