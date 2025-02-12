import React from "react";
import Button from "../Buttons/Button";

const Hero = () => {
  return (
    <div className="p-4 flex flex-col justify-center items-center m-20">
      <h1 className="text-6xl font-bold">Your Devices, Your Control.</h1>
      <p className="text-2xl text-center w-1/2">
        Easily register, verify, and protect your mobile devices. Transfer
        ownership instantly and track lost phones effortlessly
      </p>
      <div className="w-2/4 h-[15vh] flex justify-evenly items-center m-10">
        <Button
          text="Get Started"
          color="blue"
          size="large"
          hoverColor="transparent"
          border="solid"
        />
        <Button
          text="Learn More"
          color="transparent"
          size="large"
          border="solid"
          hoverColor="blue"
        />
      </div>
    </div>
  );
};

export default Hero;
