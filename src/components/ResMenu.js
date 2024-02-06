import React from 'react'
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import {useParams} from 'react-router-dom';

const ResMenu = () => {
  const { resId } = useParams();
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}`
      );
      const json = await response.json();
      console.log(json);
      setresInfo(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (resInfo === null) return <Shimmer />;

  const info = resInfo?.data?.cards[0]?.card?.card?.info;
  const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const { name, cuisines, avgRating, sla, costForTwoMessage } = info;
 
  
  return (
    <div className="menu">
      <h1>{name}</h1>
      <div className="things">
        <p>
          {cuisines.join(",")}
          {avgRating} stars
        </p>
      </div>
      <h3>{sla.deliveryTime} minutes</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>MENU:</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default ResMenu;