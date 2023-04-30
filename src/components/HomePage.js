import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import athardmen from "../assets/icons/athardmen.png";
import d from "../assets/icons/d.png";
import otherservice from "../assets/icons/otherservice.png";
import room from "../assets/icons/room.png";
import sellloca from "../assets/icons/sellloca.png";
import Home from "../assets/icons/Home.png";
import price from "../assets/icons/price.png";
import search from "../assets/icons/search.png";
import banner from "../assets/banner.png";
import Footer from "./pages/Footer";
import { useDispatch } from "react-redux";
import { getAllHome } from "../api/home/homeAction";
import { useSelector } from "react-redux";
import CardHome from "./cards/cardHome";
import { BASE_URL } from "./config/globalKey";
import axios from "axios";
import { Link } from "react-router-dom";
import { addSearchHome } from "../slice/searchHomeSlice";
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
        if (searchResults.length > 0 ) {
          dispatch(addSearchHome(response.data.data));
        }
      })
      .catch((error) => console.log(error));

    console.log(searchResults);
  };
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
            <Button icon={Home} text="ບ້ານ" />
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
          <div>
            <div className="grid grid-cols-3 gap-4 ">
              <div className="relative flex items-center text-gray-400 focus-within:text-gray-600 col-span-2 w-auto h-[60px] ">
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
                  placeholder="ຄົ້ນຫາຫ້ອງແຖວທີ່ຕ້ອງການ"
                  aria-label="Search "
                  className="w-full h-[55px] pl-10 font-semibold placeholder-gray-500 
              text-black rounded-[6px] border-none  ring-borderInput
               focus:ring-borderInput search-fillter"
                />
              </div>
              <select className="col-span-1  h-[55px] rounded-[6px] flex items-center">
                <option className="">ລາຄາ</option>
              </select>
            </div>

            {searchValue && searchResults.length > 0 && (
              <div className="absolute items-center w-[575px] z-50 ">
                {searchResults.map((item) => {
                  return (
                    <Link
                      to={`/search`}
                      style={{ textDecoration: "none" }}
                      key={item._id}
                    >
                      <div className="bg-[#d7d4d4] w-full h-[70px]">
                        <div className="flex  ">
                          <p className="mx-2 text-xl">
                            {item.addressId.village}
                          </p>
                          <p className="mx-2 text-xl">
                            {item.addressId.district}
                          </p>
                          <p className="mx-2 text-xl">
                            {item.addressId.province}
                          </p>
                        </div>
                        <TextComponent text={item.description} maxLength={50} />
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
            {/* <select className="col-span-1  h-[55px] rounded-[6px]">
              <option>ບ້ານສົມສະໝຸກ</option>
            </select>
            <select className="col-span-1  h-[55px] rounded-[6px]">
              <option>ເມືອງຫາດຊາຍຝອງ</option>
            </select>
            <select className="col-span-1  h-[55px] rounded-[6px]">
              <option>ນະຄອນຫຼວງວຽງຈັນ</option>
            </select> */}
          </div>
          {/* content grid */}
          <div className="grid grid-cols-3 gap-4 mt-7">
            {homes ? (
              homes.map((item) => {
                return (
                  <div key={item._id}>
                    <CardHome data={item} imgPrice={price} />
                  </div>
                );
              })
            ) : (
              <div>Loadding.....</div>
            )}
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
const TextComponent = ({ text, maxLength }) => {
  const displayText = text.slice(0, maxLength) + ".....";
  return <p className="mx-2 text-lg">{displayText}</p>;
};
