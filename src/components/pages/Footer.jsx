import logo from "../../assets/logo.png";
import React from "react";

function  Footer() {
  return (
    <div className="bg-[#F8F7F9]  mt-10 ">
      <div className="flex justify-start pt-12 mx-40 h-[270px]">
        <div>
          <p className="text-title-contact">Help</p>
          <p className="text-sub-contact">Help center</p>
          <p className="text-sub-contact">FAQs</p>
          <p className="text-sub-contact">Privacy policy</p>
          <p className="text-sub-contact">Cookie policy</p>
          <p className="text-sub-contact">Terms of use</p>
        </div>
        <div className="ml-40">
          <p className="text-title-contact">Help</p>
          <p className="text-sub-contact">Help center</p>
          <p className="text-sub-contact">FAQs</p>
          <p className="text-sub-contact">Privacy policy</p>
          <p className="text-sub-contact">Cookie policy</p>
          <p className="text-sub-contact">Terms of use</p>
        </div>
        <div className="ml-40">
          <p className="text-title-contact">About us</p>
          <p className="text-sub-contact">Lorem</p>
          <p className="text-sub-contact">Developer team</p>
        </div>
        <div className="ml-40">
          <p className="text-title-contact">Social media</p>
          <p className="text-sub-contact">Facebook</p>
          <p className="text-sub-contact">Twitter</p>
          <p className="text-sub-contact">Instagram</p>
        </div>
      </div>
      <div className="w-full h-[180px] bg-[#00292F] mt-5  ">
        <div className="flex justify-center">
          <div className=" mx-96 mt-5">
            <p className="text-white mx-5">
              All material herein © 2022–2023 Midi tech Company Ltd. All Rights
              Reserved.
            </p>
            <p className="text-white">
              Midi is a tech company the Laos start up for ICT solution and
              web-app development.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-5">
          <img
            src={logo}
            alt="logo"
            className="h-[55px] w-[45px] hover:cursor-pointer"
          />
          <p className="text-logoColor ml-5 text-xl hover:cursor-pointer font-bold">
            Home Search
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
