import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MyTabs from './src/components/TabBar';
import {SplashScreen} from './src/views/SplashScreen';
import { ConfigCam } from './src/views/ConfigCam';
import {
  PermissionMediaImages,
  PermissionMediaVideo,
  PermissionMediaAudio,
  PermissionsWriteStorage,
  PermissonReadStorage,
  PermissonCamera,
} from './src/helpers/Permissions';

const Stack = createStackNavigator();

function App() {
  function getPermissons() {
    if (Platform.OS === 'android' && Platform.Version === 33) {
      PermissionMediaImages();
      PermissionMediaVideo();
      PermissionMediaAudio();
    } else {
      PermissionsWriteStorage();
      PermissonReadStorage();
      PermissonCamera();
    }
  }
  useEffect(() => {
    getPermissons();
  }, []);

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
        <Stack.Screen
          name="configCamera"
          component={ConfigCam}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
