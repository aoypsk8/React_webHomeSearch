import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import path from "../../assets/icons/path.png";
import search from "../../assets/icons/search.png";
import location from "../../assets/icons/location.png";
import distance from "../../assets/icons/distance.png";
import document from "../../assets/icons/document.png";
import floor from "../../assets/icons/floor.png";
import qrcode from "../../assets/qrcode.jpeg";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";
function Purchase() {
  const { purchaseId } = useParams();
  
  const [selectedFile, setSelectedFile] = useState();
  const [uploadedImage, setUploadedImage] = useState();
  const [nameImg, setNameImg] = useState();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setUploadedImage(URL.createObjectURL(e.target.files[0]));
    setNameImg(e.target.files[0].name);
    console.log(e.target.files[0]);
  };

  const handleClear = () => {
    setSelectedFile(null);
    setUploadedImage(null);
    setNameImg("");
  };

  useEffect(()=>{
    window.scrollTo(0, 0);
  },)
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
        <Link
          to={"/"}
          style={{ textDecoration: "none" }}
          className="text-lg font-medium text-[#000000]"
        >
          ໜ້າຫຼັກ
        </Link>
        <img src={path} alt="path" className="w-2 h-3 mx-3" />
        <Link
          to={"/search"}
          style={{ textDecoration: "none" }}
          className="text-lg font-medium text-[#000000]"
        >
          ຄົ້ນຫາ
        </Link>
        {/* <img src={path} alt="path" className="w-2 h-3 mx-3" />
        <p className="text-lg font-medium text-[#000000]">ເຮືອນເຊົ່າ</p> */}
        <img src={path} alt="path" className="w-2 h-3 mx-3" />
        <p className="text-lg font-medium text-[#000000]">detail.title</p>
        <img src={path} alt="path" className="w-2 h-3 mx-3" />
        <p className="text-lg font-medium text-[#000000]">detail.title</p>
      </div>
      {/* detail package*/}
      <div className="w-full h-[190px] px-40 mt-3 ">
        <div className="w-full h-full flex rounded-xl border border-[#E0E0E0]">
          <div className="w-1/5 h-full rounded-l-xl bg-logoColor"></div>
          <div className="w-4/5 h-full flex">
            <div className="h-full w-3/4 pt-9 pl-4  ">
              <p className="text-2xl font-bold">
                ເຮືອນ 2 ຊັ້ນໃຫ້ເຊົ່າ ແຄມທາງ ເຂດດົງໂດກ ໃກ້ກັບມະຫາວິທະຍາໄລແຫ່ງຊາດ
              </p>
              {/*  */}
              <div className="flex mt-2 items-center">
                <img src={location} alt="location" className="w-3 h-4 mr-1" />
                <p className="text-base font-semibold ">
                  ດົງໂດກ, ໄຊທານີ, ນະຄອນຫຼວງ
                </p>
              </div>
              {/* area */}
              <div className="h-12 mt-4  relative">
                <div className=" w-full flex">
                  <div className=" h-10 w-28 rounded-xl border border-[#E0E0E0] flex justify-evenly items-center">
                    <img src={distance} alt="distance" className="w-4 h-4" />
                    <p className="text-sm">60 m2</p>
                  </div>
                  <div className="ml-3 h-10 w-28 rounded-xl border border-[#E0E0E0] flex justify-evenly items-center">
                    <img src={floor} alt="distance" className="w-4 h-4" />
                    <p className="text-sm">2 ຊັ້ນ</p>
                  </div>
                </div>
                <div className=" pr-6 absolute right-0 bottom-0 ">
                  <p className="font-medium text-base">
                    (12 ເດືອນ x 1,275,000)
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/4 h-full pt-4 pr-4">
              <div className="w-full h-[70px]  flex justify-center items-center border-2 border-[#00B8D1] relative">
                <div className="absolute w-full h-full bg-[#00B8D1] z-10"></div>
                <div className="flot-box2 z-0"></div>
                <p className="text-2xl font-bold text-[#fff] z-50">
                  ແພັກເກັດ 1 ປີ
                </p>
              </div>
              <div className="w-full h-12 mt-10 border-2 border-[#00B8D1] flex justify-center items-center">
                <p className="text-2xl font-bold text-[#00B8D1]">
                  ₭ 15,300,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* detail ລາຍລະອຽດຜູ້ເຮັດສັນຍາ */}
      <div className="w-full h-[800px] px-40 mt-4">
        <div className="w-full h-full p-4 rounded-xl border border-[#E0E0E0] flex flex-col  items-center">
          <div className="w-[300px] h-[480px] bg-logoColor">
           <img className="w-full h-full"src={qrcode} alt=""/> 
          </div>
          {/* <Link className="w-[300px] h-[50px] outline outline-logoColor mt-10 flex justify-center items-center rounded-xl "> */}
          {/* <p>Upload your picture here !!</p> */}
          {/* </Link> */}
          <form className="w-[300px] h-[50px]  mt-7 flex justify-center  items-center rounded-xl bg-[#c5c5c57b] px-10 hover:cursor-pointer">
            <input
              id="images"
              className="hidden"
              type="file"
              onChange={handleFileChange}
            />
            <label htmlFor="images" className="w-full h-full flex justify-center  items-center"> Upload Image Here !!</label>

            {/* <button onClick={handleFileUpload}>Upload</button> */}
          </form>
          {uploadedImage && (
            <div className=" w-full h-16 mt-5 px-64 ">
              <div className=" h-full w-full  flex  items-center border border-[#a7a7a77f] rounded-2xl">
                <div className="w-[50%] h-full flex items-center justify-start px-5 ">
                  <img src={document} alt="" className="w-[15%] h-[80%]" />
                  <div className="">
                    <p>{nameImg}</p>
                  </div>
                </div>
                <div className="w-[50%] h-full  flex justify-end items-center px-5 ">
                  <span className="font-black w-10 h-10 flex justify-center items-center hover:cursor-pointer" onClick={handleClear}>
                    {" "}
                    X{" "}
                  </span>
                </div>
              </div>
            </div>
          )}
          {/* button */}
          <div className="w-full h-12  mt-8 flex justify-end">
            <div className="w-[213px] h-full bg-[#00B8D1] rounded-md mr-2 flex justify-center items-center outline outline-[#00B8D1] text-[#fff] hover:text-[#00B8D1]  hover:bg-opacity-0">
              <p className="text-xl font-semibold">ຍົກເລີກ</p>
            </div>
            <div className="w-[213px] h-full bg-[#00B8D1] rounded-md ml-2 flex justify-center items-center outline outline-[#00B8D1] text-[#fff] hover:text-[#00B8D1]  hover:bg-opacity-0">
              <p className="text-xl font-semibold">ຊຳລະເງິນ</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Purchase;
