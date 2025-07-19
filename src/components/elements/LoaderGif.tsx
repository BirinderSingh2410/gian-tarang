import React from "react";
import WelcomeGifGref from "@/assets/welcome.gif";
import Image from "next/image";

const LoaderGif = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Image
        src={WelcomeGifGref}
        alt="Description of the image"
        width={500}
        height={300}
      />
    </div>
  );
};

export default LoaderGif;
