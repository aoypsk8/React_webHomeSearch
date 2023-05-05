import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar";
import Footer from "./Footer";
import search from "../../assets/icons/search.png";
import distance from "../../assets/icons/distance.png";
import floor from "../../assets/icons/floor.png";
import location from "../../assets/icons/location.png";
function Search() {
  ////state in initialState ///////////////state in web redux
  const { searchHome } = useSelector((state) => state.search);

  console.log(searchHome);
  return (
    <div className="font-Noto bg-[#fff]">
      <Navbar />
      {/* search again  */}
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
          className=" h-[55px] flex items-center justify-around bg-buttonColor rounded-lg
         hover:cursor-pointer  text-white w-1/12 ml-4"
        >
          <div className="flex items-center justify-evenly ">
            <p className="text-xl font-bold  ">ຄົ້ນຫາ</p>
          </div>
        </div>
      </div>

      {/* ==============content ============= */}
      <div className=" w-full h-auto mt-4">
        <div className="flex px-40">
          {/* fillter */}
          <div className="bg-[#00B8D1] w-1/4 h-[420px] rounded-lg"></div>
          {/* data */}
          <div className=" w-3/4 h-64 ml-4">
            <div className="bg-[#00B8D1] w-full h-[130px] rounded-lg"></div>
            <div className="border border-gray w-full h-[270px] rounded-lg mt-5 flex">
              {/* left */}
              <div className="w-3/12 h-full p-3">
                <div className="h-[180px] w-full bg-[#00B8D1] rounded-t-lg"></div>
                <div className="w-full h-[55px]  mt-1 flex">
                  <div className="h-[57px] w-1/3 bg-[#00B8D1] rounded-bl-lg"></div>
                  <div className="h-[57px] w-1/3 bg-[#00B8D1]  mx-1"></div>
                  <div className="h-[57px] w-1/3 bg-[#00B8D1] rounded-br-lg"></div>
                </div>
              </div>
              {/* center */}
              <div className="w-6/12 h-full p-3">
                <div>
                  {/*  */}
                  <p className="text-xl font-extrabold">
                    ເຮືອນ 2 ຊັ້ນໃຫ້ເຊົ່າ ແຄມທາງ ເຂດດົງໂດກ ໃກ້ກັບມະຫາ
                    ວິທະຍາໄລແຫ່ງຊາດ
                  </p>
                  {/*  */}
                  <div className="flex mt-1 items-center">
                    <img
                      src={location}
                      alt="location"
                      className="w-4 h-5 mr-1"
                    />
                    <p className="text-lg font-semibold ">
                      ດົງໂດກ, ໄຊທານີ, ນະຄອນຫຼວງ
                    </p>
                  </div>
                  {/*  */}
                  <div className="flex justify-between mt-1">
                    <p className="border border-[#E0E0E0] font-semibold p-[2px]">
                      ສະລອຍນ້ຳ
                    </p>
                    <p className="border border-[#E0E0E0] font-semibold p-[2px]">
                      ແອ 2 ເຄື່ອງ
                    </p>
                    <p className="border border-[#E0E0E0] font-semibold p-[2px]">
                      ອ່າງລ້ຽງປາ
                    </p>
                    <p className="border border-[#E0E0E0] font-semibold p-[2px]">
                      ສວນດອກໄມ້
                    </p>
                    <p className="border border-[#E0E0E0] font-semibold p-[2px]">
                      ໂຮງຈອດລົດ
                    </p>
                    <p className="border border-[#E0E0E0] font-semibold p-[2px]">
                      2+
                    </p>
                  </div>
                  <p className="text-[#999999] text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos.
                  </p>
                </div>
              </div>
              {/* right */}
              <div className="w-3/12 h-full relative ">
                {/* reviews */}
                <div className=" w-full h-[80px] flex justify-end  pt-3 px-5">
                  <div className="relative">
                    <p className="text-lg font-black">Wonderful</p>
                    <p className="text-xs font-medium absolute right-0">
                      349 reviews
                    </p>
                  </div>
                  <div className="bg-logoColor h-9 w-9 rounded-full flex justify-center items-center ml-2 text-[#fff] font-bold">
                    4.6
                  </div>
                </div>
                {/* location */}
                <div className=" w-full mt-6 px-3 flex">
                  <div className=" h-10 w-28 rounded-xl border border-gray flex justify-evenly items-center">
                    <img src={distance} alt="distance" className="w-4 h-4" />
                    <p className="text-sm">60 m2</p>
                  </div>
                  <div className="ml-1 h-10 w-28 rounded-xl border border-gray flex justify-evenly items-center">
                    <img src={floor} alt="distance" className="w-4 h-4" />
                    <p className="text-sm">2 ຊັ້ນ</p>
                  </div>
                </div>
                {/* price */}
                <div className="mt-3 absolute right-0">
                  <p className="font-medium px-3">
                    <span className="text-2xl font-extrabold">₭ 1,200,000</span>
                    /ເດືອນ
                  </p>
                  <div className="relative">
                    <p className="text-sm font-medium px-3 absolute right-0">
                      ມັດຈຳກ່ອນ{" "}
                      <span className="text-[#EF4638]">₭ 5,000,000</span>
                    </p>
                  </div>
                </div>
                {/* button */}
                <div className=" w-full h-10 absolute bottom-3 px-3">
                  <div className="bg-[#00B8D1] w-full h-full rounded-lg flex justify-center items-center">
                    <p className="text-[#fff] text-xl font-semibold">ຢ້ຽມຊົມ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Search;
