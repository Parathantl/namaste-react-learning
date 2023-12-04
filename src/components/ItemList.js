import React from 'react'
import { CON_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addToCart } from '../utils/cartSlice';

const ItemList = ({items}) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        console.log('Add Item Clicked');
        dispatch(addToCart(item));
    }

  return (
    <div>
            {items.map((item) => {
                return <div data-testid="foodItems" key={item.card.info.id} className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between'>
                    <div className='w-9/12'>
                      <div className='py-2'>
                          <span>{item.card.info.name}</span>
                          <span> - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                      </div>
                    </div>

                        <p className='text-xs'>{item.card.info.description}</p>
                        
                    <div className='w-3/12 p-4'>
                      <div className='absolute'>
                      <button className='bg-black text-white shadow-lg rounded-lg absolute p-2'
                        onClick={() => handleAddItem(item)}>Add +</button>
                      </div>
                      <img src={CON_URL + item.card.info.imageId} className='w-full'/>
                    </div>

                    </div>
            })}
    </div>
  )
}

export default ItemList
