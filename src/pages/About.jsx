import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { WeeklyDigest } from "@/components/WeeklyDigest";

const AboutData = [
  {
    text: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageSrc:
      "https://res.cloudinary.com/dr6bek9dv/image/upload/f_auto,q_auto/v1/meta-aution/vlctp42dojs6onxey2l4",
    imageAlt: "buy",
    right: true,
  },
  {
    text: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageSrc:
      "https://res.cloudinary.com/dr6bek9dv/image/upload/f_auto,q_auto/v1/meta-aution/q8jngizc1eaox9glhj7w",
    imageAlt: "sell",
    right: false,
  },
  {
    text: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageSrc:
      "https://res.cloudinary.com/dr6bek9dv/image/upload/f_auto,q_auto/v1/meta-aution/ecikb7zglld6kb3mhksy",
    imageAlt: "auction",
    right: true,
  },
];
export const About = () => {
  return (
    <main className="w-full max-w-screen-xl mx-auto my-12">
      <Card className="bg-transparent border-none">
        <CardContent className="flex flex-col items-center justify-center p-0 gap-16">
          <div className="flex items-end justify-between w-full">
            <h1 className="text-[80px] bg-gradient-to-b from-white to-[#535353] bg-clip-text text-transparent">
              About Us
            </h1>
            <p className="text-2xl text-white max-w-[480px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              fuga esse nemo error molestiae sed nesciunt veniam architecto,
            </p>
          </div>
          <Separator className="w-full" />
          <div className="flex flex-col gap-20 w-full">
            {AboutData.map((data) => (
              <div
                key={data.imageAlt}
                className={`flex ${
                  data.right ? "flex-row-reverse" : "flex-row"
                } items-center justify-between gap-8 w-full`}
              >
                <img
                  src={data.imageSrc}
                  alt={data.imageAlt}
                  className="w-[500px] h-full object-cover"
                />
                <p className="text-lg text-white max-w-[480px]">{data.text}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <WeeklyDigest />
    </main>
  );
};
