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
          <Image
            src={DesktopLogo}
            alt="Desktop Logo"
            className="w-32 hidden lg:block"
          />
          <Image
            src={DesktopLogo}
            alt="Desktop Logo"
            className="w-12 block lg:hidden"
          />
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
