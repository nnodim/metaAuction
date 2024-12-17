import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";

const data = {
  title: "Join Our Weekly Digest",
  description:
    "Get exclusive updates and promotions directly to your news feed.",
};

export const WeeklyDigest = () => {
  return (
    <section className="w-full  my-12 max-w-screen-xl mx-auto flex items-center justify-center">
      <Card
        className="bg-[url('https://res.cloudinary.com/dr6bek9dv/image/upload/f_auto,q_auto/v1/meta-aution/h0mc9j7flcprnxijfn8e')] bg-cover bg-no-repeat rounded-3xl overflow-hidden w-full"
      >
        <CardContent className="py-16 px-8 flex flex-col items-center gap-12 relative">
          <div className="absolute inset-0 overflow-hidden w-full h-full">
            <div className="w-full h-full bg-gradient-to-b from-transparent to-black/30" />
          </div>
          <div className="flex flex-col items-center gap-4 relative z-10">
            <h2 className="text-4xl font-bold text-white">{data.title}</h2>
            <p className="max-w-[516px] w-full text-2xl text-center text-[#f7f7f7]">
              {data.description}
            </p>
          </div>
          <div className="flex items-center w-full gap-2 p-2 rounded-full border-2 border-[#5b5b5b] bg-transparent max-w-[516px]">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent flex-1 border-none text-[#f7f7f7] placeholder:text-[#f7f7f7] text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button className="px-12 py-5 rounded-full border border-[#5b5b5b] bg-transparent hover:bg-white/10 text-white text-lg">
              Join Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
