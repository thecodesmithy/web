import React from "react";
import Section from "./components/section";
import SoftwareBg from "./img/bg-sw.png";
import DevOpsBg from "./img/bg-devops.png";
import TeachingBg from "./img/bg-teaching.png";

export default function () {
  return (
    <div
      className="min-w-screen min-h-screen grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2"
      style={{ backgroundColor: "#001219" }}
    >
      <div className="flex flex-col justify-end h-screen md:h-full p-4 text-white">
        <h2 className="text-6xl">Code Smithy</h2>
        <p className="text-sm">Whelp! You&apos;ve found us...</p>
      </div>
      <Section
        background={SoftwareBg}
        title="Software Engineering"
        description="Some text goes here..."
      />
      <Section background={DevOpsBg} title="DevOps" description="Some text goes here..." />
      <Section
        background={TeachingBg}
        title="Coaching &amp; Mentoring"
        description="Some text goes here..."
      />
    </div>
  );
}
