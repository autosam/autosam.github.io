import { Scramble } from "@/components/Scramble";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Not Found",
};

export default function NotFound() {
  return (
    <div className="flex items-center justify-center content-center flex-col h-64">
      <h1 className="text-6xl font-bold">404!</h1>
      <p>I don't think this is a valid url.</p>
      <br />
      <Link className="text-sm bg-black text-white" href="/">
        {"</"} GO BACK
      </Link>
    </div>
  );
}
