"use client";

import Link from "next/link";
import { Scramble } from "../Scramble";

export const Header = () => {
  return (
    <div className="bg-white p-4 text-sm fixed top-0 left-0 w-full flex justify-between & > *:w-25%">
      <div>{/* <Link href="/">HOME</Link> */}</div>
      <div className="font-bold">
        <Scramble text="SMN MHMDY PRODUCTIONS" />
      </div>
      <div>{/* <Link href="/">CONTACT</Link> */}</div>
    </div>
  );
};
