import React from "react";
import { CON_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { name, cuisines, avgRating, sla, cloudinaryImageId } = props.restaurant?.info;
    return (
        <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400">
            <img src={`${CON_URL}${cloudinaryImageId}`} alt="res-img" className="rounded-lg"/>

                    <h1 className="font-bold py-2 text-lg">{name}</h1>

                    <h3>{cuisines.join(", ")}</h3>

                    <h3>{avgRating}</h3>

                    <h3>{sla.deliveryTime}</h3>
        </div>
    );
}

// Higher Order Component
// Input - RestaurantCard => PromotedRestaurantCard

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-8 rounded-lg">Veg</label>
                <RestaurantCard {...props} />
            </div>
        );
    }
}

export default RestaurantCard;