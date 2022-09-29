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
    <div className="flex flex-col xl:flex-row items-center lg:px-28 px-10 lg:py-20 py-10 gap-10 lg:gap-20 justify-center gradient-background">
      {/* image section */}
      <div className="xl:w-7/12 w-full">
        <img src={createImage} alt="" />
      </div>
      {/* form section */}
      <div className="xl:w-5/12 w-full flex lg:justify-center">
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
              {/* start date */}
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
                  withPortal
                  portalId="root-portal"
                />
              </div>
              {/* end date */}
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
                  withPortal
                  portalId="root-portal"
                />
              </div>
              {/* location */}
              <div className="form-control">
                <label className="label pb-1">
                  <span className="label-text text-[#4F4F4F]">Location</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered text-base mb-1"
                  {...register("location", {
                    required: {
                      value: true,
                      message: "Enter Location",
                    },
                  })}
                />
                <label className="label p-0">
                  {errors.location?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.location.message}
                    </span>
                  )}
                </label>
              </div>
              {/* image */}
              <div>
                <label className="label pb-0">
                  <span className="label-text text-[#4F4F4F]">Event Photo</span>
                </label>
                <div className="max-w-2xl rounded-lg shadow-xl bg-gray-50">
                  <div className="p-3">
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                        <div className="flex flex-col items-center justify-center pt-7">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                          <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Attach a file
                          </p>
                        </div>
                        <input
                          type="file"
                          className="opacity-0"
                          {...register("image", {
                            required: {
                              value: true,
                              message: "Event Photo is Required",
                            },
                          })}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <label className="label flex justify-center">
                {errors.image?.type === "required" && (
                  <span className="label-text-alt text-error">
                    {errors.image.message}
                  </span>
                )}
              </label>

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
