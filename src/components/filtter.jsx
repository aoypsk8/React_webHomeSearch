import React, { useState } from "react";
import athardmen from "../assets/icons/athardmen.png";
import d from "../assets/icons/d.png";
import otherservice from "../assets/icons/otherservice.png";
import room from "../assets/icons/room.png";
import sellloca from "../assets/icons/sellloca.png";
import Home from "../assets/icons/home.png";
import search from "../assets/icons/search.png";
import axios from "axios";
import { BASE_URL } from "./config/globalKey";
import { useDispatch } from "react-redux";
import { addSearchHome } from "../slice/searchHomeSlice";
import { Link } from "react-router-dom";
import distance from "../assets/icons/distance.png"
import floor from "../assets/icons/floor.png"
function Filtter() {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

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
  return (
    <div class="absolute h-[250px] w-[80%] mx-40 top-36  z-20  ">
      {/*=============== Button menu =================*/}
      <div className=" w-[100%] flex justify-evenly px-28">
        <Button icon={Home} text="ບ້ານ" />
        <Button icon={room} text="ຫ້ອງແຖວ" />
        <Button icon={athardmen} text="ອາພາດເມັ້ນ" />
        <Button icon={sellloca} text="ທີ່ດີນ" />
        <Button icon={d} text="ແກ່ເຄື່ອງ" />
        <Button icon={otherservice} text="ອື່ນໆ" />
      </div>
      {/*=============== content in filtter =================*/}
      <div className="w-[100%] h-[290px] mt-5 pt-[16px] bg-white rounded-xl shadow-xl">
        {/*=============== Button ເຮືອນເຊົ່າ && ເຮືອນຂາຍ=================*/}
        <div className="h-[60px] w-auto mx-[450px]  flex items-center justify-around  rounded-[10px]  text-white">
          {/* hover:outline hover:outline-buttonColor hover:bg-opacity-5 hover:cursor-pointer */}
          <div className=" h-full w-full rounded-l-[10px] flex justify-center items-center outline outline-[#00B8D1] hover:text-buttonColor hover:bg-opacity-0 hover:cursor-pointer bg-[#00B8D1]">
            <p className="text-lg font-semibold ">ເຮືອນເຊົ່າ</p>
          </div>
          <div className=" h-full w-full  rounded-r-[10px] flex justify-center items-center outline outline-[#00B8D1] hover:text-buttonColor hover:bg-opacity-0 hover:cursor-pointer bg-[#00B8D1]">
            <p className="text-lg font-semibold ">ເຮືອນຂາຍ</p>
          </div>
        </div>
        {/*=============== Search filtter=================*/}
        <div className="relative flex items-center    col-span-2 w-auto h-[60px] mx-14 mt-[16px]">
          <img
            src={search}
            alt="search"
            className="w-5 h-5 absolute ml-3 pointer-events-none"
          />

          <input
            value={searchValue}
            onChange={handleSearch}
            autoComplete="off"
            type="text"
            name="search"
            placeholder="ປ້ອນຊື່ສະຖານທີ່ ຫຼື ຕຳແໜ່ງ"
            aria-label="Search "
            className="w-full h-[55px] pl-10 font-normal text-lg   border border-[#E0E0E0] rounded-[10px]  focus:border-[#E0E0E0] focus:outline-none 
               "
          />
          {searchValue && searchResults.length > 0 && (
            <div className="absolute items-center w-[100%] z-50 top-14">
              {searchResults.map((item) => {
                return (
                  <Link
                    to={`/search`}
                    style={{ textDecoration: "none" }}
                    key={item._id}
                  >
                    <div className="bg-[#d7d4d4] w-full h-[70px]">
                      <div className="flex  ">
                        <p className="mx-2 text-xl">{item.addressId.village}</p>
                        <p className="mx-2 text-xl">
                          {item.addressId.district}
                        </p>
                        <p className="mx-2 text-xl">
                          {item.addressId.province}
                        </p>
                      </div>
                      <TextComponent text={item.description} maxLength={70} />
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
        {/*=============== filtter max min =================*/}
        <div className="flex items-center   col-span-2 w-auto h-[60px] mx-14 mt-4">
          {/* Min */}
          <div className="relative flex items-center  col-span-2 w-1/4 h-[60px] ">
            <p className="w-5 absolute ml-3 pointer-events-none text-lg font-bold">
              Min
            </p>

            <input
              // value={searchValue}
              // onChange={handleSearch}
              autoComplete="off"
              type="text"
              name="search"
              placeholder="ຈຳນວນເງີນ"
              aria-label="Search "
              className="w-full h-[55px] pl-14 pr-3 font-semibold border border-[#E0E0E0] rounded-[10px]  focus:border-[#E0E0E0] focus:outline-none"
            />
          </div>
          {/* max */}
          <hr className="w-5 border border-gray"></hr>
          <div className="relative flex items-center   col-span-2 w-1/4 h-[60px]  mr-5 ">
            <p className="w-5  absolute ml-3 pointer-events-none text-lg font-bold">
              Max
            </p>

            <input
              // value={searchValue}
              // onChange={handleSearch}
              autoComplete="off"
              type="text"
              name="search"
              placeholder="ຈຳນວນເງີນ"
              aria-label="Search "
              className="w-full h-[55px] pl-14 pr-3 font-semibold rounded-[10px] border border-[#E0E0E0] focus:border-[#E0E0E0] focus:outline-none"
            />
          </div>
          <select className="col-span-1  h-[55px] rounded-[6px] flex items-center w-1/4 border border-[#E0E0E0] outline-none mr-5">
            <option className="">ລາຄາ</option>
          </select>
          <select className="col-span-1  h-[55px] rounded-[6px] flex items-center border border-[#E0E0E0] outline-none  w-1/4">
            <option className="">ລາຄາ</option>
          </select>
          {/* <div className=" h-12 w-36 px-3 rounded-xl border border-gray flex justify-between items-center">
            <img src={distance} alt="distance" className="w-4 h-4" />
            <p className="text-lg">60 ㎡</p>
          </div> */}
        </div>
        {/*=============== Button =================*/}
        <div className="h-[60px] w-auto mx-[280px]  flex items-center justify-around  rounded-xl mt-5 ">
          <div className=" h-[100%] w-[100%]  rounded-xl flex justify-center items-center bg-[#00B8D1] hover:cursor-pointer">
            <p className="text-2xl font-bold text-white">ຄົ້ນຫາ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button({ icon, text }) {
  return (
    <div className="grid-button relative hover:text-white text-gray">
      <img src={icon} alt={text} className=" " />
      <p className="absolute top-16 text-sm font-semibold mt-2 ">{text}</p>
    </div>
  );
}

export default Filtter;

const TextComponent = ({ text, maxLength }) => {
  const displayText = text.slice(0, maxLength) + ".....";
  return <p className="mx-2 text-lg">{displayText}</p>;
};
