import React from "react";
import { Link } from "react-router-dom";

function CardHome(props) {
  const { data, imgPrice } = props;
  return (
    <Link to={`/home/${data._id}`} style={{ textDecoration: "none" }}>
      <div className=" p-3 card-grid rounded-xl h-[420px] hover:cursor-pointer w-[280px] ">
        {/* image */}
        <div>
          <img src={data.image} alt="" className="h-[250px] w-[255px] " />
        </div>
        {/* content */}
        <div className="mt-4">
          <p className="font-bold text-lg">ບ້ານສະພານທອງ ເມືອງສີສັດຕະນາກ</p>
          <p className="text-sm text-[#3b3b3b] mt-2">
            ຢູ່ໃກ້ກັບໂຮງໝໍ 103, ແລະຕະຫຼາດ ....
          </p>
          <TextComponent text={data.description} maxLength={20} />
        </div>
        {/* price */}
        <div className="mt-2 flex items-center  ">
          <img src={imgPrice} alt="" className="h-7 w-7" />
          <p className="ml-2 font-bold">ລາຄາ {data.price} Kip</p>
        </div>
      </div>
    </Link>
  );
}

export default CardHome;

const TextComponent = ({ text, maxLength }) => {
  const displayText = text.slice(0, maxLength) + ".....";
  return <p className=" text-sm text-[#3b3b3b] mt-2">{displayText}</p>;
};
