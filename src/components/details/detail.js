import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar";
import search from "../../assets/icons/search.png";
import path from "../../assets/icons/path.png";
import location from "../../assets/icons/location.png";
import distance from "../../assets/icons/distance.png";
import Rectangle from "../../assets/icons/Rectangle.png";
import floor from "../../assets/icons/floor.png";
import flat from "../../assets/icons/flat.png";
import poor from "../../assets/icons/poor.png";
import air from "../../assets/icons/air.png";
import fish from "../../assets/icons/fish.png";
import fan from "../../assets/icons/fan.png";
import car from "../../assets/icons/car.png";
import camera from "../../assets/icons/camera.png";
import "./style.css";

import { motion } from "framer-motion";
function Detail() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    console.log(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <div className="font-Noto h-[1500px]">
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

      {/* Image  */}
      <div className="w-full h-[360px] px-40 mt-4 flex ">
        <div className="w-2/5 h-full bg-[#00B8D1] rounded-l-xl"></div>
        <div className="w-3/5 h-full  ml-2 ">
          <div className="w-full  h-1/2 flex pb-1">
            <div className="w-1/3 bg-[#00B8D1] h-full mr-1"></div>
            <div className="w-1/3 bg-[#00B8D1] h-full mx-1"></div>
            <div className="w-1/3 bg-[#00B8D1] h-full ml-1 rounded-tr-xl"></div>
          </div>
          <div className="w-full  h-1/2 flex pt-1 ">
            <div className="w-1/3 bg-[#00B8D1] h-full mr-1"></div>
            <div className="w-1/3 bg-[#00B8D1] h-full mx-1"></div>
            <div className="w-1/3 bg-[#00B8D1] h-full ml-1 rounded-br-xl"></div>
          </div>
        </div>
      </div>
      {/* detail and reviewer  */}
      <div className="h-[260px] w-full px-40 flex mt-4">
        <div className="w-7/12 h-full border border-[#E0E0E0] rounded-xl shadow-md p-4 flex flex-col justify-between">
          <div>
            <p className="text-2xl font-bold ">
              ເຮືອນ 2 ຊັ້ນໃຫ້ເຊົ່າ ແຄມທາງ ເຂດດົງໂດກ ໃກ້ກັບມະຫາວິທະຍາໄລແຫ່ງຊາດ
            </p>
            <div className="flex mt-3 items-center">
              <img src={location} alt="location" className="w-3 h-4 mr-1" />
              <p className="text-base font-semibold ">
                ດົງໂດກ, ໄຊທານີ, ນະຄອນຫຼວງ
              </p>
            </div>
            <p className="font-normal text-base text-[#000] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos
            </p>
          </div>

          {/*  area */}
          <div className=" w-full flex">
            <div className=" h-10 w-28 rounded-xl border border-gray flex justify-evenly items-center">
              <img src={distance} alt="distance" className="w-4 h-4" />
              <p className="text-sm">60 m2</p>
            </div>
            <div className="ml-3 h-10 w-28 rounded-xl border border-gray flex justify-evenly items-center">
              <img src={floor} alt="distance" className="w-4 h-4" />
              <p className="text-sm">2 ຊັ້ນ</p>
            </div>
          </div>
        </div>
        <div className="w-5/12 h-full ml-5 border border-[#E0E0E0] rounded-xl shadow-md p-4 flex flex-col justify-between">
          <div className="w-full h-auto flex">
            <div className="relative flex items-center">
              <img src={Rectangle} alt="Rectangle" className="w-12 h-12" />
              <p className="absolute left-2 font-extrabold text-[#fff] text-xl">
                4.6
              </p>
            </div>
            <div className="ml-2">
              <p className="text-2xl font-bold">Wonderful</p>
              <p className="text-sm text-[#000]">349 reviews</p>
            </div>
          </div>
          <div className=" w-full h-[160px] container-slide ">
            <motion.dev
              ref={carousel}
              className="carousel"
              whileTap={{ cursor: "grabbing" }}
            >
              <motion.dev
                className="inner h-full"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
              >
                <motion.dev className="item p-1">
                  <div className="w-[270px] h-full border border-[#E0E0E0] rounded-xl">
                    <div className="w-full h-[70%] bg-[#E0E0E0] flex justify-center items-center p-5 bg-opacity-50 border border-[#E0E0E0] rounded-t-xl">
                      <p className="text-xs">
                        “Lorem ipsum dolor sit amet consectetur. Volutpat
                        convallis in imperdiet diam sollicitudin dui nec sit
                        facilisi. Viverra pharetra cursus massa turpis cursus.”
                      </p>
                    </div>
                    <div className="w-full h-[30%] rounded-b-xl flex justify-between items-center p-4">
                      <div className="flex items-center">
                        <img src={flat} alt="flat" />
                        <p className="ml-4">Adam levi</p>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-[#00B8D1] flex justify-center items-center">
                        4
                      </div>
                    </div>
                  </div>
                </motion.dev>
                <motion.dev className="item p-1">
                  <div className="w-[270px] h-full border border-[#E0E0E0] rounded-xl">
                    <div className="w-full h-[70%] bg-[#E0E0E0] flex justify-center items-center p-5 bg-opacity-50 border border-[#E0E0E0] rounded-t-xl">
                      <p className="text-xs">
                        “Lorem ipsum dolor sit amet consectetur. Volutpat
                        convallis in imperdiet diam sollicitudin dui nec sit
                        facilisi. Viverra pharetra cursus massa turpis cursus.”
                      </p>
                    </div>
                    <div className="w-full h-[30%] rounded-b-xl flex justify-between items-center p-4">
                      <div className="flex items-center">
                        <img src={flat} alt="flat" />
                        <p className="ml-4">Adam levi</p>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-[#00B8D1] flex justify-center items-center">
                        4
                      </div>
                    </div>
                  </div>
                </motion.dev>
              </motion.dev>
            </motion.dev>
          </div>
        </div>
      </div>
      {/* other and maping  */}

      <div className="w-full h-[230px] px-40 flex mt-4">
        {/* ສິ່ງອຳນວຍຄວາມສະດວກ */}
        <div className="h-full w-1/3  mr-1 border border-[#E0E0E0] rounded-xl p-4">
          <p className="text-2xl font-bold">ສິ່ງອຳນວຍຄວາມສະດວກ</p>
          <div className="flex mt-6">
            <div>
              <div className="flex items-center ">
                <img src={poor} alt="poot" className="w-5" />
                <p className=" text-lg ml-2">ສະລອຍນ້ຳ</p>
              </div>
              <div className="flex  items-center mt-2">
                <img src={air} alt="poot" className="w-5" />
                <p className="text-lg ml-2">ແອ 2 ເຄື່ອງ</p>
              </div>
              <div className="flex  items-center mt-2">
                <img src={fish} alt="poot" className="w-5" />
                <p className="text-lg ml-2">ອ່າງລ້ຽງປາ</p>
              </div>
              <div className="flex  items-center mt-2">
                <img src={fan} alt="poot" className="w-5" />
                <p className="text-lg ml-2">ພັດລົດຕິດເພດານ</p>
              </div>
            </div>
            <div className="ml-16">
              <div className="flex  items-center">
                <img src={poor} alt="poot" className="w-5" />
                <p className="text-lg  ml-2">ສວນດອກໄມ້</p>
              </div>
              <div className="flex  items-center mt-2">
                <img src={car} alt="poot" className="w-5" />
                <p className="text-lg ml-2">ໂຮງຈອດລົດ</p>
              </div>
              <div className="flex  items-center mt-2">
                <img src={camera} alt="poot" className="w-5" />
                <p className="text-lg ml-2">ກ້ອງວົງຈອນປິດ</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-2/3 bg-logoColor ml-1"></div>
      </div>
    </div>
  );
}

export default Detail;
