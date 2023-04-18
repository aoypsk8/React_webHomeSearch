import React from "react";

function Footer() {
  return (
    <div className="bg-textColor h-[296px] mt-40 ">
      <div className=" ml-[280px] flex justify-evenly pt-20 ">
        <div >
          <p className="text-title-contact">Help</p>
          <p className="text-sub-contact">Help center</p>
          <p className="text-sub-contact" >FAQs</p>
          <p className="text-sub-contact">Privacy policy</p>
          <p className="text-sub-contact">Cookie policy</p>
          <p className="text-sub-contact">Terms of use</p>
        </div>
        <div>
          <p  className="text-title-contact">About us</p>
          <p className="text-sub-contact">Lorem</p>
          <p className="text-sub-contact">Developer team</p>
        </div>
        <div>
          <p  className="text-title-contact">Social media</p>
          <p className="text-sub-contact">Facebook</p>
          <p className="text-sub-contact">Twitter</p>
          <p className="text-sub-contact">Instagram</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
