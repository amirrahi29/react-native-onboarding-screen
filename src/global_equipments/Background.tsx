import { View } from 'react-native'
import React, { ReactNode } from 'react'

interface BackgroundProps {
    children: ReactNode
}

const Background = ({ children }: BackgroundProps) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
            {children}
        </View>
    )
}

export default Background