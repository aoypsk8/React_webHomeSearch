import React from 'react'

function CardHome(props) {
    const { data,imgPrice } = props
    return (
      <div className=" p-3 card-grid rounded-xl h-[420px] hover:cursor-pointer">
        {/* image */}
        <div>
          <img src= {data.image} alt="" className="h-[250px] w-[255px] " />
        </div>
        {/* content */}
        <div className="mt-4">
          <p className="font-bold text-lg">ບ້ານສະພານທອງ ເມືອງສີສັດຕະນາກ</p>
          <p className="text-sm text-gray mt-2">
            ຢູ່ໃກ້ກັບໂຮງໝໍ 103, ແລະຕະຫຼາດ ....
          </p>
          <p className="text-sm text-gray mt-2">{data.description}</p>
        </div>
        {/* price */}
        <div className="mt-2 flex items-center  ">
          <img src={imgPrice} alt="" className="h-7 w-7" />
          <p className="ml-2 font-bold">ລາຄາ {data.price} Kip</p>
        </div>
      </div>
    );
  }

export default CardHome
