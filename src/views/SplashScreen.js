import React from 'react';
import {View, StyleSheet, Image, Button, Platform} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {
  PermissionMediaImages,
  PermissionMediaVideo,
  PermissionMediaAudio,
  PermissionsWriteStorage,
  PermissonReadStorage,
  PermissonCamera,
} from '../helpers/Permissions';

export const SplashScreen = ({navigation}) => {
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
  function handlePress() {
    getPermissons();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'TabNavigator'}],
      }),
    );
  }
  return (
    <View style={styles.content}>
      <View style={{width: '50%', height: '40%'}}>
        <Image
          style={styles.Image}
          source={require('../assets/lion.png')}
        />
      </View>
      <View style={{width: '50%'}}>
        <Button title="Entrar" onPress={handlePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    width: '100%',
    height: '60%',
  },
  btnOpen: {
    backgroundColor: '#1075BB',
    padding: 15,
    flexDirection: 'row',
    borderRadius: 5,
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});
