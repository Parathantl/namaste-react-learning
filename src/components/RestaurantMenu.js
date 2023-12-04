import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(0);

    const {id: restId} = useParams();

    const restInfo = useRestaurantMenu(restId);

    if (restInfo === null) return  <Shimmer />;

    const { name, cuisines, costForTwoMessage } = restInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
 
    const categories = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');

    return (
    <div className='text-center'>
        <h1 className='font-bold my-6 text-2xl'>{name}</h1>
        <p className='font-bold text-lg'>{cuisines.join(',')} - {costForTwoMessage}</p>
        {categories.map((category, index) => 
          <RestaurantCategory 
          key={category?.card?.card?.title} 
          data={category?.card?.card} showItems={index === showIndex && true} 
          setShowIndex={() => setShowIndex(index)}/>
        )}
      </div>
  )
}

export default RestaurantMenu