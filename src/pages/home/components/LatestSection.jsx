import React from "react";
import LatestCard from "../../../component/card/LatestCard";

const LatestSection = ({ LatestSectionData }) => {
  console.log(LatestSectionData);
  return (
    <div className="px-10">
      <h1 className="text-4xl font-bold my-10 text-center">
        Latest <span className="text-primary">Section</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {LatestSectionData.map((data) => (
          <LatestCard data={data} />
        ))}
      </div>
    </div>
  );
};

export default LatestSection;
