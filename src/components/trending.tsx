import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CardHorizontalFood } from './food'


export interface FoodProps{
    name: string;
    id: string;
    price: number;
    time: string;
    delivery: number;
    rating: number;
    image: string;
    restarurantId: string;
}

export const TrendingFoods = () => {
    const [foods, setFoods] = useState<FoodProps[]>([])

    useEffect(() => {
        async function getFoods(){
            const response = await fetch("http://192.168.15.8:3000/foods")
            const data = await response.json()

            setFoods(data)
            
        }

        getFoods()
    },[])

  return (
    <FlatList 
        data={foods}
        renderItem={({item}) => <CardHorizontalFood food={item}/>}
        horizontal={true}
        contentContainerStyle={{gap: 14, paddingLeft: 16, paddingRight: 16}}
        showsHorizontalScrollIndicator={false}
    />
  )
}
