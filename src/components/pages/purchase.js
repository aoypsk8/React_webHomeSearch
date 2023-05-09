import React from "react";
import Navbar from "../Navbar";
import path from "../../assets/icons/path.png";
import search from "../../assets/icons/search.png";
import location from "../../assets/icons/location.png";
import distance from "../../assets/icons/distance.png";
import floor from "../../assets/icons/floor.png";
import person from "../../assets/icons/person.png";
import mastercard from "../../assets/icons/mastercard.png";
import card from "../../assets/icons/card.png";
import Footer from "./Footer";
function Purchase() {
  return (
    <div className="font-Noto h-auto">
      <Navbar />
      <div className="w-full h-[105px] bg-[#00292F] px-40 flex  py-6 ">
        <div className="relative flex items-center col-span-2 w-11/12 h-[60px]">
          <img
            src={search}
            alt="search"
            className="w-5 h-5 absolute ml-3 pointer-events-none"
          />

          <input
            // value={searchValue}
            // onChange={handleSearch}
            autoComplete="off"
            type="text"
            name="search"
            placeholder="ປ້ອນຊື່ສະຖານທີ່ ຫຼື ຕຳແໜ່ງ"
            aria-label="Search "
            className="w-full h-[55px] pl-10 font-semibold  border border-gray rounded-[10px] border-gray-500 focus:border-gray focus:outline-none 
               "
          />
        </div>
        <div
          className=" h-[55px] flex items-center justify-around bg-[#00B8D1] rounded-lg
         hover:cursor-pointer  text-white w-1/12 ml-4"
        >
          <div className="flex items-center justify-evenly ">
            <p className="text-xl font-bold  ">ຄົ້ນຫາ</p>
          </div>
        </div>
      </div>
      {/* path */}
      <div className="flex mt-3 px-40 w-full items-center">
        <p className="text-lg font-semibold">ໜ້າຫຼັກ</p>
        <img src={path} alt="path" className="w-3 h-4 ml-3" />
        <p className="text-lg font-semibold ml-3">ເຮືອນ</p>
        <img src={path} alt="path" className="w-3 h-4 ml-3" />
        <p className="text-lg font-semibold ml-3">ເຮືອນເຊົ່າ</p>
        <img src={path} alt="path" className="w-3 h-4 ml-3" />
        <p className="text-lg font-semibold ml-3">
          ເຮືອນ 2 ຊັ້ນໃຫ້ເຊົ່າ ແຄມທາງ ເຂດດົງໂດກ ໃກ້ກັບມະຫາ ວິທະຍາໄລແຫ່ງຊາດ
        </p>
      </div>
      {/* detail package*/}
      <div className="w-full h-[190px] px-40 mt-3 ">
        <div className="w-full h-full flex rounded-xl border border-[#E0E0E0]">
          <div className="w-1/5 h-full rounded-l-xl bg-logoColor"></div>
          <div className="w-4/5 h-full flex">
            <div className="h-full w-3/4 pt-9 pl-4  ">
              <p className="text-2xl font-bold">
                ເຮືອນ 2 ຊັ້ນໃຫ້ເຊົ່າ ແຄມທາງ ເຂດດົງໂດກ ໃກ້ກັບມະຫາວິທະຍາໄລແຫ່ງຊາດ
              </p>
              {/*  */}
              <div className="flex mt-2 items-center">
                <img src={location} alt="location" className="w-3 h-4 mr-1" />
                <p className="text-base font-semibold ">
                  ດົງໂດກ, ໄຊທານີ, ນະຄອນຫຼວງ
                </p>
              </div>
              {/* area */}
              <div className="h-12 mt-4  relative">
                <div className=" w-full flex">
                  <div className=" h-10 w-28 rounded-xl border border-[#E0E0E0] flex justify-evenly items-center">
                    <img src={distance} alt="distance" className="w-4 h-4" />
                    <p className="text-sm">60 m2</p>
                  </div>
                  <div className="ml-3 h-10 w-28 rounded-xl border border-[#E0E0E0] flex justify-evenly items-center">
                    <img src={floor} alt="distance" className="w-4 h-4" />
                    <p className="text-sm">2 ຊັ້ນ</p>
                  </div>
                </div>
                <div className=" pr-6 absolute right-0 bottom-0 ">
                  <p className="font-medium text-base">
                    (12 ເດືອນ x 1,275,000)
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/4 h-full pt-4 pr-4">
              <div className="w-full h-[70px]  flex justify-center items-center border-2 border-[#00B8D1] relative">
                <div className="absolute w-full h-full bg-[#00B8D1] z-10"></div>
                <div className="flot-box2 z-0"></div>
                <p className="text-2xl font-bold text-[#fff] z-50">
                  ແພັກເກັດ 1 ປີ
                </p>
              </div>
              <div className="w-full h-12 mt-10 border-2 border-[#00B8D1] flex justify-center items-center">
                <p className="text-2xl font-bold text-[#00B8D1]">
                  ₭ 15,300,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* detail ລາຍລະອຽດຜູ້ເຮັດສັນຍາ */}
      <div className="w-full h-[645px] px-40 mt-4">
        <div className="w-full h-full p-4 rounded-xl border border-[#E0E0E0]">
          <div className="flex items-center">
            <img src={person} alt="person" className="w-6 h-6" />
            <p className="text-2xl font-bold ml-2">ລາຍລະອຽດຜູ້ເຮັດສັນຍາ</p>
          </div>
          {/* name and surname  */}
          <p className="text-[#000000] text-opacity-50">
            ຊື່ ແລະ ນາມສະກຸນ <span className="text-[#FF4B55]">*</span>
          </p>
          <div className="w-full h-12 mt-2 relative">
            <input
              // value={searchValue}
              // onChange={handleSearch}
              autoComplete="off"
              type="text"
              name="search"
              placeholder="ປ້ອນຊື່ ແລະ ນາມສະກຸນ..."
              aria-label="Search "
              className="w-full h-full pl-4 font-semibold  border border-[#E0E0E0] rounded-md focus:outline-none 
               "
            />
            {/* if pass then show this  */}
            {/* <div className="absolute right-0 top-3 mr-4">123</div> */}
          </div>
          {/* email */}
          <p className="text-[#000000] text-opacity-50 mt-4">
            <p className="text-[#000000] text-opacity-50">ອີເມລ</p>{" "}
          </p>
          <div className="w-full h-12 mt-2 relative">
            <input
              // value={searchValue}
              // onChange={handleSearch}
              autoComplete="off"
              type="text"
              name="search"
              placeholder="name@example.com"
              aria-label="Search "
              className="w-full h-full pl-4 font-semibold  border border-[#E0E0E0] rounded-md focus:outline-none 
               "
            />
            {/* if pass then show this  */}
            {/* <div className="absolute right-0 top-3 mr-4">123</div> */}
          </div>
          {/* phone number and ສັນຊາດ **/}
          <div className="w-full h-12 flex ">
            <div className="w-1/2 h-full pr-2">
              <p className="text-[#000000] text-opacity-50 mt-4">
                ເບີໂທລະສັບ <span className="text-[#FF4B55]">*</span>
              </p>
              <div className="w-full h-12 mt-2 relative">
                <input
                  // value={searchValue}
                  // onChange={handleSearch}
                  autoComplete="off"
                  type="text"
                  name="search"
                  placeholder="020 92 026 538"
                  aria-label="Search "
                  className="w-full h-full pl-4 font-semibold  border border-[#E0E0E0] rounded-md focus:outline-none 
               "
                />
                {/* if pass then show this  */}
                {/* <div className="absolute right-0 top-3 mr-4">123</div> */}
              </div>
            </div>
            <div className="w-1/2 h-full pl-2">
              <p className="text-[#000000] text-opacity-50 mt-4">
                ສັນຊາດ <span className="text-[#FF4B55]">*</span>
              </p>
              <div className="w-full h-12 mt-2 relative">
                <input
                  // value={searchValue}
                  // onChange={handleSearch}
                  autoComplete="off"
                  type="text"
                  name="search"
                  placeholder="Laos"
                  aria-label="Search "
                  className="w-full h-full pl-4 font-semibold  border border-[#E0E0E0] rounded-md focus:outline-none 
               "
                />
                {/* if pass then show this  */}
                {/* <div className="absolute right-0 top-3 mr-4">123</div> */}
              </div>
            </div>
          </div>

          {/* payment ການຊຳລະເງິນ */}
          <div className="w-full flex items-center mt-20">
            <img src={card} alt="person" className="w-6 h-5" />
            <p className="text-2xl font-bold ml-2">ການຊຳລະເງິນ</p>
          </div>
          <div className="w-full h-14  mt-6 flex pb-2">
            <div className="w-1/2 h-full">
              <form className="">
                {/* check box */}
                <div className="flex justify-start items-center">
                  <input
                    className="h-4 w-4 "
                    type="checkbox"
                    id=""
                    name=""
                    value=""
                  />
                  <label
                    for=""
                    className="text-[#000000] text-opacity-80 ml-2 font-medium"
                  >
                    ບັດເຄດິດ<span className="text-[#FF4B55]">*</span>
                  </label>
                </div>
              </form>
              <div className="w-full h-full relative pr-2 mt-2 border border-[#E0E0E0] rounded-xl flex">
                <img
                  src={mastercard}
                  alt="search"
                  className="w-11 h-full rounded-xl "
                />
                <input
                  // value={searchValue}
                  // onChange={handleSearch}
                  autoComplete="off"
                  type="text"
                  name="search"
                  placeholder="1601 2000 xxxxx xxxxx"
                  aria-label="Search "
                  className="w-full h-full pl-1 font-semibold   focus:outline-none 
               "
                ></input>
                {/* if pass then show this  */}
                {/* <div className="absolute right-0 top-3 mr-4">123</div> */}
              </div>
            </div>
            <div className="w-1/2 h-full flex">
              <div className="w-1/2 h-full pr-2 pl-2 ">
                <p className="text-[#000000] text-opacity-50 ">
                  ວັນໝົດອາຍຸ<span className="text-[#FF4B55]">*</span>
                </p>
                <div className="w-full h-full relative mt-2">
                  <input
                    // value={searchValue}
                    // onChange={handleSearch}
                    autoComplete="off"
                    type="text"
                    name="search"
                    placeholder="MM/YY"
                    aria-label="Search "
                    className="w-full h-full pl-4 font-semibold  border border-[#E0E0E0] rounded-md focus:outline-none 
               "
                  />
                  {/* if pass then show this  */}
                  {/* <div className="absolute right-0 top-3 mr-4">123</div> */}
                </div>
              </div>
              <div className="w-1/2 h-full pl-2">
                <p className="text-[#000000] text-opacity-50">
                  ວັນໝົດອາຍຸ<span className="text-[#FF4B55]">*</span>
                </p>
                <div className="w-full h-full relative mt-2">
                  <input
                    // value={searchValue}
                    // onChange={handleSearch}
                    autoComplete="off"
                    type="text"
                    name="search"
                    placeholder="XXX"
                    aria-label="Search "
                    className="w-full h-full pl-4 font-semibold  border border-[#E0E0E0] rounded-md focus:outline-none 
               "
                  />
                  {/* if pass then show this  */}
                  {/* <div className="absolute right-0 top-3 mr-4">123</div> */}
                </div>
              </div>
            </div>
          </div>
          <form className="mt-12 w-full ">
            {/* check box */}
            <div className="flex justify-start items-center">
              <input
                className="h-4 w-4 "
                type="checkbox"
                id=""
                name=""
                value=""
              />
              <label
                for=""
                className="text-[#000000] text-opacity-80 ml-2 font-medium"
              >
                ຈ່າຍເງິນສົດ
              </label>
            </div>
          </form>
          {/* ສັນຍາ */}
          <form className="w-full  flex justify-end">
            {/* check box */}
            <div className="flex justify-start items-center mr-12">
              <input
                className="h-4 w-4 "
                type="checkbox"
                id=""
                name=""
                value=""
              />
              <label for="" className="text-xl  ml-2 font-medium">
                ຂ້ອຍຍອມຮັບຕາມຂໍ້ຕົດລົງຕາມສັນຍາເຊົ່າ
                <span className="text-[#FF4B55]">*</span>
              </label>
            </div>
            <p className="text-[#00B8D1] text-xl font-medium">ອ່ານສັນຍາ</p>
          </form>

          {/* button */}
          <div className="w-full h-12  mt-4 flex justify-end">
            <div className="w-[213px] h-full bg-[#00B8D1] rounded-md mr-2 flex justify-center items-center outline outline-[#00B8D1] text-[#fff] hover:text-[#00B8D1]  hover:bg-opacity-0">
              <p className="text-xl font-semibold">ຍົກເລີກ</p>
            </div>
            <div className="w-[213px] h-full bg-[#00B8D1] rounded-md ml-2 flex justify-center items-center outline outline-[#00B8D1] text-[#fff] hover:text-[#00B8D1]  hover:bg-opacity-0">
              <p className="text-xl font-semibold">ຊຳລະເງິນ</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Purchase;
