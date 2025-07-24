import React from "react";
import LoaderGifSrc from "@/assets/loader.gif";
import Image from "next/image";
import { useSelector } from "react-redux";
import { ReduxStateI } from "@/redux/reduxInterface";

const LoaderGif = () => {
  const loader = useSelector((state: ReduxStateI) => state.dashboard.loader);

  return loader ? (
    <div className="fixed flex inset-0 justify-center items-center h-[100vh] bg-transparent z-[100]">
      <div className="inset-0 bg-black absolute w-[100%] h-[100%] opacity-[0.88]"></div>
      <Image
        className="relative z-10"
        src={LoaderGifSrc}
        alt="Description of the image"
        width={300}
        height={300}
        priority={true}
      />
    </div>
  ) : null;
};

export default LoaderGif;
