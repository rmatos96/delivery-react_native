import { ScrollView, Text, View } from "react-native";

import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Input } from "../components/input";
import { TrendingFoods } from "../components/trending";
import { Section } from "../components/section";
import { Restaurants } from "../components/restaurants";

import Constants from 'expo-constants'
import { ListOfRestaurants } from "../components/listOfRestaurants";

const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView 
      style={{flex: 1}} 
      showsVerticalScrollIndicator={false}
      className='bg-slate-200'
    >
      <View 
        style={{marginTop: statusBarHeight + 16}}
        className="px-4"
      >
        <Header />

        <Banner />

        <Input />
      </View>

      <Section 
        name="Comidas em alta"  
        label="Veja todas"
        action={() => console.log('blz')}
        size="text-2xl"
      />
      <TrendingFoods />

      <Section 
        name="Famosos no Delivery Food"  
        label="Veja todos"
        action={() => console.log('blz')}
        size="text-xl"
      />
      <Restaurants />

      <Section 
        name="Restaurantes"  
        action={() => console.log('blz')}
        size="text-xl"
      />

      <ListOfRestaurants />

    </ScrollView>
  );
}
