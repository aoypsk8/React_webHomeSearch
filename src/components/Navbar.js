import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import { logout } from "../slice/userSlice";
import { WindowRefresh } from "./functions/functionReload";
export default function Navbar() {
  const dispatch = useDispatch();
  const tokenLoca = localStorage.token;
  //const tokenLoca = localStorage.getItem('token')
  // console.log(tokenLoca);

  const handleLogout = () => {
    dispatch(logout());
    WindowRefresh();
  };
  return (
    <div className="flex items-center pl-7 pt-5 pb-[26px] justify-between bg-background font-Noto">
      {/* logo and menu */}
      <div className="flex items-center">
        {/* logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="h-[70px] w-[58px] hover:cursor-pointer"
          />
          <p className="text-logoColor ml-5 text-xl hover:cursor-pointer">
            Home Search
          </p>
        </div>
        {/* menu */}
        <ul className="flex items-center list-none mx-20">
          <li className="text-style">ໜ້າຫຼັກ</li>
          <li className="mx-14 text-style">ເຂົ້າຮ່ວມກັບເຮົາ</li>
          <li className="text-style">ຊ່ວຍເຫຼືອ</li>
          <li className="ml-14 text-style">ກ່ຽວກັບເຮົາ</li>
        </ul>
      </div>

      {/* buttons */}
      {tokenLoca && (
        <div className="flex items-center mr-12 text-text-white">
          <Link
            to={"/login"}
            className="button-style mx-6"
            onClick={handleLogout}
          >
            <div className="menu-button flex">
              <BsPersonCircle className="text-xl" />
              <p className="text-lg">ອອກຈາກລະບົບ</p>
            </div>
          </Link>
        </div>
      )}
      {!tokenLoca && (
        <div className="flex items-center mr-12 text-text-white">
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
