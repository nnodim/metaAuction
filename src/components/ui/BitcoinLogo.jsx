import { Bitcoin } from "lucide-react";
import { AspectRatio } from "./aspect-ratio";

export const BitcoinLogo = () => {
  return (
    <div className="w-6 h-6 mr-1">
      <AspectRatio
        ratio={1}
        className="bg-[#f7931a] rounded-full flex items-center justify-center"
      >
        <Bitcoin className="w-4 h-4 text-white" />
      </AspectRatio>
    </div>
  );
};
