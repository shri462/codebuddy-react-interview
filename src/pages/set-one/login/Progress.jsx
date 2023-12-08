import { Icon } from "@iconify/react";
import React from "react";

const Progress = ({ step }) => {
  return (
    <div className="mb-12 mt-6 flex justify-around">
      <div>
        <div
          className={`flex items-center justify-center rounded-full border-2 border-blue-600 ${
            step !== 1 && "bg-blue-600"
          }`}
          style={{ width: 48, height: 48 }}
        >
          {step === 1 ? (
            <div className="rounded-full bg-blue-600" style={{ width: 12, height: 12 }}></div>
          ) : (
            <Icon icon="material-symbols:check" width="40" height="40" color="white" />
          )}
        </div>
        <p className="mt-2 text-lg">Step 1</p>
      </div>
      <div>
        <div
          className={`flex items-center justify-center rounded-full border-2  ${
            step === 2 ? "border-blue-600" : step === 3 ? "border-blue-600 bg-blue-600" : ""
          }`}
          style={{ width: 48, height: 48 }}
        >
          {step === 2 ? (
            <div className="rounded-full bg-blue-600" style={{ width: 12, height: 12 }}></div>
          ) : step === 3 ? (
            <Icon icon="material-symbols:check" width="40" height="40" color="white" />
          ) : (
            ""
          )}
        </div>
        <p className="mt-2 text-lg">Step 2</p>
      </div>
      <div>
        <div
          className={`flex items-center justify-center rounded-full border-2 ${
            step === 3 && "border-blue-600"
          }`}
          style={{ width: 48, height: 48 }}
        >
          {step === 3 ? (
            <div className="rounded-full bg-blue-600" style={{ width: 12, height: 12 }}></div>
          ) : (
            ""
          )}
        </div>
        <p className="mt-2 text-lg">Step 3</p>
      </div>
    </div>
  );
};

export default Progress;
