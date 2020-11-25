import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const AboutScreen = () => {
    return (
        <View style={styles.center}>
            <Text>About App</Text>
            <Text>Vesion <Text style={styles.version}>1.0.0</Text></Text>
        </View>
    )
}

AboutScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'About App',
    headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item 
                title='Togle Drawer' 
                iconName='ios-menu' 
                onPress={() => navigation.toggleDrawer()}
            />
        </HeaderButtons>
    )
})

styles = StyleSheet.create({
    
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    version: {
        fontFamily: 'open-bold'
    }
})