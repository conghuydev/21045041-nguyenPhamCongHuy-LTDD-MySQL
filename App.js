import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen_01 from './Screens/Screen_01';
import DangKy from './Screens/DangKy';
import DangNhap from './Screens/DangNhap';
const Stack = createNativeStackNavigator();

export default function App() {
  


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='DangNhap' screenOptions={{headerShown:false}}>
      <Stack.Screen name="DangNhap" component={DangNhap} />
      <Stack.Screen name="DangKy" component={DangKy} />

      <Stack.Screen name="Screen_01" component={Screen_01} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
