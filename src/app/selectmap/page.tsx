import SelectMap from "@/components/custom/SelectMap";
import React from "react";
import dynamic from 'next/dynamic';


function page() {
  const Map = dynamic(() => import('@/components/custom/SelectMap'), { ssr: false })

  return (
    <div >
        <Map/>
      
    </div>
  );
}

export default page;
