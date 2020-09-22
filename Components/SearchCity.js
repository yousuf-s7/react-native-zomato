import React, { useEffect } from "react";
import { View, Text } from "react-native";
import zomato from "../Api/zomato";

const SearchCity = ({ searchTerm, sendBack }) => {
  let city = null;

  const getRestFunc = async () => {
    try {
      const restDetail = await zomato.get(
        "/location_details?entity_id=11391&entity_type=city"
      );
      console.log("rest data", restDetail.data.best_rated_restaurant[0]);
    } catch (error) {
      console.log(error, "error");
    }
  };

  const getCityFunc = async () => {
    try {
      const location = await zomato.get("/locations", {
        params: {
          query: searchTerm,
        },
      });
      city = location.data.location_suggestions;
      console.log(city, "from search city");
      console.log("logic", city[0]["entity_id"], city[0]["entity_type"]);
      getRestFunc();
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    getCityFunc();
  }, []);

  return (
    <View>
      <Text>Search City JS</Text>
    </View>
  );
};

export default SearchCity;

//restDetail.data.best_rated_restaurant[0]['average_cost-for_two']
//restDetail.data.best_rated_restaurant[0]['cuisines']
//restDetail.data.best_rated_restaurant[0]['featured_image']
//restDetail.data.best_rated_restaurant[0]["has_online_delivery"]: 1

// "location": Object {
//     "address": "near sv residency, Kurnool Locality, Kurnool",
//     "city": "Kurnool",
//     "city_id": 11391,
//     "country_id": 1,
//     "latitude": "15.8343970000",
//     "locality": "Kurnool Locality",
//     "locality_verbose": "Kurnool Locality, Kurnool",
//     "longitude": "78.0387815000",
//     "zipcode": "",
//   },

//"name": "Magic Pizza",

// "user_rating": Object {
//     "aggregate_rating": "4.2",
//     "rating_color": "5BA829",
//     "rating_obj": Object {
//       "bg_color": Object {
//         "tint": "700",
//         "type": "lime",
//       },
//       "title": Object {
//         "text": "4.2",
//       },
//     },
//     "rating_text": "Very Good",
//     "votes": 24111,
//   },
