import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import { RestaurantProps } from './restaurants'

export const ItemListOfRestaurants = ({restaurants}: {restaurants:RestaurantProps}) => {
  return (
    <Pressable className='flex-row items-center justify-start gap-3'>
        <Image 
            source={{uri: restaurants.image}}
            className='w-20 h-20 rounded-full'
        />
        <View className='gap-2'>
            <Text className='text-base text-black leading-4 font-bold'>{restaurants.name}</Text>

            <View className='flex-row items-center gap-1'>
              <Ionicons name='star' color='#ca8a04' size={14}/>
              <Text className='text-sm'>4.5</Text>
            </View>
        </View>
    </Pressable>
  )
}
