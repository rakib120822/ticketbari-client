import React from "react";
import LatestCard from "../../../component/card/LatestCard";

const AdvertisementSection = ({ AdvertisementSectionData }) => {
  console.log(AdvertisementSectionData);
  return (
    <div className="px-10">
      <h1 className="text-4xl font-bold my-10 text-center">
        Advertise <span className="text-primary">Section</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {AdvertisementSectionData.map((data, index) => (
          <LatestCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default AdvertisementSection;
