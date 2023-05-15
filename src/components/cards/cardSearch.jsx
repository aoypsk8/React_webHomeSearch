import React from "react";
import distance from "../../assets/icons/distance.png";
import floor from "../../assets/icons/floor.png";
import location from "../../assets/icons/location.png";
import { Link } from "react-router-dom";
function CardSearch(props) {
  const { data } = props;
  return (
    <Link
      to={`/detail/${data._id}`}
      style={{ textDecoration: "none" }}
      className="border border-[#E0E0E0] w-full h-[270px] rounded-lg mt-5 flex"
    >
      {/* ==============left============== */}
      <div className="w-3/12 h-full p-3">
        <div className="h-[180px] w-full bg-[#00B8D1] rounded-t-lg">
          <img
            src={data.image[0]}
            alt=""
            className="w-full h-full rounded-t-lg object-cover"
          />
        </div>
        <div className="w-full h-[55px]  mt-1 flex">
          <div className="h-[57px] w-1/3 bg-[#00B8D1] rounded-bl-lg">
            <img
              src={data.image[1]}
              alt=""
              className="w-full h-full rounded-t-lg object-cover"
            />
          </div>
          <div className="h-[57px] w-1/3 bg-[#00B8D1]  mx-1">
            <img
              src={data.image[2]}
              alt=""
              className="w-full h-full rounded-t-lg object-cover"
            />
          </div>
          <div className="h-[57px] w-1/3 bg-[#00B8D1] rounded-br-lg">
            <img
              src={data.image[3]}
              alt=""
              className="w-full h-full rounded-t-lg object-cover"
            />
          </div>
        </div>
      </div>
      {/*============== center ==============*/}
      <div className="w-6/12 h-full p-3 ">
        <div>
          {/*  */}
          <p className="text-base font-semibold">
            ເຮືອນ 2 ຊັ້ນໃຫ້ເຊົ່າ ແຄມທາງ ເຂດດົງໂດກ ໃກ້ກັບມະຫາ ວິທະຍາໄລແຫ່ງຊາດ
          </p>
          {/*  */}
          <div className="flex items-center mt-2">
            <img
              src={location}
              alt="location"
              className="w-[10px] h-[13px] mr-1"
            />
            <p className="text-sm font-normal ">
              {data.addressId.village}, {data.addressId.district},{" "}
              {data.addressId.province}
            </p>
          </div>
          {/*  */}
          {/* <div className="flex justify-between mt-1">
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
            <p className="border border-[#E0E0E0] font-semibold p-[2px]">2+</p>
          </div> */}
          <p className="text-[#999999] text-xs font-normal mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </div>
      </div>
      <div className="w-5 h-full  py-5">
        <div className="w-full h-full border-l-2 border-[#E0E0E0]"></div>
      </div>
      {/*============== right ==============*/}
      <div className="w-3/12 h-full relative ">
        {/* reviews */}
        <div className=" w-full h-[80px] flex justify-end  pt-3 px-5">
          <div className="relative">
            <p className="text-base font-semibold">Wonderful</p>
            <p className="text-xs font-normal absolute right-0">349 reviews</p>
          </div>
          <div className="bg-logoColor h-9 w-9 rounded-full flex justify-center items-center ml-2 text-[#fff] font-bold">
            4.6
          </div>
        </div>
        {/* location */}
        <div className=" w-full mt-6 px-3 flex">
          <div className=" h-10 w-28 rounded-xl border border-[#E0E0E0] flex justify-evenly items-center mr-1">
            <img src={distance} alt="distance" className="w-4 h-4" />
            <p className="text-sm">60 ㎡</p>
          </div>
          <div className="ml-1 h-10 w-28 rounded-xl border border-[#E0E0E0] flex justify-evenly items-center ml-1">
            <img src={floor} alt="distance" className="w-4 h-4" />
            <p className="text-sm">2 ຊັ້ນ</p>
          </div>
        </div>
        {/* price */}
        <div className="mt-3 absolute right-0">
          <p className="font-medium px-3">
            <span className="text-2xl font-semibold">₭ 1,200,000</span>
            /ເດືອນ
          </p>
          <div className="relative">
            <p className="text-sm font-medium px-3 absolute right-0">
              ມັດຈຳກ່ອນ <span className="text-[#EF4638]">₭ 5,000,000</span>
            </p>
          </div>
        </div>
        {/* button */}
        <Link to={`/detail`} className=" w-full h-10 absolute bottom-3 px-3">
          <div className="bg-[#00B8D1] w-full h-full rounded-lg flex justify-center items-center">
            <p className="text-[#fff] text-xl font-medium ">ຢ້ຽມຊົມ</p>
          </div>
        </Link>
      </div>
    </Link>
  );
}

export default CardSearch;
