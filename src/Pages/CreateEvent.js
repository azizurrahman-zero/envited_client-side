import React from "react";
import { useForm } from "react-hook-form";
import createImage from "../Images/create.png";
import { useNavigate } from "react-router-dom";

const CreateEvent = ({ setEvent }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    setEvent(data);
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
                <label className="label pt-0">
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
                <label className="label pt-0">
                  {errors.hName?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.hName.message}
                    </span>
                  )}
                </label>
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
