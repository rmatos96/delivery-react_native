import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RestaurantList } from './restaurantList';


export interface RestaurantProps{
    id: string;
    name: string;
    image: string;
}

export const Restaurants = () => {
    const [restaurants, setRestaurants] = useState<RestaurantProps[]>([])


    useEffect(() => {
        async function getRestaurants(){
            const response = await fetch("http://192.168.15.8:3000/restaurants")
            const data = await response.json()

            setRestaurants(data)
            
        }

        getRestaurants()
    },[])
  return (
    <FlatList 
        data={restaurants}
        renderItem={({item}) => <RestaurantList restaurants={item}/>}
        horizontal={true}
        contentContainerStyle={{gap: 14, paddingLeft: 16, paddingRight: 16}}
        showsHorizontalScrollIndicator={false}
    />
  )
}

