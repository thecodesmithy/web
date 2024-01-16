import React from "react";

export default function ({ background, title, description }) {
  return (
    <div
      className="flex flex-col justify-end h-screen md:h-full p-4 text-white"
      style={{
        backgroundImage: background
          ? `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)), url(${background})`
          : "",
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-6xl">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
}
