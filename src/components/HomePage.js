import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import athardmen from "../assets/icons/athardmen.png";
import d from "../assets/icons/d.png";
import otherservice from "../assets/icons/otherservice.png";
import room from "../assets/icons/room.png";
import sellloca from "../assets/icons/sellloca.png";
import price from "../assets/icons/price.png";
import search from "../assets/icons/search.png";
import banner from "../assets/banner.png";
import Footer from "./pages/Footer";
import { useDispatch } from "react-redux";
import { getAllHome } from "../api/home/homeAction";
import { useSelector } from "react-redux";
import CardHome from "./cards/cardHome";
function HomePage() {
  const dispatch = useDispatch();
  const [homes, setHomes] = useState([]);
  const { home } = useSelector((state) => state.home);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getAllHome());
    }, 500);
    setHomes(home.data);
  }, []);
  console.log(homes);
  return (
    <div className="font-Noto bg-background ">
      <Navbar />
      <div className="">
        <img src={banner} alt="banner" className=" h-[386px] w-[1540px] " />
      </div>
      <div className="flex ">
        {/* Sidebar */}
        <div className="w-[23%]  ">
          <div className="mt-[30px] text-xl flex justify-center">
            <p className="">ການບໍລິການອື່ນໆ</p>
          </div>
          <div className="grid grid-cols-2 gap-2 py-6 text-gray px-10 ml-2 ">
            <Button icon={home} text="ບ້ານ" />
            <Button icon={room} text="ຫ້ອງແຖວ" />
            <Button icon={athardmen} text="ອາພາດເມັ້ນ" />
            <Button icon={sellloca} text="ຂາຍດິນ" />
            <Button icon={d} text="ແກ່ເຄື່ອງ" />
            <Button icon={otherservice} text="ບໍລິການອື່ນໆ" />
          </div>
        </div>
        {/* Main Content */}
        <div className="ml-20 my-9 pl-10 ">
          {/* filtter search */}
          <div className="grid grid-cols-3 gap-4 ">
            <div className="relative flex items-center text-gray-400 focus-within:text-gray-600 col-span-2 w-auto h-[60px] ">
              <img
                src={search}
                alt="search"
                className="w-5 h-5 absolute ml-3 pointer-events-none"
              />
              <input
                autoComplete="off"
                type="text"
                name="search"
                placeholder="ຄົ້ນຫາຫ້ອງແຖວທີ່ຕ້ອງການ"
                autocomplete="off"
                aria-label="Search "
                className="w-full h-[55px] pl-10 font-semibold placeholder-gray-500 
              text-black rounded-[6px] border-none  ring-borderInput
               focus:ring-borderInput search-fillter"
              />
            </div>
            <select className="col-span-1  h-[55px] rounded-[6px] flex items-center">
              <option className="">ລາຄາ</option>
            </select>
            <select className="col-span-1  h-[55px] rounded-[6px]">
              <option>ບ້ານສົມສະໝຸກ</option>
            </select>
            <select className="col-span-1  h-[55px] rounded-[6px]">
              <option>ເມືອງຫາດຊາຍຝອງ</option>
            </select>
            <select className="col-span-1  h-[55px] rounded-[6px]">
              <option>ນະຄອນຫຼວງວຽງຈັນ</option>
            </select>
          </div>
          {/* content grid */}
          <div className="grid grid-cols-3 gap-4 mt-7">
            {homes.map((item) => {
              return (
                <div key={item._id}>
                  <CardHome data ={item} imgPrice={price}/>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
function Button({ icon, text }) {
  return (
    <div className="grid-button">
      <img src={icon} alt={text} className="grid-img" />
      <p className="font-bold">{text}</p>
    </div>
  );
}

export default HomePage;
