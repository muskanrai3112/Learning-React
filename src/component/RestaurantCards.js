
import {CARD_IMG} from "../../utlis/constant"
const RestaurantCard = (resData) => {
  
console.log(resData,"resData")

  return (
    resData && resData.resData && (
    
    <div className="res-card">
      {console.log(resData.resData,"resDataresDataresData")}
      <div className="res-card-single">
        <div className="res-img">
          <img
            className="res-image"
            src={CARD_IMG + resData.resData.imageId}
            alt="res-image"
          />
        </div>

        <div>
          <h3>{resData?.resData?.info?.name}</h3>
          <h4>{resData.cuisines}</h4>
          <h4 className="star-rating">
            {resData?.resData?.info?.avgRating}stars
          </h4>
          <h4>{resData?.resData?.info?.sla?.slaString}</h4>
          <h4>{resData?.resData?.info?.cuisines.join(", ")}</h4>
        </div>
      </div>
    </div>
    )
  );
};

export default RestaurantCard;
