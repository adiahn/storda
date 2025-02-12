import React from "react";
import Button from "../Buttons/Button";

const Hero = () => {
  return (
    <div className=" border border-white p-4 flex flex-col justify-center items-center m-20">
      <h1 className="text-6xl font-bold">Your Devices, Your Control.</h1>
      <p className="text-2xl text-center w-1/2">
        Easily register, verify, and protect your mobile devices. Transfer
        ownership instantly and track lost phones effortlessly
      </p>
      <div className="w-2/4 h-[15vh] border border-white flex justify-evenly items-center">
        <Button text="Get Started" color="blue" size="large" />
        <Button
          text="Learn More"
          color="transparent"
          size="large"
          border="solid"
        />
      </div>
    </div>
  );
};

export default Hero;
