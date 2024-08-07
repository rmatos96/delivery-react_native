import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RestaurantProps } from './restaurants'
import { ItemListOfRestaurants } from './itemListOfRestaurants'

export const ListOfRestaurants = () => {

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
    <View className='px-4 flex-1 w-full h-full mb-11 gap-4'>
      {restaurants.map(item => (
        <ItemListOfRestaurants key={item.id} restaurants={item}/>
      ))}
    </View>

    // <FlatList 
    //     data={restaurants}
    //     renderItem={({item}) => <ItemListOfRestaurants restaurants={item}/>}
    //     horizontal={true}
    //     contentContainerStyle={{gap: 14, paddingLeft: 16, paddingRight: 16}}
    //     showsHorizontalScrollIndicator={false}
    // />
  )
}
