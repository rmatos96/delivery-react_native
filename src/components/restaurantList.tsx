import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { RestaurantProps } from './restaurants'

export const RestaurantList = ({restaurants}: {restaurants: RestaurantProps}) => {
  return (
    <Pressable className='items-center justify-center gap-2' onPress={() => console.log('clicou no restaurante ' + restaurants.name)}>
        <Image 
        source={{uri: restaurants.image}} 
        className='w-20 h-20 rounded-full'  
      />

      <Text className='text-base mt-2 font-bold text-center leading-4' numberOfLines={2}>{restaurants.name}</Text>
    </Pressable>
  )
}

