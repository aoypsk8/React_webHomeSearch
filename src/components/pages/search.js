import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar";
import Footer from "./Footer";
import search from "../../assets/icons/search.png";
import distance from "../../assets/icons/distance.png";
import floor from "../../assets/icons/floor.png";
import location from "../../assets/icons/location.png";
import kip from "../../assets/icons/kip.png";
import ArrowLeft from "../../assets/icons/ArrowLeft.png";
import ArrowRight from "../../assets/icons/ArrowRight.png";
import ArrowLeftColor from "../../assets/icons/ArrowLeftColor.png";
import ArrowRightColor from "../../assets/icons/ArrowRightColor.png";
function Search() {
  ////state in initialState ///////////////state in web redux
  const { searchHome } = useSelector((state) => state.search);

  console.log(searchHome);

  const [handleLeft, setIsHandleLeft] = useState(true);
  const [handleRight, setIsHandleRight] = useState(true);
  const handleLeftHover = () => {
    setIsHandleLeft(!handleLeft);
  };
  const handleRightHover = () => {
    setIsHandleRight(!handleRight);
  };

  return (
    <div className="font-Noto bg-[#fff] h-auto">
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
          className=" h-[55px] flex items-center justify-around bg-[#00B8D1] rounded-lg
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
          {/* fillter left*/}
          <div className="w-1/4 h-auto">
            <div className="bg-[#00B8D1] h-[420px] rounded-lg"></div>
            {/*=============== Button ເຮືອນເຊົ່າ && ເຮືອນຂາຍ=================*/}
            <div className="h-[60px] w-full  flex items-center justify-around  rounded-xl  text-white mt-5">
              {/* hover:outline hover:outline-buttonColor hover:bg-opacity-5 hover:cursor-pointer */}
              <div className=" h-[100%] w-[100%] rounded-l-xl flex justify-center items-center outline outline-[#00B8D1] hover:text-[#00B8D1] hover:bg-opacity-0 hover:cursor-pointer bg-[#00B8D1]">
                <p className="text-lg font-bold ">ເຮືອນເຊົ່າ</p>
              </div>
              <div className=" h-[100%] w-[100%]  rounded-r-xl flex justify-center items-center outline outline-[#00B8D1] hover:text-[#00B8D1] hover:bg-opacity-0 hover:cursor-pointer bg-[#00B8D1]">
                <p className="text-lg font-bold ">ເຮືອນຂາຍ</p>
              </div>
            </div>
            {/* area1 */}
            <div className=" w-full mt-6 flex items-center">
              <div className=" h-12 w-36 px-3 rounded-xl border border-gray flex justify-between items-center">
                <img src={kip} alt="distance" className="w-4 h-4" />
                <p className="text-lg">500,000</p>
              </div>
              <hr className="w-5 border border-gray"></hr>
              <div className="h-12 w-36 px-3 rounded-xl border border-gray flex justify-between items-center">
                <img src={kip} alt="distance" className="w-4 h-4" />
                <p className="text-lg">1,500,000</p>
              </div>
            </div>
            {/* area2 */}
            <div className=" w-full mt-4 flex">
              <div className=" h-12 w-36 px-3 rounded-xl border border-gray flex justify-between items-center">
                <img src={distance} alt="distance" className="w-4 h-4" />
                <p className="text-lg">60 ㎡</p>
              </div>
              <div className="w-4"></div>
              <div className="ml-1 h-12 w-36 px-3 rounded-xl border border-gray flex justify-between items-center">
                <img src={floor} alt="distance" className="w-4 h-4" />
                <p className="text-lg">2 ຊັ້ນ</p>
              </div>
            </div>
            {/* Line  */}
            <div className="w-full mt-4 border border-gray"></div>
            {/* review  */}
            <p className="text-lg font-bold mt-4">ຄະແນນຣີວິວ</p>
            <form>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-4 w-4 "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-lg font-medium pl-4">
                  {" "}
                  1 ຄະແນນ
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-4 w-4 "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-lg font-medium pl-4">
                  {" "}
                  2 ຄະແນນ
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-4 w-4 "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-lg font-medium pl-4">
                  {" "}
                  3 ຄະແນນ
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-4 w-4 "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-lg font-medium pl-4">
                  {" "}
                  4 ຄະແນນ
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-4 w-4 "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-lg font-medium pl-4">
                  {" "}
                  5 ຄະແນນ
                </label>
              </div>
            </form>
            {/* Line  */}
            <div className="w-full mt-4 border border-gray"></div>
            {/* ສິ່ງອຳນວຍຄວາມສະດວກໃນຫ້ອງ  */}
            <p className="text-lg font-bold mt-4">ສິ່ງອຳນວຍຄວາມສະດວກໃນຫ້ອງ</p>
            <form>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-4 w-4 "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-lg font-medium pl-4">
                  {" "}
                  ເຄື່ອງປັບອາກາດ
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-4 w-4 "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-lg font-medium pl-4">
                  {" "}
                  ສະລອຍນ້ຳ
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-4 w-4 "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-lg font-medium pl-4">
                  {" "}
                  ບ່ອນຈອດລົດ
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-4 w-4 "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-lg font-medium pl-4">
                  {" "}
                  ອ່າງປາ
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-4 w-4 "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-lg font-medium pl-4">
                  {" "}
                  ໂຮງຈອດລົດ
                </label>
              </div>
            </form>
            {/* Line  */}
            <div className="w-full mt-4 border border-gray"></div>
            {/* ໄລຍະຫ່າງຈາກທາງໃຫຍ່  */}
            <p className="text-lg font-bold mt-4">ໄລຍະຫ່າງຈາກທາງໃຫຍ່</p>
            <form>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-4 w-4 "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-lg font-medium pl-4">
                  {" "}
                  ແຄມທາງ
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-4 w-4 "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-lg font-medium pl-4">
                  {" "}
                  10 m
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-4 w-4 "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-lg font-medium pl-4">
                  {" "}
                  20 m
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-4 w-4 "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-lg font-medium pl-4">
                  {" "}
                  30 m
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-4 w-4 "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-lg font-medium pl-4">
                  {" "}
                  50 m ຂື້ນໄປ
                </label>
              </div>
            </form>
            {/* Line  */}
            <div className="w-full mt-4 border border-gray"></div>
            {/* ໄລຍະຫ່າງຈາກຕົວເມືອງ  */}
            <p className="text-lg font-bold mt-4">ໄລຍະຫ່າງຈາກຕົວເມືອງ</p>
            <form>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-4 w-4 "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-lg font-medium pl-4">
                  {" "}
                  ເຂດຕົວເມືອງ
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-4 w-4 "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-lg font-medium pl-4">
                  {" "}
                  1 km
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-4 w-4 "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-lg font-medium pl-4">
                  {" "}
                  2 km
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-4 w-4 "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-lg font-medium pl-4">
                  {" "}
                  3 km
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-4 w-4 "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-lg font-medium pl-4">
                  {" "}
                  5 km ຂື້ນໄປ
                </label>
              </div>
            </form>
          </div>

          {/*============== data right ============== */}
          <div className=" w-3/4 h-auto ml-4">
            {/*============== banner============== */}
            <div className="bg-[#00B8D1] w-full h-[130px] rounded-lg"></div>
            {/* ============== Card ============== */}

            <div className="border border-gray w-full h-[270px] rounded-lg mt-5 flex">
              {/* ==============left============== */}
              <div className="w-3/12 h-full p-3">
                <div className="h-[180px] w-full bg-[#00B8D1] rounded-t-lg"></div>
                <div className="w-full h-[55px]  mt-1 flex">
                  <div className="h-[57px] w-1/3 bg-[#00B8D1] rounded-bl-lg"></div>
                  <div className="h-[57px] w-1/3 bg-[#00B8D1]  mx-1"></div>
                  <div className="h-[57px] w-1/3 bg-[#00B8D1] rounded-br-lg"></div>
                </div>
              </div>
              {/*============== center ==============*/}
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
              {/*============== right ==============*/}
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
                    <p className="text-sm">60 ㎡</p>
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
            <div className="border border-gray w-full h-[270px] rounded-lg mt-5 flex">
              {/* ==============left============== */}
              <div className="w-3/12 h-full p-3">
                <div className="h-[180px] w-full bg-[#00B8D1] rounded-t-lg"></div>
                <div className="w-full h-[55px]  mt-1 flex">
                  <div className="h-[57px] w-1/3 bg-[#00B8D1] rounded-bl-lg"></div>
                  <div className="h-[57px] w-1/3 bg-[#00B8D1]  mx-1"></div>
                  <div className="h-[57px] w-1/3 bg-[#00B8D1] rounded-br-lg"></div>
                </div>
              </div>
              {/*============== center ==============*/}
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
              {/*============== right ==============*/}
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
                    <p className="text-sm">60 ㎡</p>
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
            <div className="border border-gray w-full h-[270px] rounded-lg mt-5 flex">
              {/* ==============left============== */}
              <div className="w-3/12 h-full p-3">
                <div className="h-[180px] w-full bg-[#00B8D1] rounded-t-lg"></div>
                <div className="w-full h-[55px]  mt-1 flex">
                  <div className="h-[57px] w-1/3 bg-[#00B8D1] rounded-bl-lg"></div>
                  <div className="h-[57px] w-1/3 bg-[#00B8D1]  mx-1"></div>
                  <div className="h-[57px] w-1/3 bg-[#00B8D1] rounded-br-lg"></div>
                </div>
              </div>
              {/*============== center ==============*/}
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
              {/*============== right ==============*/}
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
                    <p className="text-sm">60 ㎡</p>
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
            <div className="border border-gray w-full h-[270px] rounded-lg mt-5 flex">
              {/* ==============left============== */}
              <div className="w-3/12 h-full p-3">
                <div className="h-[180px] w-full bg-[#00B8D1] rounded-t-lg"></div>
                <div className="w-full h-[55px]  mt-1 flex">
                  <div className="h-[57px] w-1/3 bg-[#00B8D1] rounded-bl-lg"></div>
                  <div className="h-[57px] w-1/3 bg-[#00B8D1]  mx-1"></div>
                  <div className="h-[57px] w-1/3 bg-[#00B8D1] rounded-br-lg"></div>
                </div>
              </div>
              {/*============== center ==============*/}
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
              {/*============== right ==============*/}
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
                    <p className="text-sm">60 ㎡</p>
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
            <div className="border border-gray w-full h-[270px] rounded-lg mt-5 flex">
              {/* ==============left============== */}
              <div className="w-3/12 h-full p-3">
                <div className="h-[180px] w-full bg-[#00B8D1] rounded-t-lg"></div>
                <div className="w-full h-[55px]  mt-1 flex">
                  <div className="h-[57px] w-1/3 bg-[#00B8D1] rounded-bl-lg"></div>
                  <div className="h-[57px] w-1/3 bg-[#00B8D1]  mx-1"></div>
                  <div className="h-[57px] w-1/3 bg-[#00B8D1] rounded-br-lg"></div>
                </div>
              </div>
              {/*============== center ==============*/}
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
              {/*============== right ==============*/}
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
                    <p className="text-sm">60 ㎡</p>
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
            <div className="border border-gray w-full h-[270px] rounded-lg mt-5 flex">
              {/* ==============left============== */}
              <div className="w-3/12 h-full p-3">
                <div className="h-[180px] w-full bg-[#00B8D1] rounded-t-lg"></div>
                <div className="w-full h-[55px]  mt-1 flex">
                  <div className="h-[57px] w-1/3 bg-[#00B8D1] rounded-bl-lg"></div>
                  <div className="h-[57px] w-1/3 bg-[#00B8D1]  mx-1"></div>
                  <div className="h-[57px] w-1/3 bg-[#00B8D1] rounded-br-lg"></div>
                </div>
              </div>
              {/*============== center ==============*/}
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
              {/*============== right ==============*/}
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
                    <p className="text-sm">60 ㎡</p>
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

            {/* ============== Button bottom ============== */}
            <div className="mt-11  w-full h-11 flex ">
              {/* button */}
              <div className="w-1/4 h-full "></div>
              <div
                className="w-1/4 h-full pr-2 mr-1 text-[#fff]"
                onMouseEnter={handleLeftHover}
                onMouseLeave={handleLeftHover}
              >
                <div className="bg-[#00B8D1]  w-full h-full rounded-lg flex justify-center items-center p-3 outline outline-[#00B8D1] hover:bg-opacity-5 hover:text-[#00B8D1]">
                  <div className="w-1/3">
                    <img
                      src={handleLeft ? ArrowLeft : ArrowLeftColor}
                      alt="arrowleft"
                      className=""
                    />
                  </div>
                  <p className="text-xl font-semibold w-2/3">ຍ້ອນກັບ</p>
                </div>
              </div>
              <div
                className="w-1/4 h-full pl-2 ml-2 text-[#fff]"
                onMouseEnter={handleRightHover}
                onMouseLeave={handleRightHover}
              >
                <div className="bg-[#00B8D1] w-full h-full rounded-lg flex justify-center items-center relative outline outline-[#00B8D1] hover:bg-opacity-5 hover:text-[#00B8D1]">
                  <p className=" text-xl font-semibold w-2/3 absolute right-0">
                    ໜ້າຕໍ່ໄປ
                  </p>
                  <div className="w-1/3 h-full flex justify-center items-center absolute right-0  ">
                    <div className="w-1/3 absolute right-3 ">
                      <img
                        src={handleRight ? ArrowRight : ArrowRightColor}
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-1/4 h-full relative flex items-center">
                <p className="absolute right-0 text-[#999999] text-lg">
                  1 of 34 pages
                </p>
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
