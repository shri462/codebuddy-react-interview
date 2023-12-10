import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";

const ImageSlider = () => {
  const [sliderData, setSliderData] = useState([]);
  const containerRef = useRef(null);
  useEffect(() => {
    fetch("https://codebuddy.review/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Response data:", data);
        setSliderData(data.data);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  }, []);

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 160;
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 160;
    }
  };

  return (
    <div className="flex w-full gap-2 self-center md:w-4/5">
      <button
        onClick={scrollLeft}
        className="flex cursor-pointer items-center rounded-sm bg-gray-500 px-1"
      >
        <Icon icon="uiw:left" color="white" width="24" height="24" />
      </button>
      <div className="flex gap-4 overflow-x-hidden " ref={containerRef}>
        {sliderData.map((slide) => (
          <div className="rounded-md bg-gray-700">
            <div className="line-clamp-1 px-2 py-1 text-sm text-white">{slide.writeup}</div>
            <img
              src={slide.image}
              className="h-20 w-40 max-w-none rounded-bl-md rounded-br-md object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={scrollRight}
        className="flex cursor-pointer items-center rounded-sm bg-gray-500 px-1"
      >
        <Icon icon="uiw:right" color="white" width="24" height="24" />
      </button>
    </div>
  );
};

export default ImageSlider;
