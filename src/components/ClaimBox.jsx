import React from "react";
import { Default } from "react-awesome-spinners";

const ClaimBox = ({ isBackground, imgURL, gap, header, isLoading, center, children, height }) => {
  return (
    <div
      className={` ${!height && "h-[400px] md:h-[450px] lg:w-[350px]"}  ${
        isBackground && "bg-gradient-card1"
      } ${center && "flex justify-center items-center"} border-2 border-white text-white text-lg lg:mx-20 rounded-[30px] p-5 transition flex flex-col relative my-14`}
      style={{
        backgroundImage: imgURL ? `url(${imgURL})` : 'none',
        height: height && `${height}px`,
        backgroundColor: "#000"
      }}
    > 
      {
        header && 
        <div className={`absolute inset-0 flex items-center justify-center font-semibold z-10 ${isLoading ? "opacity-20" : "opacity-100"}`}>
          <span className="font-semibold px-5 py-2 bg-black rounded-full">
            {header}
          </span>
        </div>
      }
      <div style={{overflowY: 'auto', height: '100%' }} className={`${isLoading ? "opacity-20" : "opacity-100"} flex flex-col ${gap && "gap-3"}`}>
        {children}
      </div>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Default color="#a1a1a1" />
        </div>
      )}
    </div>
  );
};

export default ClaimBox;
