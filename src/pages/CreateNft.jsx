import { BitcoinLogo } from "@/components/ui/BitcoinLogo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Upload, X } from "lucide-react";

export const CreateNft = () => {
  return (
    <main className="max-w-screen-xl mx-auto py-[120px]">
      <h1 className="text-[50px] mb-8 bg-gradient-to-b from-white to-[#535353] bg-clip-text text-transparent">
        Create NFT
      </h1>
      <Card className="bg-[#181818] border-none shadow-lg">
        <CardContent className="p-6 space-y-5">
          <div className="flex justify-between items-center">
            <div>
              <label className="text-lg font-bold text-white">
                Media Upload
              </label>
              <p className="text-sm text-[#6d6d6d]">Add a media file</p>
            </div>
            <Button variant="ghost" className="text-white">
              <X className="w-6 h-6" />
            </Button>
          </div>
          <div className="flex flex-col justify-center items-center p-6 gap-3 bg-[#232323] border border-dashed border-[#1849d6] rounded-3xl">
            <Upload className="w-9 h-9 text-[#1849d6]" />
            <div className="text-center">
              <p className="text-sm text-white">
                Drag and drop file(s) or{" "}
                <label
                  htmlFor="file-upload"
                  className="text-[#1849d6] font-semibold cursor-pointer"
                >
                  browse
                </label>
                <input id="file-upload" type="file" className="sr-only" />
              </p>
              <p className="text-xs text-[#6d6d6d] mt-3">
                Max 10mb files allowed
              </p>
            </div>
          </div>
          <p className="text-xs text-[#6d6d6d]">
            Supported formats: .jpg, .jpeg, .png
          </p>
          <div className="space-y-4">
            <label className="text-lg font-bold text-white">Price</label>
            <div className="flex items-center gap-2 p-4 bg-[#1111110d] rounded-lg border border-[#303030]">
              <Input
                placeholder="0.01 ETH"
                className="bg-transparent border-none text-white placeholder:text-[#6d6d6d] text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <BitcoinLogo />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-lg font-bold text-white">
              Add Description
            </label>
            <textarea
              placeholder="Enter your description"
              className="bg-transparent p-4 rounded-lg border border-[#303030] text-white placeholder:text-[#6d6d6d] text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <Button variant="outline" className="w-full h-auto py-6 gap-2.5 text-lg border-[#5b5b5b] rounded-full bg-transparent hover:text-white hover:bg-[#ffffff0d] text-white">
            Mint
          </Button>
        </CardContent>
      </Card>
    </main>
  );
};
