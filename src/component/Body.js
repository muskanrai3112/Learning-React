import RestaurantCard from "./RestaurantCards";
import reslist from "../../utlis/mockdata";
import { useEffect, useState } from "react";

const Body = () => {
  const [resFilter, setResFilter] = useState([]);

  useEffect(() => {
    setTimeout(()=>{
      fetchData();
    }, 200)
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      setResFilter(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info|| [])
      console.log(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle, "ggg")
      console.log(setResFilter, "setResFilter")
      console.log(json, "XXXXX");
      // console.log(json?.resData?.resData?.info?.avgRatingString, "data0");
      console.log(json?.data, "data1");
      console.log(json?.data?.cards[2], "data2");
      console.log(json?.data?.cards[2]?.card, "data3");
      console.log(json?.data?.cards[2]?.card?.card, "data4");
      console.log(json?.data?.cards[2]?.card?.card?.title, "data5");
      console.log(json?.tid, "data6");
      console.log(json?.data?.cards[2]?.card?.card, "data7");

    } catch (error) {
      console.error("this is some error", error);
    }
  };

  // conditional rendering.....
//   if( resFilter.length===0){
//     return<>
//   <div id="wrapper">		
//   <div id="corpus"></div>
// 	<div id="spinner"></div>
// </div>
// <div id="text">&nbsp;Loading ...</div>
//      </>
    
//   }

  return resFilter.length===0? <><div id="wrapper">		
  <div id="corpus"></div>
	<div id="spinner"></div>
</div>
<div id="text">&nbsp;Loading ...</div></>: (
    <div className="contentBody">
      <div className="filter">
    <div>
    <button
          className="fliter-btn"
          onClick={() => {
            const filterList = resFilter.filter(
              (res) => res?.info?.avgRating > 4
            );
            setResFilter(filterList);
            console.log(filterList,"filterList");
            // some how i have to write filter logic here!
          }}
        >
          Top Rated Restaurant
        </button>
    </div>
    <div className="search">
    <input type="text" placeholder="search"/>
      <button className="fliter-btn">
       search
      </button>
    </div>
      </div>
      <div className="res-container">
        <div className="res-cards">
          {resFilter.map((restaurant, index) => (
            <RestaurantCard key={index} resData={restaurant}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
