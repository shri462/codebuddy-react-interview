import React from "react";
import { Controller, useForm } from "react-hook-form";

const FormTwo = ({ step, setStep, userData, setUserData }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: userData.firstName,
      lastName: userData.lastName,
      address: userData.address,
    },
  });

  const onSubmit = (data) => {
    setUserData((prevState) => ({
      ...prevState,
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
    }));
    setStep(3);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* first name field */}
        <div>
          <label htmlFor="firstName" className="text-xl font-medium">
            First Name
          </label>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: "First name is required",
              },
              minLength: {
                value: 2,
                message: "First name should be of min length of 2",
              },
              maxLength: {
                value: 50,
                message: "First name should not exceed length of 50",
              },
              pattern: {
                value: /^[A-Za-z]*$/,
                message: "Only alphabets allowed",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <input
                className={`mt-1 w-full appearance-none rounded-md px-3 py-2 text-2xl text-slate-900 placeholder-slate-400 shadow-sm  ${
                  errors.firstName ? "ring-2 ring-red-600" : "ring-1 ring-slate-200"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Enter first name"
                onChange={onChange}
                value={value}
                id="firstName"
              />
            )}
            name="firstName"
          />
          {errors.firstName && <p className="mt-1 text-red-600">{errors.firstName.message}</p>}
        </div>

        {/* last name field */}
        <div className="mt-8">
          <label htmlFor="lastName" className="text-xl font-medium">
            Last Name <span className="font-thin text-gray-400">(optional)</span>
          </label>
          <Controller
            control={control}
            rules={{
              pattern: {
                value: /^[A-Za-z]*$/,
                message: "Only alphabets allowed",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <input
                className={`mt-1 w-full appearance-none rounded-md px-3 py-2 text-2xl text-slate-900 placeholder-slate-400 shadow-sm  ${
                  errors.lastName ? "ring-2 ring-red-600" : "ring-1 ring-slate-200"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Enter last name"
                onChange={onChange}
                value={value}
                id="lastName"
              />
            )}
            name="lastName"
          />
          {errors.lastName && <p className="mt-1 text-red-600">{errors.lastName.message}</p>}
        </div>

        {/* address field */}
        <div className="mt-8">
          <label htmlFor="address" className="text-xl font-medium">
            Address
          </label>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: "Address is required",
              },
              minLength: {
                value: 10,
                message: "Address should be of min length of 10",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <input
                className={`mt-1 w-full appearance-none rounded-md px-3 py-2 text-2xl text-slate-900 placeholder-slate-400 shadow-sm  ${
                  errors.address ? "ring-2 ring-red-600" : "ring-1 ring-slate-200"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Enter last name"
                onChange={onChange}
                value={value}
                id="address"
              />
            )}
            name="address"
          />
          {errors.address && <p className="mt-1 text-red-600">{errors.address.message}</p>}
        </div>

        {/* action buttons */}
        <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={() => setStep(1)}
            className="rounded-xl bg-gray-200 px-8 py-4 font-bold text-blue-600"
          >
            Back
          </button>
          <button type="submit" className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white">
            Save and Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormTwo;
