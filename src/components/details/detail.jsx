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
import garage from "../../assets/icons/garage.png";
import car from "../../assets/icons/car.png";
import camera from "../../assets/icons/camera.png";
import "./style.css";

import { motion } from "framer-motion";
import Footer from "../pages/Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../config/globalKey";
function Detail() {
  const { homeId } = useParams();
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  const [detail, setDetail] = useState([]);
  const [address, setAddress] = useState([]);
  const [image, setImage] = useState([]);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    console.log(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchHome = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/home/getOne/${homeId}`);
        setDetail(response.data.data);
        setAddress(response.data.data.addressId);
        console.log(response.data.data);
        setImage(response.data.data.image);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHome();
  }, [homeId]);
  console.log(image[0]);
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
        <Link to={"/"} style={{ textDecoration: "none" }} className="text-lg font-medium text-[#000000]">ໜ້າຫຼັກ</Link>
        <img src={path} alt="path" className="w-2 h-3 mx-3" />
        <Link to={"/search"} style={{ textDecoration: "none" }} className="text-lg font-medium text-[#000000]">ຄົ້ນຫາ</Link>
        {/* <img src={path} alt="path" className="w-2 h-3 mx-3" />
        <p className="text-lg font-medium text-[#000000]">ເຮືອນເຊົ່າ</p> */}
        <img src={path} alt="path" className="w-2 h-3 mx-3" />
        <p className="text-lg font-medium text-[#000000]">
          ເຮືອນ 2 ຊັ້ນໃຫ້ເຊົ່າ ແຄມທາງ ເຂດດົງໂດກ ໃກ້ກັບມະຫາ ວິທະຍາໄລແຫ່ງຊາດ
        </p>
      </div>

      {/* Image  */}
      <div className="w-full h-[360px] px-40 mt-4 flex ">
        <div className="w-2/5 h-full bg-[#00B8D1] rounded-l-xl">
          <img src={image[0]} alt="" className="w-full h-full  rounded-l-xl" />
        </div>
        <div className="w-3/5 h-full  ml-2 ">
          <div className="w-full  h-1/2 flex pb-1">
            <div className="w-1/3 bg-[#00B8D1] h-full mr-1">
              <img src={image[1]} alt="" className="w-full h-full" />
            </div>
            <div className="w-1/3 bg-[#00B8D1] h-full mx-1">
              <img src={image[2]} alt="" className="w-full h-full" />
            </div>
            <div className="w-1/3 bg-[#00B8D1] h-full ml-1 rounded-tr-xl">
              <img
                src={image[3]}
                alt=""
                className="w-full h-full rounded-tr-xl"
              />
            </div>
          </div>
          <div className="w-full  h-1/2 flex pt-1 ">
            <div className="w-1/3 bg-[#00B8D1] h-full mr-1">
              <img src={image[4]} alt="" className="w-full h-full " />
            </div>
            <div className="w-1/3 bg-[#00B8D1] h-full mx-1">
              <img src={image[5]} alt="" className="w-full h-full " />
            </div>
            <div className="w-1/3 bg-[#00B8D1] h-full ml-1 rounded-br-xl">
              <img
                src={image[6]}
                alt=""
                className="w-full h-full rounded-br-xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* detail and reviewer  */}
      <div className="h-[260px] w-full px-40 flex mt-4">
        <div className="w-7/12 h-full border border-[#E0E0E0] rounded-xl shadow-md p-4 flex flex-col justify-between">
          <div>
            <p className="text-xl  font-semibold ">
              ເຮືອນ 2 ຊັ້ນໃຫ້ເຊົ່າ ແຄມທາງ ເຂດດົງໂດກ ໃກ້ກັບມະຫາວິທະຍາໄລແຫ່ງຊາດ
            </p>
            <div className="flex mt-3 items-center">
              <img
                src={location}
                alt="location"
                className="w-[10px] h-[13px] mr-1"
              />
              <p className="text-sm font-normal ">ດົງໂດກ, ໄຊທານີ, ນະຄອນຫຼວງ</p>
            </div>
            <p className="font-normal text-sm text-[#000] mt-4">
              {detail.description}
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
              <img
                src={Rectangle}
                alt="Rectangle"
                className="w-[43px] h-[43px]"
              />
              <p className="absolute left-2  text-[#fff] text-xl font-semibold">
                4.6
              </p>
            </div>
            <div className="ml-2">
              <p className="text-xl font-semibold">Wonderful</p>
              <p className="text-xs text-[#000]">349 reviews</p>
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
                        <p className="ml-4 text-xs font-medium">Adam levi</p>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-[#00B8D1] flex justify-center items-center">
                        <p className="text-sm font-medium text-[#fff]">4</p>
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
          <p className="text-xl font-semibold">ສິ່ງອຳນວຍຄວາມສະດວກ</p>
          <div className="flex mt-6">
            <div>
              <div className="flex items-center ">
                <img src={poor} alt="poot" className="w-[25px] h-[17px]" />
                <p className=" text-base font-normal ml-2">ສະລອຍນ້ຳ</p>
              </div>
              <div className="flex  items-center mt-2">
                <img src={air} alt="poot" className="w-[25px] h-[17px]" />
                <p className="text-base font-normal ml-2">ແອ 2 ເຄື່ອງ</p>
              </div>
              <div className="flex  items-center mt-2">
                <img src={fish} alt="poot" className="w-[25px] h-[17px]" />
                <p className="text-base font-normal ml-2">ອ່າງລ້ຽງປາ</p>
              </div>
              <div className="flex  items-center mt-2">
                <img src={fan} alt="poot" className="w-[25px] h-[17px]" />
                <p className="text-base font-normal ml-2">ພັດລົດຕິດເພດານ</p>
              </div>
            </div>
            <div className="ml-16">
              <div className="flex  items-center">
                <img src={poor} alt="poot" className="w-[25px] h-[17px]" />
                <p className="text-base font-normal  ml-2">ສວນດອກໄມ້</p>
              </div>
              <div className="flex  items-center mt-2">
                <img src={garage} alt="poot" className="w-[25px] h-[17px]" />
                <p className="text-base font-normal ml-2">ໂຮງຈອດລົດ</p>
              </div>
              <div className="flex items-center mt-2">
                <img src={camera} alt="poot" className="w-[25px] h-[17px]" />
                <p className="text-base font-normal ml-2">ກ້ອງວົງຈອນປິດ</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-2/3  ml-1 flex  border border-[#E0E0E0] rounded-xl">
          <div className="h-full w-2/5 p-4">
            <p className="text-xl font-semibold">ທີ່ດິນ</p>
            <p className="mt-6 text-base font-normal">
              ເນື້ອທີ່ທັ້ງໝົດ 60 ㎡ ແລະ ຕິດໜ້າທາງ 8 m
            </p>
            {/* line */}
            <div className="w-full mt-4 pr-14">
              <div className="border border-gray "></div>
            </div>
            <div className="flex  items-center mt-4">
              <img src={car} alt="car" />
              <p className="ml-2 text-base font-normal">
                ຂັບລົດຈາກຕົວເມືອງ 15 ນາທີ
              </p>
            </div>
          </div>
          <div className=" h-full w-3/5 flex justify-center items-center">
            <p className="text-2xl font-medium">ພື້ນທີ່ສຳຫລັບໂຄສະນາ</p>
          </div>
        </div>
      </div>
      {/* table detail price */}
      <div className="w-full h-[470px] px-40 mt-4">
        <div className="w-full h-full border border-[#E0E0E0] rounded-xl  py-5 px-6 relative ">
          {/* flot package  */}
          <div className="w-full absolute flex pl-[180px]">
            <div className="w-[230px] h-[70px]  flex justify-center items-center border-2 border-[#00B8D1] relative">
              <div className="absolute w-full h-full bg-[#fff] z-10"></div>
              <div className=" flot-box z-0"></div>
              <p className="text-2xl font-semibold text-[#00B8D1] z-50">
                ແພັກເລີ່ມຕົ້ນ
              </p>
            </div>
            <div className="w-[230px] h-[70px] ml-4  flex justify-center items-center border-2 border-[#00B8D1] relative">
              <div className="absolute w-full h-full bg-[#fff] z-10"></div>
              <div className=" flot-box z-0"></div>
              <p className="text-2xl font-semibold text-[#00B8D1] z-50">
                ຈ່າຍກ່ອນ 3 ເດືອນ
              </p>
            </div>
            <div className="w-[230px] h-[70px] ml-4  flex justify-center items-center border-2 border-[#00B8D1] relative">
              <div className="absolute w-full h-full bg-[#fff] z-10"></div>
              <div className=" flot-box z-0"></div>
              <p className="text-2xl font-semibold text-[#00B8D1] z-50">
                ຈ່າຍກ່ອນ 6 ເດືອນ
              </p>
            </div>
            <div className="w-[230px] h-[70px] ml-4  flex justify-center items-center border-2 border-[#00B8D1] relative">
              <div className="absolute w-full h-full bg-[#fff] z-10"></div>
              <div className=" flot-box z-0"></div>
              <p className="text-2xl font-semibold text-[#00B8D1] z-50">
                ຈ່າຍກ່ອນ 1 ປີ
              </p>
            </div>
          </div>
          {/* table */}
          <div className="w-full h-full mt-16">
            {/* 1 table */}
            <div className="w-full h-1/6 flex items-center ">
              <div className="w-[180px] h-full items-center flex pl-10 ">
                <p className="text-xl font-semibold">ຄ່າເຊົ່າ</p>
              </div>
              <div className="w-[1px] h-full border border-[#E0E0E0]"></div>
              <div className="w-[180px] h-full items-center flex justify-center pl-10 mr-12">
                <p className="text-base font-normal">₭ 1,500,000/ເດືອນ</p>
              </div>
              <div className="w-[1px] h-full border border-[#E0E0E0] mr-2"></div>
              <div className="w-[1px] h-full border border-[#E0E0E0] ml-2"></div>

              <div className="w-[180px] h-full items-center flex justify-center pl-10 mr-12">
                <p className="text-base font-normal">₭ 1,425,000/ເດືອນ</p>
              </div>
              <div className="w-[1px] h-full border border-[#E0E0E0] mr-2"></div>
              <div className="w-[1px] h-full border border-[#E0E0E0] ml-2"></div>
              <div className="w-[180px] h-full items-center flex justify-center pl-10 mr-12">
                <p className="text-base font-normal">₭ 1,350,000/ເດືອນ</p>
              </div>
              <div className="w-[1px] h-full border border-[#E0E0E0] mr-2"></div>
              <div className="w-[1px] h-full border border-[#E0E0E0] ml-2"></div>
              <div className="w-[180px] h-full items-center flex justify-center pl-10 mr-12">
                <p className="text-base font-normal">₭ 1,275,000/ເດືອນ</p>
              </div>
              <div className="w-[1px] h-full border border-[#E0E0E0]"></div>
            </div>
            {/* 2 table */}
            <div className="w-full h-1/6 bg-[#00B8D1] bg-opacity-[8%] flex items-center">
              <div className="w-[180px] h-full items-center flex pl-10 ">
                <p className="text-xl font-semibold">ຄ່າມັດຈຳ</p>
              </div>
              <div className="w-[1px] h-full border border-[#E0E0E0]"></div>
              <div className="w-[180px] h-full items-center flex justify-center pl-10 mr-12">
                <p className="text-base font-normal">₭ 500,000</p>
              </div>
              <div className="w-[1px] h-full border border-[#E0E0E0] mr-2"></div>
              <div className="w-[1px] h-full border border-[#E0E0E0] ml-2"></div>

              <div className="w-[180px] h-full items-center flex justify-center pl-10 mr-12">
                <p className="text-base font-normal"> - </p>
              </div>
              <div className="w-[1px] h-full border border-[#E0E0E0] mr-2"></div>
              <div className="w-[1px] h-full border border-[#E0E0E0] ml-2"></div>
              <div className="w-[180px] h-full items-center flex justify-center pl-10 mr-12">
                <p className="text-base font-normal"> - </p>
              </div>
              <div className="w-[1px] h-full border border-[#E0E0E0] mr-2"></div>
              <div className="w-[1px] h-full border border-[#E0E0E0] ml-2"></div>
              <div className="w-[180px] h-full items-center flex justify-center pl-10 mr-12">
                <p className="text-base font-normal"> - </p>
              </div>
              <div className="w-[1px] h-full border border-[#E0E0E0]"></div>
            </div>
            {/* 3 table */}
            <div className="w-full h-1/6 flex items-center">
              <div className="w-[180px] h-full items-center flex pl-10 ">
                <p className="text-xl font-semibold">ຄ່າຂີ້ເຫຍື່ອ</p>
              </div>
              <div className="w-[1px] h-full border border-[#E0E0E0]"></div>
              <div className="w-[180px] h-full items-center flex justify-center pl-10 mr-12">
                <p className="text-base font-normal">₭ 50,000/ເດືອນ</p>
              </div>
              <div className="w-[1px] h-full border border-[#E0E0E0] mr-2"></div>
              <div className="w-[1px] h-full border border-[#E0E0E0] ml-2"></div>

              <div className="w-[180px] h-full items-center flex justify-center pl-10 mr-12">
                <p className="text-base font-normal">₭ 50,000/ເດືອນ</p>
              </div>
              <div className="w-[1px] h-full border border-[#E0E0E0] mr-2"></div>
              <div className="w-[1px] h-full border border-[#E0E0E0] ml-2"></div>
              <div className="w-[180px] h-full items-center flex justify-center pl-10 mr-12">
                <p className="text-base font-normal">₭ 50,000/ເດືອນ</p>
              </div>
              <div className="w-[1px] h-full border border-[#E0E0E0] mr-2"></div>
              <div className="w-[1px] h-full border border-[#E0E0E0] ml-2"></div>
              <div className="w-[180px] h-full items-center flex justify-center pl-10 mr-12">
                <p className="text-base font-normal">₭ 50,000/ເດືອນ</p>
              </div>
              <div className="w-[1px] h-full border border-[#E0E0E0]"></div>
            </div>
            {/* 4 table */}
            <div className="w-full h-1/6 bg-[#00B8D1] bg-opacity-[8%] flex items-center ">
              <div className="w-[180px] h-full items-center flex pl-10 ">
                <p className="text-xl font-semibold">ສ່ວນຫຼຸດ</p>
              </div>
              <div className="w-[1px] h-full border border-[#E0E0E0]"></div>
              <div className="w-[180px] h-full items-center flex justify-center pl-10 mr-12">
                <p className="text-base font-normal">-</p>
              </div>
              <div className="w-[1px] h-full border border-[#E0E0E0] mr-2"></div>
              <div className="w-[1px] h-full border border-[#E0E0E0] ml-2"></div>

              <div className="w-[180px] h-full items-center flex justify-center pl-10 mr-12">
                <p className="text-base font-normal">5 %</p>
              </div>
              <div className="w-[1px] h-full border border-[#E0E0E0] mr-2"></div>
              <div className="w-[1px] h-full border border-[#E0E0E0] ml-2"></div>
              <div className="w-[180px] h-full items-center flex justify-center pl-10 mr-12">
                <p className="text-base font-normal">10 %</p>
              </div>
              <div className="w-[1px] h-full border border-[#E0E0E0] mr-2"></div>
              <div className="w-[1px] h-full border border-[#E0E0E0] ml-2"></div>
              <div className="w-[180px] h-full items-center flex justify-center pl-10 mr-12">
                <p className="text-base font-normal">15%</p>
              </div>
              <div className="w-[1px] h-full border border-[#E0E0E0]"></div>
            </div>
            {/* button */}
            <div className="w-full h-12 pl-[180px] mt-4 flex">
              <div className="w-[230px] h-full  bg-logoColor rounded-md flex items-center justify-center">
                <p className="text-xl font-medium text-[#fff]">ເລືອກຊຳລະ</p>
              </div>
              <div className="w-[230px] h-full  bg-logoColor rounded-md flex items-center justify-center ml-4">
                <p className="text-xl font-medium text-[#fff]">ເລືອກຊຳລະ</p>
              </div>
              <div className="w-[230px] h-full  bg-logoColor rounded-md flex items-center justify-center ml-4">
                <p className="text-xl font-medium text-[#fff]">ເລືອກຊຳລະ</p>
              </div>
              <div className="w-[230px] h-full  bg-logoColor rounded-md flex items-center justify-center ml-4">
                <p className="text-xl font-medium text-[#fff]">ເລືອກຊຳລະ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ລາຍລະອຽດທີ່ພັກ */}
      <div className="w-full h-[720px] px-40 mt-4">
        <div className="w-full h-full border border-[#E0E0E0] rounded-xl p-4">
          <p className="text-xl font-semibold ">ລາຍລະອຽດທີ່ພັກ</p>
          {/* floor 1 */}
          <div className="mt-6 w-full h-[185px] flex">
            <div className="w-[150px] h-full bg-[#00B8D1] rounded-md flex flex-col justify-center items-center">
              <p className="text-2xl font-bold text-[#fff]">ຊັ້ນ 1</p>
              <p className="text-[#fff]">ພື້ນທີ່ 25 ㎡</p>
            </div>
            <div className="w-1/6 h-full ml-3 border-2 border-[#E0E0E0] rounded-md">
              <div className="w-full h-3/4 bg-[#00B8D1] rounded-t-md"></div>
              <div className="w-full h-1/4 flex justify-center items-center ">
                <p>ຫ້ອງນອນ 8x8 m</p>
              </div>
            </div>
            <div className="w-1/6 h-full ml-3 border-2 border-[#E0E0E0] rounded-md">
              <div className="w-full h-3/4 bg-[#00B8D1] rounded-t-md"></div>
              <div className="w-full h-1/4 flex justify-center items-center ">
                <p>ຫ້ອງນອນ 8x8 m</p>
              </div>
            </div>
            <div className="w-1/6 h-full ml-3 border-2 border-[#E0E0E0] rounded-md">
              <div className="w-full h-3/4 bg-[#00B8D1] rounded-t-md"></div>
              <div className="w-full h-1/4 flex justify-center items-center ">
                <p>ຫ້ອງນອນ 8x8 m</p>
              </div>
            </div>
            <div className="w-1/6 h-full ml-3 border-2 border-[#E0E0E0] rounded-md">
              <div className="w-full h-3/4 bg-[#00B8D1] rounded-t-md"></div>
              <div className="w-full h-1/4 flex justify-center items-center ">
                <p>ຫ້ອງນອນ 8x8 m</p>
              </div>
            </div>
            <div className="w-1/6 h-full ml-3 border-2 border-[#E0E0E0] rounded-md">
              <div className="w-full h-3/4 bg-[#00B8D1] rounded-t-md"></div>
              <div className="w-full h-1/4 flex justify-center items-center ">
                <p>ຫ້ອງນອນ 8x8 m</p>
              </div>
            </div>
          </div>
          {/* Line */}
          <div className="w-full my-4 border border-gray"></div>
          {/* floor 2 */}
          <div className="w-full h-[185px] flex">
            <div className="w-[150px] h-full bg-[#00B8D1] rounded-md flex flex-col justify-center items-center">
              <p className="text-2xl font-bold text-[#fff]">ຊັ້ນ 2</p>
              <p className="text-[#fff]">ພື້ນທີ່ 20 ㎡</p>
            </div>
            <div className="w-1/6 h-full ml-3 border-2 border-[#E0E0E0] rounded-md">
              <div className="w-full h-3/4 bg-[#00B8D1] rounded-t-md"></div>
              <div className="w-full h-1/4 flex justify-center items-center ">
                <p>ຫ້ອງນອນ 8x8 m</p>
              </div>
            </div>
            <div className="w-1/6 h-full ml-3 border-2 border-[#E0E0E0] rounded-md">
              <div className="w-full h-3/4 bg-[#00B8D1] rounded-t-md"></div>
              <div className="w-full h-1/4 flex justify-center items-center ">
                <p>ຫ້ອງນອນ 8x8 m</p>
              </div>
            </div>
            <div className="w-1/6 h-full ml-3 border-2 border-[#E0E0E0] rounded-md">
              <div className="w-full h-3/4 bg-[#00B8D1] rounded-t-md"></div>
              <div className="w-full h-1/4 flex justify-center items-center ">
                <p>ຫ້ອງນອນ 8x8 m</p>
              </div>
            </div>
            <div className="w-1/6 h-full ml-3 border-2 border-[#E0E0E0] rounded-md">
              <div className="w-full h-3/4 bg-[#00B8D1] rounded-t-md"></div>
              <div className="w-full h-1/4 flex justify-center items-center ">
                <p>ຫ້ອງນອນ 8x8 m</p>
              </div>
            </div>
            <div className="w-1/6 h-full ml-3 border-2 border-[#E0E0E0] rounded-md">
              <div className="w-full h-3/4 bg-[#00B8D1] rounded-t-md"></div>
              <div className="w-full h-1/4 flex justify-center items-center ">
                <p>ຫ້ອງນອນ 8x8 m</p>
              </div>
            </div>
          </div>
          {/* Line */}
          <div className="w-full my-4 border border-gray"></div>
          {/* floor 3 */}
          <div className="w-full h-[185px] flex">
            <div className="w-[150px] h-full bg-[#00B8D1] rounded-md flex flex-col justify-center items-center">
              <p className="text-2xl font-bold text-[#fff]">ທີ່ດິນ</p>
              <p className="text-[#fff]">ພື້ນທີ່ 60 ㎡</p>
            </div>
            <div className="w-1/6 h-full ml-3 border-2 border-[#E0E0E0] rounded-md">
              <div className="w-full h-3/4 bg-[#00B8D1] rounded-t-md"></div>
              <div className="w-full h-1/4 flex justify-center items-center ">
                <p>ສະລອຍນ້ຳ 5x5 m</p>
              </div>
            </div>
            <div className="w-1/6 h-full ml-3 border-2 border-[#E0E0E0] rounded-md">
              <div className="w-full h-3/4 bg-[#00B8D1] rounded-t-md"></div>
              <div className="w-full h-1/4 flex justify-center items-center ">
                <p>ສາລາ 5x5 m</p>
              </div>
            </div>
            <div className="w-1/6 h-full ml-3 border-2 border-[#E0E0E0] rounded-md">
              <div className="w-full h-3/4 bg-[#00B8D1] rounded-t-md"></div>
              <div className="w-full h-1/4 flex justify-center items-center ">
                <p>ສວນດອກໄມ້ 5x5 m</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Detail;
