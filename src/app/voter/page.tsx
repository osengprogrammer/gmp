import TestGeolocation from "@/components/custom/GetUserLocation";
import ImageOcr from "@/components/custom/ImageOcr";
import VoterForm from "@/components/custom/VoterForm";
import React from "react";

function page() {
  return (
    <div>
      {/* <TestGeolocation /> */}
      <ImageOcr />
      <VoterForm />
    </div>
  );
}

export default page;
