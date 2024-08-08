"use client";

import React, { useState } from "react";
import { ProjectsCard } from "@/components";
export default function ShowMore() {
  const [isToggle, setIsToggle] = useState(false);

  const toggleFunction = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div className="w-full flex px-5 flex-col items-center">
      <div
        onClick={toggleFunction}
        className="w-fit flex flex-col cursor-pointer"
      >
        <p className="text-lg flex flex-col items-start justify-center font-semibold">
          show more projects
        </p>
        <span className="w-[28px] h-0  bg-black border-[1.5px] border-solid border-black "></span>
      </div>

      {isToggle && (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 px-6 py-12 gap-8 place-items-center justify-between  ">
          <ProjectsCard
            seeprojectlink="https://github.com/danielAdama/NYC_taxi_trip_duration"
            img=""
            name="NYC Taxi Trip Duration"
            descrp1="Completed the New York City Taxi trip duration and achieved an R squared of 0.9993 and a Root mean squared"
            descrp2="error of 0.214 to predict the trip duration for your taxi driver to your location which can be Uber, Bolt etc"
            tool1="Sklearn"
            tool2="Numpy"
            tool3="Pandas"
          />
          <ProjectsCard
            img=""
            name="Sales Analytics Dashboard"
            descrp1="Crafted a sales dashboard, providing insights into revenue, sales quantities by market, top customers, and product performance."
            descrp2="he dashboard offers a comprehensive overview of sales metrics, highlighting trends over time and facilitating data-driven decision-making for stakeholders"
            tool1="MySQL"
            tool2="PowerBI"
            tool3=""
            seeprojectlink="https://github.com/danielAdama/sales-analytics-visualization"
          />
          <ProjectsCard
            img=""
            name="Face Recognition and Verification Web App"
            descrp1="Developed a Face Recognition and Verification Web Application enabling users to train a facial recognition model by uploading images, verify faces against trained data. "
            descrp2="Achieved seamless deployment using Docker Compose for easy setup, ensuring efficient usage. Deployed on AWS and hosted online for accessibility."
            tool1="OpenCV"
            tool2="Flask"
            tool3="AWS"
            seeprojectlink="https://github.com/danielAdama/face-rec-web"
          />
          <ProjectsCard
            img=""
            name=""
            descrp1=""
            descrp2=""
            tool1=""
            tool2=""
            tool3=""
            seeprojectlink=""
          />
        </div>
      )}
    </div>
  );
}
