import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { Icon } from "@iconify/react";

const BingHomepage = () => {
  const [imge, setImge] = useState("");

  useEffect(() => {
    fetch("https://codebuddy.review/get-bgimg")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Response data:", data);
        setImge(data.data);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  }, []);

  return (
    <div
      className="min-h-[100dvh] bg-cover bg-center bg-no-repeat p-7 xl:px-48"
      style={{
        backgroundImage: `url("${imge}")`,
      }}
    >
      <div className="container mx-auto">
        <Header />

        <div className="mt-48 flex gap-2 rounded-xl bg-white px-4 py-2 lg:mx-64">
          <Icon icon="basil:search-outline" color="gray" width="32" height="32" />
          <input className="w-full focus:outline-none" autoFocus placeholder="Ask me anything..." />
          <Icon icon="ph:microphone-light" color="blue" width="32" height="32" />
          <Icon icon="tabler:capture" color="blue" width="32" height="32" />
        </div>
      </div>
    </div>
  );
};

export default BingHomepage;