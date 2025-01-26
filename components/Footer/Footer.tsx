import Link from "next/link";
import { Scramble } from "../Scramble";

export const Footer = () => {
  return (
    <div className="bg-[#f3f3f3] mt-auto p-4 text-xs">
      <div className="flex gap-8 gap-y-2 flex-wrap uppercase">
        <FooterLink href="https://smnmhmdy.itch.io">Itch.io</FooterLink>
        <FooterLink href="https://gamejolt.com/@SmnMhmdy">Gamejolt</FooterLink>
        <FooterLink href="https://www.youtube.com/@samanmhmdy3539">
          Youtube
        </FooterLink>
        <FooterLink href="https://samgamesio.itch.io">
          SamGames (itch)
        </FooterLink>
        <FooterLink href="https://samandev.itch.io">SamanDev (itch)</FooterLink>
        <FooterLink href="https://gamejolt.com/@samandev">
          SamanDev (gamejolt)
        </FooterLink>
        <FooterLink href="https://samswebspace.neocities.org/">
          WebSpace
        </FooterLink>
      </div>
      <br />
      <hr className="border-black opacity-10" />
      <br />
      <div>
        <Scramble text="Programmer // Web Developer // Game Developer // Persian // 24YRS" />
      </div>
      <br />
      <Scramble text="© 2025" />
      <Scramble text="Independently run." />
      <Scramble text="Power to freedom." />
      <br />
      <div>
        <p>Contact:</p>
        <FooterLink href="mailto:autosam.sm@gmail.com">
          autosam.sm@gmail.com
        </FooterLink>
      </div>
    </div>
  );
};

const FooterLink = ({ href, children }: { href: string; children: any }) => {
  return (
    <Link className="hover:underline" href={href} target="_blank">
      {children}
    </Link>
  );
};
