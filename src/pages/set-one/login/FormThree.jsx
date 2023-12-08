import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const FormThree = ({ step, setStep, userData, setUserData }) => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      countryCode: userData.countryCode,
      phoneNumber: userData.phoneNumber,
    },
  });

  const onSubmit = (data) => {
    setUserData((prevState) => ({
      ...prevState,
      countryCode: data.countryCode,
      phoneNumber: data.phoneNumber,
    }));

    const payload = {
      ...userData,
      countryCode: data.countryCode,
      phoneNumber: data.phoneNumber,
    };

    fetch("https://codebuddy.review/submit", {
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Response data:", data);
        navigate("/set-one/posts");
      })
      .catch((error) => {
        console.error("error:", error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* countrycode field */}
        <div>
          <label htmlFor="countryCode" className="text-xl font-medium">
            Country code
          </label>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: "Country code is required",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <select
                className={`mt-1 w-full appearance-none rounded-md px-3 py-2 text-2xl text-slate-900 placeholder-slate-400 shadow-sm  ${
                  errors.countryCode ? "ring-2 ring-red-600" : "ring-1 ring-slate-200"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Enter first name"
                id="countryCode"
                value={value}
                onChange={onChange}
              >
                <option value="">Select country code</option>
                <option value="+91">India (+91)</option>
                <option value="+1">America (+1)</option>
              </select>
            )}
            name="countryCode"
          />
          {errors.countryCode && <p className="mt-1 text-red-600">{errors.countryCode.message}</p>}
        </div>

        {/* phone number field */}
        <div className="mt-8">
          <label htmlFor="phoneNumber" className="text-xl font-medium">
            Phone number
          </label>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: "Phone number is required",
              },
              pattern: {
                value: /^[0-9]*$/,
                message: "Only numbers allowed",
              },
              minLength: {
                value: 10,
                message: "Enter valid phone number",
              },
              maxLength: {
                value: 10,
                message: "Enter valid phone number",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <input
                className={`mt-1 w-full appearance-none rounded-md px-3 py-2 text-2xl text-slate-900 placeholder-slate-400 shadow-sm  ${
                  errors.phoneNumber ? "ring-2 ring-red-600" : "ring-1 ring-slate-200"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Enter phone number"
                onChange={onChange}
                value={value}
                id="phoneNumber"
              />
            )}
            name="phoneNumber"
          />
          {errors.phoneNumber && <p className="mt-1 text-red-600">{errors.phoneNumber.message}</p>}
        </div>

        {/* action buttons */}
        <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={() => setStep(2)}
            className="rounded-xl bg-gray-200 px-8 py-4 font-bold text-blue-600"
          >
            Back
          </button>
          <button type="submit" className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormThree;
