import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar";
import CardSearch from "../cards/cardSearch";
import Footer from "./Footer";

function Search() {
  ////state in initialState ///////////////state in web redux
  const { searchHome } = useSelector((state) => state.search);

  console.log(searchHome);
  return (
    <div className="bg-background ">
      <Navbar />
      <div className="mt-10 pb-10 flex  mx-[100px] ">
        <div className="  mr-1 w-2/12">hi</div>
        <div className="  mr-1 w-8/12 ">
          {searchHome.length > 0 ? (
            searchHome.map((item) => {
              return <CardSearch key={item._id} data={item} />;
            })
          ) : (
            <div>Not Found item Loadding.....</div>
          )}
        </div>
        <div className=" w-2/12">hi</div>
      </div>
      <Footer />
    </div>
  );
}

export default Search;
