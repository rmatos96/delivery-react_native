import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

export const Input = () => {
  return (
    <View className='w-full flex-row items-center border border-slate-400 rounded-full py-2 px-4 gap-2 bg-transparent'>
      <Feather name='search' size={24} color='#64748b'/>

      <TextInput 
        className=''      
        placeholder='Procure sua comida'
      />
    </View>
  )
}
