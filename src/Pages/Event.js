import React from "react";
import eventImage from "../Images/event.png";
import { ImCalendar, ImMap } from "react-icons/im";

const Event = () => {
  return (
    <div className="flex px-24 py-10">
      <div className="w-6/12">
        <h2 className="text-[#240D57] font-bold text-5xl helvetica-font">
          Birthday Bash
        </h2>
        <p className="text-lg text-[#828282] helvetica-font">
          Hosted by <span className="font-bold">Elysia</span>
        </p>
        <div className="flex flex-col gap-8 mt-16">
          <div className="flex gap-5">
            <div className="icon-shadow flex justify-center items-center text-[#8456EC] h-14 w-14 rounded-xl bg-white">
              <ImCalendar className="text-3xl" />
            </div>
            <div>
              <h6 className="font-bold text-lg text-[#240D57] helvetica-font">
                18 August 6:00PM
              </h6>
              <h6 className="text-lg text-[#240D57] helvetica-font">
                to <span className="font-bold">19 August 1:00PM</span> UTC +10
              </h6>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="icon-shadow flex justify-center items-center text-[#8456EC] h-14 w-14 rounded-xl bg-white">
              <ImMap className="text-3xl" />
            </div>
            <div>
              <h6 className="font-bold text-lg text-[#240D57] helvetica-font">
                Street Name
              </h6>
              <h6 className="text-lg text-[#240D57] helvetica-font">
                Suburb, State, Postcode
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="w-6/12">
        <img src={eventImage} alt="" />
      </div>
    </div>
  );
};

export default Event;
