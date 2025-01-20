import RestaurantCard from "./RestaurantCards";
import reslist from "../../utlis/mockdata";
import { useEffect, useState } from "react";
import { searchIcon } from "../../images/Search_Icon.svg.png";

const Body = () => {
  const [resFilter, setResFilter] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 200);
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      console.log(json , "arun")

      setResFilter(
        json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (error) {
      console.error("this is some error", error);
    }
  };
  console.log(resFilter, "resFilterresFilter");

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

  return resFilter.length === 0 ? (
    <>
   <div className="loader-main">
   <div class="loader">
  <svg viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="50"></circle>
  </svg>
  <svg viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="50"></circle>
  </svg>
  <svg viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="50"></circle>
  </svg>
</div>
    </div>
    </>
  ) : (
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
              console.log(filterList, "filterList");
              // some how i have to write filter logic here!
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="search">
          <input type="text" placeholder="search" />
          <button className="fliter-btn">search</button>
        </div>
      </div>
      <div className="res-container">
        <div className="res-cards">
        {console.log(resFilter, "resFilter - entire array")} 
          {resFilter.map((restaurant, index) =>(
          

            <RestaurantCard key={index} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
