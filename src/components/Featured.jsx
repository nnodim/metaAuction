import {
    ArrowRight,
    Clock,
    DollarSign,
    Gavel,
    Heart
} from "lucide-react";
import PropTypes from "prop-types";
import { Badge } from "./ui/badge";
import { BitcoinLogo } from "./ui/BitcoinLogo";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const nftData = [
  {
    id: 1,
    title: "NFT 1",
    image:
      "https://res.cloudinary.com/dr6bek9dv/image/upload/f_auto,q_auto/v1/meta-aution/e7k0lsnyrxlpnhmmjlie",
    likes: 135,
    timeLeft: "2 days left",
    price: "456,000",
    usdPrice: "0.456",
  },
  {
    id: 2,
    title: "NFT 2",
    image:
      "https://res.cloudinary.com/dr6bek9dv/image/upload/f_auto,q_auto/v1/meta-aution/e7k0lsnyrxlpnhmmjlie",
    likes: 135,
    timeLeft: "2 days left",
    price: "456,000",
    usdPrice: "0.456",
  },
  {
    id: 3,
    title: "NFT 3",
    image:
      "https://res.cloudinary.com/dr6bek9dv/image/upload/f_auto,q_auto/v1/meta-aution/e7k0lsnyrxlpnhmmjlie",
    likes: 135,
    timeLeft: "2 days left",
    price: "456,000",
    usdPrice: "0.456",
  },
];

const NFTCard = ({ nft }) => {
  return (
    <Card className="bg-[#181818] border-none rounded-3xl">
      <CardContent className="p-6 flex flex-col gap-4">
        <div className="relative overflow-hidden w-full h-[300px] rounded-2xl bg-[#828282]">
          <img
            src={nft.image}
            alt={nft.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute flex items-center bottom-0 w-full h-12 px-8 py-2 bg-[#11111199] backdrop-blur-[44px]">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-[#ffffff99]" />
                <p className="text-sm text-[#ffffff99]">{nft.timeLeft}</p>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-5 h-5 text-[#ffffff99]" />
                <p className="text-sm text-[#ffffff99]">{nft.likes}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">{nft.title}</h3>
            <Badge className="text-sm font-bold text-[#34c759] rounded-full bg-[#ffffff05]">
              For Sale
            </Badge>
          </div>
          <div className="flex items-start justify-between">
            <p className="text-sm text-[#ffffff99]">Price</p>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1">
                {/* <img
                  src="https://via.placeholder.com/20"
                  alt=""
                  className="w-6 h-6"
                /> */}
                <BitcoinLogo />
                <p className="text-lg font-bold text-white">{nft.price} BTC</p>
              </div>
              <p className="text-sm text-white">&gt;~ $ {nft.usdPrice}</p>
            </div>
          </div>
          <div className="flex gap-2.5">
            <Button
              variant="outline"
              className="w-full h-12 flex-1 gap-1.5 hover:bg-transparent bg-transparent rounded-full border-[#5b5b5b] text-white hover:text-white"
            >
              <DollarSign className="w-5 h-5" /> Buy
            </Button>
            <Button
              variant="outline"
              className="w-full h-12 flex-1 gap-1.5 hover:bg-transparent bg-transparent rounded-full border-[#5b5b5b] text-white hover:text-white"
            >
              <Gavel className="w-5 h-5" />
              Auction
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const Featured = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <div className="flex flex-col items-center gap-8 py-20">
        <div className="w-full flex items-center">
          <h2 className="text-3xl font-semibold bg-gradient-to-b from-white to-[#535353] bg-clip-text text-transparent">
            Featured NFTs
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {nftData.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
        <Button
          variant="outline"
          className="w-full hover:bg-transparent bg-transparent py-6 gap-2.5 text-lg h-auto font-semibold border-[#5b5b5b] rounded-full hover:text-white text-white"
        >
          View More
          <ArrowRight className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Featured;

NFTCard.propTypes = {
  nft: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timeLeft: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    usdPrice: PropTypes.string.isRequired,
  }).isRequired,
};
