import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar";
import banner from "../../assets/banner.png";
import Footer from "../pages/Footer";
import { useDispatch } from "react-redux";
import { getAllHome } from "../../api/home/homeAction";
import { useSelector } from "react-redux";
import CardHome from "../cards/cardHome";
import { BASE_URL } from "../config/globalKey";
import axios from "axios";
import { Link } from "react-router-dom";
import { addSearchHome } from "../../slice/searchHomeSlice";
import Filtter from "../filtter";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { motion } from "framer-motion";
function HomePage() {
  const dispatch = useDispatch();
  const [homes, setHomes] = useState([]);
  const { home } = useSelector((state) => state.home);
  //search
  const [searchValue, setSearchValue] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    dispatch(getAllHome());
  }, [dispatch]);

  // console.log(homes);
  // console.log(home);

  useEffect(() => {
    setTimeout(() => {
      if (home?.data) {
        setHomes(home.data);
      }
    }, 500);
  }, [home]);

  const handleSearch = (event) => {
    const value = event.target.value;
    if (value !== null) {
      setSearchValue(value);
    } else {
      setSearchValue(null);
    }
    axios
      .get(`${BASE_URL}/home/getBySearch?search=${value}`)
      .then((response) => {
        setSearchResults(response.data.data);
        if (searchResults.length > 0) {
          dispatch(addSearchHome(response.data.data));
        }
      })
      .catch((error) => console.log(error));

    console.log(searchResults);
  };

  // slide
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    console.log(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <div className="font-Noto bg-[#fff] ">
      {/*=============== Navbar =================*/}
      <Navbar />

      {/*=============== content =================*/}
      <div className="relative  h-auto]  ">
        {/*=============== Banner =================*/}
        <img
          src={banner}
          alt="banner"
          className=" h-[386px] w-[1540px] object-cover z-10"
        />
        {/*=============== Filtter =================*/}
        <Filtter />
        {/* =============== ຂໍ້ສະເຫນີພິເສດ ================= */}
        <p className="text-xl text-[#575757] pt-28 font-bold mt-44 mx-40">
          ຂໍສະເໜີພິເສດ
        </p>
        <div className="mx-40 mt-4  ">
          {/* <div className="w-full h-full overflow-hidden">
            <Swiper
              className="h-full"
              slidesPerView={2}
              freeMode={true}
              grabCursor={true}
            >
              <div className="swiper-wrapper ">
                <SwiperSlide>
                  <div className="bg-textColor h-[190px] w-full rounded-xl">
                    Slide 1
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-textColor h-[190px] w-full ml-2 rounded-xl">
                    Slide 2
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-textColor h-[190px] w-full ml-4 rounded-xl">
                    Slide 3
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div> */}
          <div className="w-full h-full container-slide-banner ">
            <motion.dev
              ref={carousel}
              className="carousel"
              whileTap={{ cursor: "grabbing" }}
            >
              <motion.dev
                className="inner h-full "
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
              >
                <motion.dev className="item p-1">
                  <div className="bg-[#00B8D1] h-[190px] w-[510px] rounded-xl">
                    Slide 1
                  </div>
                </motion.dev>
                <motion.dev className="item p-1">
                  <div className="bg-[#00B8D1] h-[190px] w-[510px] rounded-xl">
                    Slide 1
                  </div>
                </motion.dev>
                <motion.dev className="item p-1">
                  <div className="bg-[#00B8D1] h-[190px] w-[510px] rounded-xl">
                    Slide 1
                  </div>
                </motion.dev>
              </motion.dev>
            </motion.dev>
          </div>
        </div>
        {/* =============== ສະຖານທີ່ຍອດນິຍົມ ================= */}
        <div className="mt-20 flex justify-center">
          <p className="text-2xl text-[#575757] font-bold ">ສະຖານທີ່ຍອດນິຍົມ</p>
        </div>
        <div className="h-[200px]  mx-40 mt-6 flex justify-around ">
          <div className="h-[140px] w-[140px] bg-logoColor rounded-full flex justify-center items-center relative">
            <div className=" items-center absolute top-[105%]">
              <p className=" font-bold text-base mx-10">ດົງໂດກ</p>
              <p className=" text-[#575757] text-base ">ໄຊທານີ, ນະຄອນຫຼວງ</p>
            </div>
          </div>
          <div className="h-[140px] w-[140px] bg-logoColor rounded-full flex justify-center items-center relative">
            <div className=" items-center absolute top-[105%]">
              <p className=" font-bold text-base mx-10">ດົງໂດກ</p>
              <p className=" text-[#575757] text-base ">ໄຊທານີ, ນະຄອນຫຼວງ</p>
            </div>
          </div>
          <div className="h-[140px] w-[140px] bg-logoColor rounded-full flex justify-center items-center relative">
            <div className=" items-center absolute top-[105%]">
              <p className=" font-bold text-base mx-10">ດົງໂດກ</p>
              <p className=" text-[#575757] text-base ">ໄຊທານີ, ນະຄອນຫຼວງ</p>
            </div>
          </div>
          <div className="h-[140px] w-[140px] bg-logoColor rounded-full flex justify-center items-center relative">
            <div className=" items-center absolute top-[105%]">
              <p className=" font-bold text-base mx-10">ດົງໂດກ</p>
              <p className=" text-[#575757] text-base ">ໄຊທານີ, ນະຄອນຫຼວງ</p>
            </div>
          </div>
          <div className="h-[140px] w-[140px] bg-logoColor rounded-full flex justify-center items-center relative">
            <div className=" items-center absolute top-[105%]">
              <p className=" font-bold text-base mx-10">ດົງໂດກ</p>
              <p className=" text-[#575757] text-base ">ໄຊທານີ, ນະຄອນຫຼວງ</p>
            </div>
          </div>
          <div className="h-[140px] w-[140px] bg-logoColor rounded-full flex justify-center items-center relative">
            <div className=" items-center absolute top-[105%]">
              <p className=" font-bold text-base mx-10">ດົງໂດກ</p>
              <p className=" text-[#575757] text-base ">ໄຊທານີ, ນະຄອນຫຼວງ</p>
            </div>
          </div>
        </div>
        {/* =============== ສຳຫຼວດທີ່ຢູ່ອາໄສ ================= */}
        <div className="mt-16 flex justify-center">
          <p className="text-2xl text-[#575757] font-bold ">ສຳຫຼວດທີ່ຢູ່ອາໄສ</p>
        </div>
        <div className="h-[240px]  mx-40 mt-6 flex justify-evenly">
          <div className=" w-[250px] h-[240px] border border-[#E0E0E0] shadow-sm">
            <div className="w-full h-[160px] bg-logoColor"></div>
            <div className="m-4 ">
              <p className="text-sm font-bold">ເຮືອນ</p>
              <p className="text-xs text-[#575757]">2,450 ແຫ່ງ</p>
            </div>
          </div>
          <div className=" w-[250px] h-[240px] border border-[#E0E0E0] shadow-sm">
            <div className="w-full h-[160px] bg-logoColor"></div>
            <div className="m-4">
              <p className="text-sm font-bold">ເຮືອນ</p>
              <p className="text-xs text-[#575757]">2,450 ແຫ່ງ</p>
            </div>
          </div>
          <div className=" w-[250px] h-[240px] border border-[#E0E0E0] shadow-sm">
            <div className="w-full h-[160px] bg-logoColor"></div>
            <div className="m-4">
              <p className="text-sm font-bold">ເຮືອນ</p>
              <p className="text-xs text-[#575757]">2,450 ແຫ່ງ</p>
            </div>
          </div>
          <div className=" w-[250px] h-[240px] border border-[#E0E0E0] shadow-sm">
            <div className="w-full h-[160px] bg-logoColor"></div>
            <div className="m-4">
              <p className="text-sm font-bold">ເຮືອນ</p>
              <p className="text-xs text-[#575757]">2,450 ແຫ່ງ</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-10 h-7"></div>

      {/*=============== Footer =================*/}
      <Footer />
    </div>
  );
}

function Button({ icon, text }) {
  return (
    <div className="grid-button relative hover:text-white text-gray">
      <img src={icon} alt={text} className=" " />
      <p className="absolute top-16 text-sm font-bold  ">{text}</p>
    </div>
  );
}
const TextComponent = ({ text, maxLength }) => {
  const displayText = text.slice(0, maxLength) + ".....";
  return <p className="mx-2 text-lg">{displayText}</p>;
};
export default HomePage;
