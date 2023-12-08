import React from "react";
import { Outlet } from "react-router-dom";

const LoginFormContainer = () => {
  return (
    <div className="min-h-[100dvh] bg-gradient-to-tr from-[#FBAB7E] to-[#F7CE68] py-7 text-black">
      <div className="md:w-4/3 mx-auto sm:container lg:w-4/6 xl:w-1/2">
        <Outlet />
      </div>
    </div>
  );
};

export default LoginFormContainer;
