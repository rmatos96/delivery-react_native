import { View, Text, Pressable } from 'react-native'
import {Ionicons, Feather} from '@expo/vector-icons'
import React from 'react'

export const Header = () => {
  return (
    <View className='w-full justify-between items-center flex-row'>
      <Pressable className='w-10 h-10 bg-[#fff] rounded-full items-center justify-center'>
        <Ionicons name="menu" size={20} color="#121212" />
      </Pressable>

      <View className='flex-col items-center justify-center'>
        <Text className='text-center text-sm'>Localização</Text>

        <View className='flex-row items-center justify-center gap-[5px]'>
          <Feather name='map-pin' size={14} color="#ff0000" />
          <Text className='text-lg font-bold'>São Paulo</Text>
        </View>
      </View>

      <Pressable className='w-10 h-10 bg-[#fff] rounded-full items-center justify-center'>
        <Feather name="bell" size={20} color="#121212" />
      </Pressable>
    </View>
  )
}

