import { ArrowRight } from "lucide-react";
import { Button } from "./components/ui/button";
import Featured from "./components/Featured";
import { About } from "./components/About";
import { WeeklyDigest } from "./components/WeeklyDigest";

const heroData = {
  title: "Explore NFTs like never before",
  subtitle:
    "Browse the hottest NFTs and discover their price for purchase and auction",
  buttons: [
    {
      text: "Explore Collection",
      href: "#",
      variant: "ghost",
      className: "w-full hover:text-white hover:bg-transparent",
      icon: ArrowRight,
    },
    {
      text: "Connet Wallet",
      variant: "outline",
      className:
        "w-full bg-transparent rounded-full px-6 py-3 border-[#5b5b5b]",
      href: "#",
    },
  ],
};
export const App = () => {
  return (
    <main>
      <section className="my-14 md:my-20 flex flex-col items-center gap-12">
        <h1 className="w-full max-w-[800px] text-center text-[80px] leading-[80px] bg-gradient-to-b from-white to-[#535353] bg-clip-text text-transparent font-audioWide">
          {heroData.title}
        </h1>
        <div className="flex flex-col items-center gap-8">
          <p className="max-w-[520px] text-2xl text-center font-medium text-[#f7f7f7]">
            {heroData.subtitle}
          </p>
          <div className="bg-[#11111199] border-[#5b5b5b] border rounded-full">
            <div className="flex items-center gap-4 p-2">
              {heroData.buttons.map((button) => (
                <Button
                  key={button.text}
                  href={button.href}
                  variant={button.variant}
                  className={`text-white text-lg h-auto ${button.className}`}
                >
                  {button.text}
                  {button.icon && <button.icon className="w-6 h-6" />}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Featured />
      <About />
      <WeeklyDigest />
    </main>
  );
};
