"use client";

import Link from "next/link";
import { Scramble } from "../Scramble";

export const Header = () => {
  return (
    <div className="bg-white px-4 text-sm sticky top-0 left-0 w-full h-16 flex justify-start items-center z-50 __header [&>*]:w-25%">
      <Link href="/" className="flex items-center gap-3">
        <img className="h-10" src="/logo2.png" />
        <div className="font-bold flex flex-col">
          <div className="h-3">
            <Scramble delay={1000 + Math.random() * 8000} text="SMN MHMDY" />
          </div>
          <small>
            <Scramble delay={1000 + Math.random() * 8000} text="PRODUCTIONS" />
          </small>
        </div>
      </Link>
    </div>
  );
};
