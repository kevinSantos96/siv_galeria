import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MyTabs from './src/components/TabBar';
import {SplashScreen} from './src/views/SplashScreen';

const Stack = createStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PantallaInicial"
          component={SplashScreen}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="TabNavigator"
          component={MyTabs}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
