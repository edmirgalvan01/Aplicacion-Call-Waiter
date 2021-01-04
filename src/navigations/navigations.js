import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Services from '../screens/Services';
import LoginScreen from '../screens/LoginScreen'

const AppNavigation = createStackNavigator();

const screenOptionStyle = {
    headerShown:false
}

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Detail" component={Detail}/>
            <Stack.Screen name="Services" component={Services}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        </Stack.Navigator>
    )
}
export default HomeStackNavigator;
