import Image from "next/image";
import Link from "next/link";
import React from "react";
import DesktopLogo from "../../../public/airbnb-desktop.png"
import { UserNav } from "./UserNav";

function Navbar() {
  return (
    <div className="w-full border-b border-green-500">
      <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
        
        <Link href="/">
         <h1 className="text-green-800 text-4xl ">GMP</h1>
        </Link>
        <div className="rounded-full border px-5 py-5">
          <p>Hello From Search</p>
        </div>

        <UserNav/>
      </div>
    </div>
  );
}

export default Navbar;
