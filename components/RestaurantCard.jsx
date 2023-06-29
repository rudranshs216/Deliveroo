import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow-sm rounded-sm">
      <Image
        className='h-36 w-64 rounded-sm '
        source={{
          uri: imgUrl
        }}
      />
      <View className='px-3 pb-4 '>
        <Text className='text-lg pt-2 font-bold'>{title}</Text>
        <View className='flex-row items-center space-x-1'>
          <StarIcon color='green' opacity={0.5} size={22} />
          <Text className='text-gray-500 text-xs '>
            <Text className='text-green-500'>{rating}</Text> . {genre}
          </Text>
        </View>
        <View className='flex-row items-center space-x-1'>
          <MapPinIcon color='gray' opacity={0.4} size={22} />
          <Text className='text-xs text-gray-500'>Nereby. {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard
