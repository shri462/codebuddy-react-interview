import React from "react";
import { Controller, useForm } from "react-hook-form";

const FormOne = ({ step, setStep, userData, setUserData }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      emailId: userData.emailId,
      password: userData.password,
    },
  });

  const onSubmit = (data) => {
    setUserData((prevState) => ({ ...prevState, emailId: data.emailId, password: data.password }));
    setStep(2);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* email field */}
        <div>
          <label htmlFor="emailId" className="text-xl font-medium">
            Email
          </label>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter valid email id",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <input
                className={`mt-1 w-full appearance-none rounded-md px-3 py-2 text-2xl text-slate-900 placeholder-slate-400 shadow-sm  ${
                  errors.emailId ? "ring-2 ring-red-600" : "ring-1 ring-slate-200"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Enter email id"
                onChange={onChange}
                value={value}
                id="emailId"
              />
            )}
            name="emailId"
          />
          {errors.emailId && <p className="mt-1 text-red-600">{errors.emailId.message}</p>}
        </div>

        {/* password field */}
        <div className="mt-8">
          <label htmlFor="password" className="text-xl font-medium">
            Password
          </label>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: "Password is required",
              },
              pattern: {
                value:
                  /^(?=.*[A-Z].*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d.*\d)(?=.*[!@#$%^&*()_+{}|;':",.<>?/\\~-].*[!@#$%^&*()_+{}|;':",.<>?/\\~-])[A-Za-z\d!@#$%^&*()_+{}|;':",.<>?/\\~-]{8,}$/,
                message: "Enter valid password",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <input
                className={`mt-1 w-full appearance-none rounded-md px-3 py-2 text-2xl text-slate-900 placeholder-slate-400 shadow-sm  ${
                  errors.password ? "ring-2 ring-red-600" : "ring-1 ring-slate-200"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                type="password"
                placeholder="Create password"
                onChange={onChange}
                value={value}
                id="password"
              />
            )}
            name="password"
          />
          {errors.password && <p className="mt-1 text-red-600">{errors.password.message}</p>}
          <p className="mt-1 text-gray-400">
            Password must contain minimum 2 capital letters, 2 small letter, 2 numbers and 2 special
            characters.
          </p>
        </div>

        {/* action buttons */}
        <div className="mt-8 flex justify-end">
          <button type="submit" className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white">
            Save and Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormOne;
