import React from "react";
import Button from "../Buttons/Button";

const Hero = () => {
  return (
    <div className="flex justify-center ">
      <div className="p-4 flex flex-col justify-evenly items-left m-5 w-[50vw] h-[60vh]">
        <h1 className="text-5xl font-bold">Your Devices, Your Control.</h1>
        <p className="text-2xl text-left w-2/2">
          Easily register, verify, and protect your mobile devices. Transfer
          ownership instantly and track lost phones effortlessly
        </p>
        <div className="w-[30vw] h-[15vh] flex justify-evenly items-center">
          <Button
            text="Get Started"
            color="blue"
            size="large"
            hoverColor="transparent"
            border="solid"
            width="large"
          />
          <Button
            text="Learn More"
            color="transparent"
            size="large"
            border="solid"
            width="large"
            hoverColor="blue"
          />
        </div>
      </div>
      <div className="bg-white w-[40vw] h-[70vh] m-5"></div>
    </div>
  );
};

export default Hero;
