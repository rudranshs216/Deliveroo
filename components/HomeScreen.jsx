import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View
} from 'react-native'
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon
} from 'react-native-heroicons/outline'
import Categories from './Categories'
import FeaturedRow from './FeaturedRow'

const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <SafeAreaView className='bg-white pt-5'>
      <View className='flex-row pb-3 mx-4 items-center space-x-2 '>
        <Image
          source={{
            uri: 'https://links.papareact.com/wru'
          }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />
        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
          <Text className='font-bold text-xl space-x-2'>
            Current Location
            <ChevronDownIcon size={20} color='#00CCBB' />
          </Text>
        </View>
        <UserIcon size={35} color='#00CCBB' />
      </View>

      <View className='flex-row mx-4 pb-2 items-center space-x-2'>
        <View className='flex-row space-x-2 flex-1 p-3 bg-gray-200 rounded-md'>
          <MagnifyingGlassIcon color='#808080' />
          <TextInput
            className=''
            placeholder='Restaurants and Cuisines'
            keyboardType='default'
          />
        </View>
        <AdjustmentsVerticalIcon color='#00CCBB' />
      </View>

      <ScrollView
        className='bg-gray-100'
        contentContainerStyle={{
          paddingBottom: 100
        }}
      >
        <Categories />
        <FeaturedRow
          title='Featured'
          desc='Paid placements from our partners'
        />
        <FeaturedRow
          title='Tasty Discounts'
          desc="Everyone's been enjoying these discounts!"
        />
        <FeaturedRow
          title='Offers Near You!'
          desc='Exciting Offers only for you!'
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
