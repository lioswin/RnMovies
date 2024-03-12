import { View, Text } from 'react-native'
import React from 'react'

type Props = {}

const HomeScreen = (props: Props) => {
    return (
        <View className="flex-1 items-center justify-center">
            <Text className='text-green-700'>Open u App.tsx to start working on your app!</Text>
        </View>
    )
}

export default HomeScreen