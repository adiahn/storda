import React from "react";
import Button from "../Buttons/Button";
import mockup from "../../assets/img/mockup.png";
import PlayStore from "../../assets/img/3.png";
import AppStore from "../../assets/img/2.png";

const Hero = () => {
  return (
    <div className="flex justify-center ">
      <div className="p-4 flex flex-col justify-evenly items-left m-5 w-[50vw] h-[55vh]">
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
      <div className="w-[40vw] h-[70vh] m-5 flex justify-between items-center rounded-lg">
        <img src={mockup} alt="hero" className="w-2/3" />
        <div className="w-1/3 h-full rounded-lg flex flex-col justify-center items-start gap-6">
          <img
            src={PlayStore}
            alt=""
            className="w-[10vw] hover:cursor-pointer"
          />
          <img
            src={AppStore}
            alt=""
            className="w-[10vw] hover:cursor-pointer  "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
