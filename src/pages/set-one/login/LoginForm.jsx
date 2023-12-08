import React, { useEffect, useState } from "react";
import Progress from "./Progress";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import { Link, useNavigation, useParams } from "react-router-dom";

const LoginForm = () => {
  const [step, setStep] = useState(1);

  const [userData, setUserData] = useState({
    emailId: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    countryCode: "",
    phoneNumber: "",
  });

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div className="rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <h1 className="text-4xl">Login Form</h1>
      <Progress step={step} setStep={setStep} />
      <div className="container mx-auto my-6 w-4/5">
        {step === 1 && (
          <FormOne userData={userData} setUserData={setUserData} step={step} setStep={setStep} />
        )}
        {step === 2 && (
          <FormTwo userData={userData} setUserData={setUserData} step={step} setStep={setStep} />
        )}
        {step === 3 && (
          <FormThree userData={userData} setUserData={setUserData} step={step} setStep={setStep} />
        )}
      </div>
    </div>
  );
};

export default LoginForm;
