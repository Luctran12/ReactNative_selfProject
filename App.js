import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import HomeScreen from './components/HomeScreen';

  
  
  

    
    
    function NotificationsScreen({ navigation }) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
      );
    }
    
    const Drawer = createDrawerNavigator();
    
    export default function App() {
      return (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} > 
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      );
    }
    
    
  






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dogderblue',
    alignItems: 'center',
    
  },
  
});
