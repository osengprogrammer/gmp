import { MapFilterItems } from "@/components/custom/MapFilterItems";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-5 lg:px-10">
      <MapFilterItems />
    </div>
  );
}
