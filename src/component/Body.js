import RestaurantCard from "./RestaurantCards";
import reslist from "../../utlis/mockdata";
import { useState } from "react";

 let restaurantList = [
  {
    info: {
  
      name: "Bakery World",
      cloudinaryImageId: "mt2aggiscfl3yviatwng",
      locality: "Parasia Road",
      areaName: "Parasia Road",
      costForTwo: "₹250 for two",
      cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
      avgRating: 4.5,
    },
  },
  {
    info: {
  
      name: "Bakery World",
      cloudinaryImageId: "mt2aggiscfl3yviatwng",
      locality: "Parasia Road",
      areaName: "Parasia Road",
      costForTwo: "₹250 for two",
      cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
      avgRating: 3.5,
    },
  },
  {
    info: {
  
      name: "Mc Donalds",
      cloudinaryImageId: "mt2aggiscfl3yviatwng",
      locality: "Parasia Road",
      areaName: "Parasia Road",
      costForTwo: "₹250 for two",
      cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
      avgRating: 4.1,
    },
  },
  {
    info: {
      name: "Eat Punjab",
      cloudinaryImageId: "mt2aggiscfl3yviatwng",
      locality: "Parasia Road",
      areaName: "Parasia Road",
      costForTwo: "₹250 for two",
      cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
      avgRating: 3.1,
    },
  },
  {
    info: {
  
      name: "lollo rosso",
      cloudinaryImageId: "mt2aggiscfl3yviatwng",
      locality: "Parasia Road",
      areaName: "Parasia Road",
      costForTwo: "₹250 for two",
      cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
      avgRating: 5.0,
    },
  },
  {
    info: {
  
      name: "Radika",
      cloudinaryImageId: "mt2aggiscfl3yviatwng",
      locality: "Parasia Road",
      areaName: "Parasia Road",
      costForTwo: "₹250 for two",
      cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
      avgRating: 4.8,
    },
  },
];

const Body = () => {
  const [resFilter, setResFilter] =useState([])
  return (
    <div className="contentBody">
      <div className="filter">
        <button
          className="fliter-btn"
          onClick={() => {
     
            // some how i have to write filter logic here!
            reslist = restaurantList.filter((item) => item?.resData?.info?.avgRating >4);
            setResFilter(reslist)
            console.log(reslist)


          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        <div className="res-cards">  
          {reslist.map((restaurant, index) => (
            <RestaurantCard key={restaurant.info.id}  resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
