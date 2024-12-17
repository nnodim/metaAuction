import { ExternalLink } from "lucide-react";
import { Link } from "react-router";
import { Separator } from "./ui/separator";

const footerLinks = {
  main: [
    { name: "Explore", href: "#" },
    { name: "About", href: "#" },
    { name: "Listed NFTs", href: "#" },
    { name: "Auction", href: "#" },
  ],
  socials: [
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Discord", href: "#" },
    { name: "Telegram", href: "#" },
  ],
};
export const Footer = () => {
  return (
    <footer className="bg-white text-black py-16 px-8">
      <div className="max-w-screen-xl mx-auto flex justify-between">
        <div className="flex flex-col justify-between">
          <h2 className="text-5xl tracking-[-1.92px] w-full max-w-lg font-bold">
            SECURE YOUR LIMITED EDITION NFT TODAY
          </h2>
          <Link
            to="#"
            className="text-blue-500 hover:text-blue-400 text-xl inline-flex items-center gap-2 underline underline-offset-4"
          >
            How it works
            <ExternalLink className="h-5 w-5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-32 gap-y-4">
          <div className="flex flex-col space-y-4">
            {footerLinks.main.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-[#706666] text-2xl"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="space-y-4 flex flex-col">
            {footerLinks.socials.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-[#706666] text-2xl"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Separator className="my-8 bg-[#a4a4a4]" />
      <p className="text-[#6f6565] text-center text-lg">© MetaAuction. All rights reserved</p>
    </footer>
  );
};
