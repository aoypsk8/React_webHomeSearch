import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../config/globalKey";
import axios from "axios";
import { RiErrorWarningLine } from "react-icons/ri";
import { TbSquareRoot } from "react-icons/tb";
const HomeDetail = () => {
  const { homeId } = useParams();
  const [detail, setDetail] = useState([]);
  const [address, setAddress] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchHome = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/home/getOne/${homeId}`);

        setDetail(response.data.data);
        setAddress(response.data.data.addressId);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHome();
  }, [homeId]);

  console.log(address.village);

  return (
    <div className=" h-[760px] font-Noto">
      <div className="h-[100%]  py-10">
        {/* image and detail*/}
        <div className="flex mx-32  h-[100%] bg-[#ddd5d5bc]">
          {/* image */}
          <div className="">
            <img
              src={detail.image}
              alt=""
              className="w-80 h-80 my-4 mx-10 object-fill "
            />
            <div className="flex py-2 px-10">
              <div className="bg-white w-10 h-10 mx-3"></div>
              <div className="bg-white w-10 h-10 mx-3"></div>
              <div className="bg-white w-10 h-10 mx-3"></div>
              <div className="bg-white w-10 h-10 mx-3"></div>
              <div className="bg-white w-10 h-10 mx-3"></div>
            </div>
          </div>
          {/* detail  */}
          <div className="  p-4 w-[600px] ">
            <div className=" w-[100%] ">
              <p className="text-2xl font-bold">{detail.providerId}</p>
              <p className="text-lg pt-2">ລາຍລະອຽດ : {detail.description}</p>
              <p className="text-lg pt-2"> ບ້ານ : {address.village}</p>
              <p className="text-lg pt-2">ເມືອງ : {address.district}</p>
              <p className="text-lg pt-2">ແຂວງ : {address.province}</p>
              <p className="text-lg pt-2">
                ສະຖານະຫ້ອງ ( {detail.status ? "ວ່າງ" : "ບໍ່ວ່າງ"} )
              </p>
              <div className="w-[100%] h-[1px] bg-back mt-10 "></div>
              <p className="text-3xl font-bold pt-8">{detail.price} KIP</p>
              <div className="w-[100%] h-[1px] bg-back mt-8"></div>

              <div className="w-[100%] h-10 flex items-center justify-around bg-buttonColor rounded-lg hover:cursor-pointer mt-10">
                <div className="w-32 h-10  items-center justify-evenly flex">
                  <p className="text-lg">TOP NOW</p>
                </div>
              </div>
            </div>
          </div>
          {/* Line */}
          <div className="mx-3 w-[1px] h-[95%] bg-back my-5"></div>
          {/* package */}
          <div className=" mx-2 my-3  w-[220px]  h-[100%] ">
            <div className="flex">
              <p className="text-2xl font-bold">Packages</p>
              <RiErrorWarningLine />
            </div>
            <div className="flex flex-col justify-between  h-[100%] ml-3">
              <div className="">
                <p className="text-lg ">ລາຄາລວມ : </p>
                <div className="flex mt-3">
                  <TbSquareRoot />
                  <p>Free Wifi</p>
                </div>
                <div className="flex mt-2">
                  <TbSquareRoot />
                  <p>ຈ່າຍທຸກວັນທີ່ 15 ຂອງເດືອນ</p>
                </div>
                <div className="flex mt-2">
                  <TbSquareRoot />
                  <p>ມາ 3 ຄົນຂື້ນໄປ ຮັບສ່ວນຫລຸດທັນທີ </p>
                </div>
              </div>
              <div className="mb-20">
                <p>ຕິດຕໍ່ພະນັກງານ </p>
                <p>020 55 33 59 06 </p>
                <p>020 78 84 40 81 </p>
              </div>
            </div>
          </div>
        </div>
        {/* line */}
      </div>
    </div>
  );
};

export default HomeDetail;
