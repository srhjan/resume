import React, { useState } from "react";
import image from "./assets/images/poune.jpg";

const job = {
  title1: `Conception & Rédaction web`,
  title2: `Assistante webmarketing`
};
const information = {
  age: `26 ans`,
  other: `Titulaire du permis B`
};
const details = {
  title: `Contact`,
  content: `jan.sarah@outlook.com
06 71 70 94 82`
};

export default () => {
  const [color, setColor] = useState("");
  const colors = ["blue", "red", "yellow", "purple", "green"];
  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center">
        <img src={image} className="w-64 pt-10 pb-10 mx-10" />
      </div>
      <div
        className={`flex justify-center items-center text-3xl uppercase font-bold mx-10 mb-4 text-${color}-600`}
        onClick={() => {
          var nextColor = colors[Math.floor(Math.random() * colors.length)];
          setColor(nextColor);
        }}
      >
        Sarah JAN
      </div>
      <div className="text-base mx-10 text-gray-600">{job.title1}</div>
      <div className="text-base mx-10 text-gray-600">{job.title2}</div>
      <div className="text-base mt-5 mx-10">{information.age}</div>
      <div className="text-base mx-10 text">{information.other}</div>
      <div className="text-xl uppercase mx-10 mt-5 text-blue-400">
        {details.title}
      </div>
      <div className="text-base mx-10 whitespace-pre-wrap">
        {details.content}
      </div>
    </div>
  );
};

// <div class="text-2xl uppercase m-10">Sarah JAN</div>
