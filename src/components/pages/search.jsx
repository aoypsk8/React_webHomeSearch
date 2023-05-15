import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { Link } from "react-router-dom";
import CardSearch from "../cards/cardSearch";
import { BASE_URL } from "../config/globalKey";
import axios from "axios";
import { addSearchHome } from "../../slice/searchHomeSlice";
function Search() {
  ////state in initialState ///////////////state in web redux
  const { searchHome } = useSelector((state) => state.search);
  const [home, setHome] = useState([]);

  ///new search
  const [searchValue, setSearchValue] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();
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

  console.log(searchHome);
  useEffect(() => {
    if (searchHome) {
      setHome(searchHome);
    }
  }, []);
  console.log(home);

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
      <div className="w-full h-[90px] bg-[#00292F] px-40 flex  py-4 ">
        <div className="relative flex items-center col-span-2 w-11/12 h-[60px]">
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
            className="w-full h-[55px] pl-10 font-semibold  border border-gray rounded-[10px] border-gray-500 focus:border-gray focus:outline-none 
               "
          />
          {searchValue && searchResults.length > 0 && (
            <div className="absolute items-center w-[100%] z-50 top-14">
              {searchResults.map((item) => {
                return (
                  <Link
                    to={`/`}
                    style={{ textDecoration: "none" }}
                    key={item._id}
                    onClick={() => window.location.reload()}
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
            <div className="h-[60px] w-full  flex items-center justify-around  rounded-[10px]  text-white mt-5">
              {/* hover:outline hover:outline-buttonColor hover:bg-opacity-5 hover:cursor-pointer */}
              <div className="h-full w-full rounded-l-[10px] flex justify-center items-center outline outline-[#00B8D1] hover:text-buttonColor hover:bg-opacity-0 hover:cursor-pointer bg-[#00B8D1]">
                <p className="text-lg font-semibold ">ເຮືອນເຊົ່າ</p>
              </div>
              <div className=" h-full w-full  rounded-r-[10px] flex justify-center items-center outline outline-[#00B8D1] hover:text-buttonColor hover:bg-opacity-0 hover:cursor-pointer bg-[#00B8D1]">
                <p className="text-lg font-semibold ">ເຮືອນຂາຍ</p>
              </div>
            </div>
            {/* area1 */}
            <div className=" w-full mt-6 flex items-center">
              <div className=" h-12 w-36 px-3 border border-[#E0E0E0] rounded-[10px] flex justify-between items-center">
                <img src={kip} alt="distance" className="w-4 h-4" />
                <p className="text-lg">500,000</p>
              </div>
              <hr className="w-5 border border-gray"></hr>
              <div className="h-12 w-36 px-3 border border-[#E0E0E0] rounded-[10px] flex justify-between items-center">
                <img src={kip} alt="distance" className="w-4 h-4" />
                <p className="text-lg">1,500,000</p>
              </div>
            </div>
            {/* area2 */}
            <div className=" w-full mt-4 flex">
              <div className=" h-12 w-36 px-3 border border-[#E0E0E0] rounded-[10px] flex justify-between items-center">
                <img src={distance} alt="distance" className="w-4 h-4" />
                <p className="text-lg">60 ㎡</p>
              </div>
              <div className="w-4"></div>
              <div className="ml-1 h-12 w-36 px-3 border border-[#E0E0E0] rounded-[10px] flex justify-between items-center">
                <img src={floor} alt="distance" className="w-4 h-4" />
                <p className="text-lg">2 ຊັ້ນ</p>
              </div>
            </div>
            {/* Line  */}
            <div className="w-full mt-4 border border-gray"></div>
            {/* review  */}
            <p className="text-base font-semibold mt-4 text-[#000000]">
              ຄະແນນຣີວິວ
            </p>
            <form>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-[13px] w-[13px] "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-base font-normal pl-4">
                  {" "}
                  1 ຄະແນນ
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-[13px] w-[13px]"
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-base font-normal pl-4">
                  {" "}
                  2 ຄະແນນ
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-[13px] w-[13px] "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-base font-normal pl-4">
                  {" "}
                  3 ຄະແນນ
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-[13px] w-[13px] "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-base font-normal pl-4">
                  {" "}
                  4 ຄະແນນ
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-[13px] w-[13px] "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-base font-normal pl-4">
                  {" "}
                  5 ຄະແນນ
                </label>
              </div>
            </form>
            {/* Line  */}
            {/* <div className="w-full mt-4 border border-gray"></div> */}
            {/* ສິ່ງອຳນວຍຄວາມສະດວກໃນຫ້ອງ  */}
            {/* <p className="text-lg font-bold mt-4">ສິ່ງອຳນວຍຄວາມສະດວກໃນຫ້ອງ</p>
            <form>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-[13px] w-[13px] "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-base font-normal pl-4">
                  {" "}
                  ເຄື່ອງປັບອາກາດ
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-[13px] w-[13px] "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-base font-normal pl-4">
                  {" "}
                  ສະລອຍນ້ຳ
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-[13px] w-[13px] "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-base font-normal pl-4">
                  {" "}
                  ບ່ອນຈອດລົດ
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-[13px] w-[13px] "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-base font-normal pl-4">
                  {" "}
                  ອ່າງປາ
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-[13px] w-[13px] "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-base font-normal pl-4">
                  {" "}
                  ໂຮງຈອດລົດ
                </label>
              </div>
            </form> */}
            {/* Line  */}
            <div className="w-full mt-4 border border-gray"></div>
            {/* ໄລຍະຫ່າງຈາກທາງໃຫຍ່  */}
            <p className="text-base font-semibold mt-4 text-[#000000]">
              ໄລຍະຫ່າງຈາກທາງໃຫຍ່
            </p>
            <form>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-[13px] w-[13px] "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-base font-normal pl-4">
                  {" "}
                  ແຄມທາງ
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-[13px] w-[13px] "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-base font-normal pl-4">
                  {" "}
                  10 m
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-[13px] w-[13px] "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-base font-normal pl-4">
                  {" "}
                  20 m
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-[13px] w-[13px] "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-base font-normal pl-4">
                  {" "}
                  30 m
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-[13px] w-[13px] "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-base font-normal pl-4">
                  {" "}
                  50 m ຂື້ນໄປ
                </label>
              </div>
            </form>
            {/* Line  */}
            <div className="w-full mt-4 border border-gray"></div>
            {/* ໄລຍະຫ່າງຈາກຕົວເມືອງ  */}
            <p className="text-base font-semibold mt-4 text-[#000000]">
              ໄລຍະຫ່າງຈາກຕົວເມືອງ
            </p>
            <form>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-[13px] w-[13px] "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-base font-normal pl-4">
                  {" "}
                  ເຂດຕົວເມືອງ
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-[13px] w-[13px] "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-base font-normal pl-4">
                  {" "}
                  1 km
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-[13px] w-[13px] "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-base font-normal pl-4">
                  {" "}
                  2 km
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-[13px] w-[13px] "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-base font-normal pl-4">
                  {" "}
                  3 km
                </label>
              </div>
              <div className="mt-2 flex justify-start items-center">
                <input
                  className="h-[13px] w-[13px] "
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />
                <label for="" className="text-base font-normal pl-4">
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
            {home.length > 0 &&
              home.map((item) => {
                return <CardSearch key={item._id} data={item} />;
              })}

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
const TextComponent = ({ text, maxLength }) => {
  const displayText = text.slice(0, maxLength) + ".....";
  return <p className="mx-2 text-lg">{displayText}</p>;
};
