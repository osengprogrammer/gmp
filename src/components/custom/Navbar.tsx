import Image from "next/image";
import Link from "next/link";
import React from "react";

import { UserNav } from "./UserNav";


function Navbar() {
  return (
    <div className="w-full border-b border-green-100 flex items-center justify-between mx-auto px-2">
     
        
        <Link href="/">
         <h1 className="text-green-800 text-lg lg:text-4xl">GMP</h1>
        </Link>
  
        <UserNav/>
   
    </div>
  );
}

export default Navbar;
