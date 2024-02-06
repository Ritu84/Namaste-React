
import RestaurantCard, { withPromtedLabel } from "./Restaurantcard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9351929%26lng%3D77.62448069999999%26page_type%3DDESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // Optional Chaining
    setListOfRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(listOfRestaurants);
  };


return (listOfRestaurants.length===0)?<Shimmer/>
:(
    <div className="body">
      <div className="filter flex">
{/* input box */}
        <div className="search m-4 p-4">
          <input
            type="text"
            value={searchText}
            onChange={(e)=>{
                setSearchText(e.target.value);
            }}
            className="border border-solid border-black"
            
          />
{/*search */}
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
                const filterList = listOfRestaurants.filter(
                    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filterList);
              }}
          >
            Search
          </button>
        </div>
{/* filter-button */}
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

      </div>

      <div className="flex flex-wrap">
        {
            filteredRestaurant.map((restaurant) => {
              return  <Link key={restaurant?.info.id}  to={"./restaurants/" + restaurant?.info.id}><RestaurantCard resData={restaurant?.info} /></Link> 
            })
        }
        
      </div>
    </div>
  );
};

export default Body;