import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import { logout } from "../slice/userSlice";
import { WindowRefresh } from "./functions/functionReload";
import Swal from "sweetalert2";
export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tokenLoca = localStorage.token;
  //const tokenLoca = localStorage.getItem('token')
  // console.log(tokenLoca);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to logout this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout !",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logout());

        WindowRefresh();
        navigate("/login");
      }
    });
  };
  return (
    <div className="flex items-center px-40 h-[60px]  py-2 justify-between bg-white font-Noto">
      {/* logo and menu */}
      <div className="flex items-center h-[100%]">
        {/* logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="h-[41px] w-[33px] hover:cursor-pointer"
          />
          <p className="text-logoColor ml-5 text-2xl hover:cursor-pointer font-bold">
            Home Search
          </p>
        </div>
        {/* menu */}
        <ul className="flex items-center list-none mx-32 h-[100%]">
          <li className="text-style ">ໜ້າຫຼັກ</li>
          <li className="mx-14 text-style ">ເຂົ້າຮ່ວມກັບເຮົາ</li>
          <li className="text-style ">ຊ່ວຍເຫຼືອ</li>
          <li className="ml-14 text-style ">ກ່ຽວກັບເຮົາ</li>
        </ul>
      </div>

      {/* buttons */}
      {tokenLoca && (
        <div className="flex items-center mr-12 ">
          <Link className="button-style mx-6 text-white" onClick={handleLogout}>
            <div className="menu-button flex">
              <p className="text-base">ອອກຈາກລະບົບ</p>
            </div>
          </Link>
        </div>
      )}
      {!tokenLoca && (
        <div className="flex items-center  ">
          <Link to={"/register"} className="button-style mx-6 text-white">
            <div className="menu-button flex">
              <p className="text-base ">ສ້າງບັນຊີໃໝ່</p>
            </div>
          </Link>
          <Link to={"/login"} className="button-style  text-white">
            <div className="menu-button flex">
              <p className="text-base">ເຂົ້າສູ່ລະບົບ</p>
            </div>
          </Link>
        </div>
      )}
      {/* 
        <Link to={"/login"} className="button-style mx-6">
          <div className="menu-button flex">
            <BsPersonCircle className="text-xl" />
            <p className="text-lg">ເຂົ້າບັນຊີ</p>
          </div>
        </Link>
        <Link to={"/register"} className="button-style">
          <div className="menu-button flex">
            <BsPersonCircle className="text-xl" />
            <p className="text-lg">ສ້າງບັນຊີ</p>
          </div>
        </Link>
      </div> */}
    </div>
  );
}
