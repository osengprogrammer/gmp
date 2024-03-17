import { MapFilterItems } from "@/components/custom/MapFilterItems";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Suspense } from 'react'
export default function Home() {
  return (
    <div className="container mx-auto px-5 lg:px-10">
      <Suspense>
      <MapFilterItems />
      </Suspense>
    </div>
  );
}
