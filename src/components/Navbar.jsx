import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Input } from "./ui/input";
import ROUTES from "@/constants/routes";
import { Link } from "react-router";

const navItems = {
  left: [
    { name: "About", href: ROUTES.ABOUT },
    { name: "Create NFT", href: ROUTES.CREATE_NFT },
  ],
  right: [
    { name: "Auction", href: ROUTES.AUCTION },
    { name: "Dashboard", href: ROUTES.DASHBOARD },
  ],
};

export const Navbar = () => {
  return (
    <header className="flex items-center justify-between max-w-screen-xl mx-auto">
      <Link
        to={ROUTES.HOME}
        className="text-3xl bg-gradient-to-b from-white to-[#535353] bg-clip-text text-transparent font-bold font-audioWide"
      >
        MetaAuction
      </Link>
      <NavigationMenu className="rounded-full bg-[#11111199] px-8 py-3">
        <NavigationMenuList className="flex items-center gap-8">
          {navItems.left.map((item) => (
            <NavigationMenuItem key={item.name}>
              <NavigationMenuLink
                className="text-[#8e8e8e] font-semibold hover:text-white transition-colors"
                href={item.href}
              >
                {item.name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem>
            <div className="relative">
              <div className="flex items-center gap-7 px-6 py-4 bg-[#151816] rounded-full border border-[#5b5b5b]">
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4 text-[#8e8e8e]" />
                  <Input
                    type="text"
                    placeholder="Search for gems"
                    className="bg-transparent border-0 text-[#8e8e8e] placeholder:text-[#8e8e8e] text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <SlidersHorizontal className="h-4 w-4 text-[#8e8e8e]" />
              </div>
            </div>
          </NavigationMenuItem>
          {navItems.right.map((item) => (
            <NavigationMenuItem key={item.name}>
              <NavigationMenuLink
                className="text-[#8e8e8e] font-semibold hover:text-white transition-colors"
                href={item.href}
              >
                {item.name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div>
        <Button
          variant="outline"
          className="hover:text-[#8e8e8e] px-6 py-5 h-auto font-semibold text-lg border-[#8e8e8e] rounded-full hover:bg-[#151816] bg-transparent text-white transition-colors"
        >
          Connect Wallet
        </Button>
      </div>
    </header>
  );
};
