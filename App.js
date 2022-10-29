import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import SingUpScreen from './screens/SingUpScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Card_click from './screens/Card_click';
import Card_click02 from './screens/Card_click02';
import Card_click03 from './screens/Card_click03';
import Card_click04 from './screens/Card_click04';
import Card_click05 from './screens/Card_click05';
import Card_click06 from './screens/Card_click06';
import Card_click07 from './screens/Card_click07';
import Card_click08 from './screens/Card_click08';
import Card_click09 from './screens/Card_click09';
import Card_click10 from './screens/Card_click10';
import Card_click11 from './screens/Card_click11';
import ResetPassScreen from './screens/ResetPassScreen';

const Stack = createNativeStackNavigator();

export default function App () {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="SingUp" component={SingUpScreen} />
        <Stack.Screen options={{ headerShown: false}} name="Main" component={MainScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Card_Screen01" component={Card_click} />
        <Stack.Screen options={{ headerShown: false }} name="Card_Screen02" component={Card_click02} />
        <Stack.Screen options={{ headerShown: false }} name="Card_Screen03" component={Card_click03} />
        <Stack.Screen options={{ headerShown: false }} name="Card_Screen04" component={Card_click04} />
        <Stack.Screen options={{ headerShown: false }} name="Card_Screen05" component={Card_click05} />
        <Stack.Screen options={{ headerShown: false }} name="Card_Screen06" component={Card_click06} />
        <Stack.Screen options={{ headerShown: false }} name="Card_Screen07" component={Card_click07} />
        <Stack.Screen options={{ headerShown: false }} name="Card_Screen08" component={Card_click08} />
        <Stack.Screen options={{ headerShown: false }} name="Card_Screen09" component={Card_click09} />
        <Stack.Screen options={{ headerShown: false }} name="Card_Screen10" component={Card_click10} />
        <Stack.Screen options={{ headerShown: false }} name="Card_Screen11" component={Card_click11} />
        <Stack.Screen options={{ headerShown: false }} name="ResetPassword" component={ResetPassScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

const styles = StyleSheet.create({


})