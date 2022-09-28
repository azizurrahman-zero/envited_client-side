import React, { useState } from "react";
import { useForm } from "react-hook-form";
import createImage from "../Images/create.png";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const CreateEvent = ({ setEvent, setStart, setEnd }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const start = format(startDate, "dd LLLL h:mm a");
  const end = format(endDate, "dd LLLL h:mm a");

  const onSubmit = (data) => {
    setEvent(data);
    setStart(start);
    setEnd(end);
    navigate("/event");
  };

  return (
    <div className="flex items-center px-32 justify-center h-screen gradient-background">
      {/* image section */}
      <div className="w-6/12">
        <img src={createImage} alt="" />
      </div>
      {/* form section */}
      <div className="w-6/12 flex justify-end">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-5 mb-16 lg:m-0">
          <div className="card-body">
            <h2 className="font-bold text-center text-3xl text-[#240D57] mb-4 helvetica-font">
              Create Event
            </h2>
            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* event name */}
              <div className="form-control">
                <label className="label pb-1">
                  <span className="label-text text-[#4F4F4F]">Event Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered text-base mb-1"
                  {...register("eName", {
                    required: {
                      value: true,
                      message: "Enter an Event Name",
                    },
                  })}
                />
                <label className="label p-0">
                  {errors.eName?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.eName.message}
                    </span>
                  )}
                </label>
              </div>
              {/* host name */}
              <div className="form-control">
                <label className="label pb-1">
                  <span className="label-text text-[#4F4F4F]">Host Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered text-base mb-1"
                  {...register("hName", {
                    required: {
                      value: true,
                      message: "Enter a Host Name",
                    },
                  })}
                />
                <label className="label p-0">
                  {errors.hName?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.hName.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control">
                <label className="label pb-1">
                  <span className="label-text text-[#4F4F4F]">
                    Start Date &#38; Time
                  </span>
                </label>
                <DatePicker
                  className="input focus:outline-offset-0 input-bordered text-base pb-0.5 font-medium w-full mb-1"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  timeInputLabel="Time:"
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="MM/dd/yyyy h:mm aa"
                  fixedHeight
                  showTimeInput
                />
              </div>
              <div className="form-control">
                <label className="label pb-1">
                  <span className="label-text text-[#4F4F4F]">
                    End Date &#38; Time
                  </span>
                </label>
                <DatePicker
                  className="input focus:outline-offset-0 input-bordered text-base pb-0.5 font-medium w-full mb-1"
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  timeInputLabel="Time:"
                  dateFormat="MM/dd/yyyy h:mm aa"
                  fixedHeight
                  showTimeInput
                />
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn border-0 flex content-center text-xl font-bold helvetica-font text-white bg-[#E34C42] hover:bg-[#e34d42c5]"
                  type="submit"
                  value="Next"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
