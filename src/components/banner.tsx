import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'

import PagerView from 'react-native-pager-view'

export function Banner() {
  return (
    <View className='w-full h-36 rounded-2xl mt-5 mb-4 md:h-60'>
      <PagerView style={{flex:1}} initialPage={0} pageMargin={14}>
        <Pressable key='1' onPress={() => console.log('Clicou no banner 1')}>
            <Image source={require('@/src/assets/banner1.png')} className='w-full h-36 rounded-2xl md:h-60'/>
        </Pressable>

        <Pressable key='2' onPress={() => console.log('Clicou no banner 2')}>
            <Image source={require('@/src/assets/banner2.png')} className='w-full h-36 rounded-2xl md:h-60' />
        </Pressable>
      </PagerView>
    </View>
  )
}