import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Card, CardContent } from "./ui/card";

const images = [
  {
    src: "https://res.cloudinary.com/dr6bek9dv/image/upload/f_auto,q_auto/v1/meta-aution/vlctp42dojs6onxey2l4",
    alt: "buy",
  },
  {
    src: "https://res.cloudinary.com/dr6bek9dv/image/upload/f_auto,q_auto/v1/meta-aution/q8jngizc1eaox9glhj7w",
    alt: "sell",
  },
  {
    src: "https://res.cloudinary.com/dr6bek9dv/image/upload/f_auto,q_auto/v1/meta-aution/ecikb7zglld6kb3mhksy",
    alt: "auction",
  },
];
export const About = () => {
  return (
    <section className="flex flex-col max-w-screen-xl mx-auto items-center justify-center gap-8 py-8">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-3xl font-semibold bg-gradient-to-b from-white to-[#535353] bg-clip-text text-transparent">
          About
        </h2>
        <Link
          to="#"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-white bg-transparent rounded-full px-6 py-3 border-[#5b5b5b] border text-lg font-semibold hover:bg-white/10 transition-all"
        >
          Read More
          <ArrowRight className="w-6 h-6 ml-2" />
        </Link>
      </div>
      <div className="flex flex-col items-center gap-[60px] w-full">
        <h3 className="text-[80px] leading-[80px] bg-gradient-to-b from-white to-[#535353] bg-clip-text text-transparent font-audioWide">
          MetaAuction
        </h3>

        <Card className="bg-transparent border-none">
          <CardContent className="flex items-center p-0 gap-4">
            {images.map((image) => (
              <img
                key={image.alt}
                src={image.src}
                alt={image.alt}
                className="w-[400px] h-full object-cover"
              />
            ))}
          </CardContent>
        </Card>
        <p className="max-w-[520px] text-2xl text-center text-white">
          MetaAuction is a digital marketplace for non-fungible tokens (NFTs).
          <br />
          Buy, sell, and auction digital items.
        </p>
      </div>
    </section>
  );
};
