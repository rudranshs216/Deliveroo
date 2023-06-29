import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUrl='https://c.ndtvimg.com/2022-09/1jsu8038_noodles_625x300_28_September_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886' title="testing" />
      <CategoryCard imgUrl='https://c.ndtvimg.com/2022-09/1jsu8038_noodles_625x300_28_September_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886' title="testing" />
      <CategoryCard imgUrl='https://c.ndtvimg.com/2022-09/1jsu8038_noodles_625x300_28_September_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886' title="testing" />
      <CategoryCard imgUrl='https://c.ndtvimg.com/2022-09/1jsu8038_noodles_625x300_28_September_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886' title="testing" />
      <CategoryCard imgUrl='https://c.ndtvimg.com/2022-09/1jsu8038_noodles_625x300_28_September_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886' title="testing" />
    </ScrollView>
  )
}

export default Categories
