// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";

// function CardSearchDemo(props) {
//   const { data } = props;

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <Link to={`/home/${data._id}`} style={{ textDecoration: "none" }}>
//       {/* card */}
//       <div className="w-auto h-52 bg-[#ebe7e7] m-5 flex rounded-2xl font-Noto">
//         <div className="w-1/4 h-[100%] ">
//           <img
//             className="object-cover w-[100%] h-[100%] rounded-l-2xl"
//             src="https://pix8.agoda.net/hotelImages/666/666113/666113_14072916400020553400.jpg?ca=2&ce=1&s=450x450"
//             alt=""
//           />
//         </div>
//         <div className="w-2/4 h-[100%] pl-3 pt-1">
//           <p className=" text-2xl">Title : Name home </p>
//           <p className="text-base text-[#3b3b3b] mt-2">{data.description}</p>
//           <p className="text-base text-[#3b3b3b] mt-2">
//             ບ້ານ : {data.addressId.village} ເມືອງ :{data.addressId.district}{" "}
//             ແຂວງ : {data.addressId.province}{" "}
//           </p>
//         </div>
//         <div className="w-1/4 h-[100%] ">price</div>
//       </div>
//     </Link>
//   );
// }

// export default CardSearchDemo;
