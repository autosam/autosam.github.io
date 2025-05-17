"use client";

import Link from "next/link";
import { Scramble } from "../Scramble";
import { useAtom } from "jotai";
import { headerVisibilityAtom } from "@/store";
import classNames from "classnames";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [isVisible, setIsHeaderVisible] = useAtom(headerVisibilityAtom);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setIsHeaderVisible(true);
    }
  }, [pathname, setIsHeaderVisible]);

  useEffect(() => {
    if (isVisible) document.body.classList.remove("scroll-black");
    else document.body.classList.add("scroll-black");
  }, [isVisible]);

  const className = classNames(
    "bg-whitee mix-blend-difference text-white px-4 text-sm sticky top-0 left-0 w-full flex justify-start items-center z-40 __header [&>*]:w-25% transition-all duration-500",
    {
      "h-0 overflow-hidden opacity-0 duration-200 pointer-events-none":
        !isVisible,
      "h-16": isVisible,
    }
  );

  return (
    <div className={className}>
      <Link href="/" className="flex items-center gap-3">
        <img className="h-10 invert" src="/logo2.png" />
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
