import React, { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { API_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import UserOffline from "./UserOffline";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const isOnline = useOnlineStatus();

    const { loggedInUser, setUserInfo } = useContext(UserContext);

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    
    const fetchData = async () => {
        const data = await fetch(API_URL);
        const jsonD = await data.json();
        // Optional Chaining
        const data1 = jsonD?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(data1);
        setFilteredList(data1);
    };

    useEffect(() => {
        fetchData();
    }, []);

    // if user is not Online then return UserOffline component
    if (!isOnline) {
        return <UserOffline />
    }

    // Conditional Rendering
    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search m-4 p-4">
                    <input data-testid="searchInput" className="border border-solid border-black" type="text" placeholder="Search for restaurants" value={searchValue} onChange={(e) => {
                        setSearchValue(event.target.value);
                    }}/>
                    <button 
                    className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                    onClick={() =>{
                        const filteredList = listOfRestaurants.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchValue.toLowerCase()));
                        setFilteredList(filteredList);
                    }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                        const filteredList = listOfRestaurants.filter(restaurant => restaurant.info.avgRating > 4.3);
                        setListOfRestaurants(filteredList);
                    }}>Top Rated Restaurants</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>Username:</label>
                    <input className="border border-solid border-black" type="text" value={loggedInUser} onChange={(e) => setUserInfo(e.target.value)} />
                </div>
            </div>

            <div className="flex flex-wrap">
            { filteredList.map(restaurant => {
                return <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
                    {
                        restaurant?.info?.veg ? <RestaurantCardPromoted restaurant={restaurant}/> : 
                        <RestaurantCard restaurant={restaurant} />
                    }
                </Link>
            })}
            </div>
        </div>
    );
}

export default Body;