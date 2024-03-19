"use client";

import React, { useState, useEffect } from "react";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { icon } from "leaflet";
import { Button } from "../ui/button";
import Link from "next/link";

// Green marker icon URL
const GREEN_ICON_URL =
  "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png";

const GREEN_ICON = icon({
  iconUrl: GREEN_ICON_URL,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function SelectMap() {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
 

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="bg-green-50 items-center">
      {latitude && longitude && (
        <MapContainer
          // scrollWheelZoom={false}
          className="h-[60vh] rounded-lg relative z-0"
          center={[latitude, longitude]}
          zoom={14}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[latitude, longitude]} icon={GREEN_ICON}>
            <Tooltip>Your Location</Tooltip>
          </Marker>
        </MapContainer>
      )}
      <div className="flex items-center justify-center">
        <Link
          href={{
            pathname: "/selectimage",
            // the data
          }}
        >
          <Button>Continue</Button>
        </Link>
      </div>
    </div>
  );
}

export default SelectMap;
