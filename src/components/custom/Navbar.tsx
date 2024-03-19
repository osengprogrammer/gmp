import Image from "next/image";
import Link from "next/link";
import React from "react";
import DesktopLogo from "../../../public/airbnb-desktop.png"
import { UserNav } from "./UserNav";
import SearchComponent from "./SearchComponent";

function Navbar() {
  return (
    <div className="w-full border-b border-green-100">
      <div className="flex items-center justify-between container mx-auto ">
        
        <Link href="/">
         <h1 className="text-green-800 text-2xl lg:text-4xl">GMP</h1>
        </Link>
        <SearchComponent/>
        <UserNav/>
      </div>
    </div>
  );
}

export default Navbar;
