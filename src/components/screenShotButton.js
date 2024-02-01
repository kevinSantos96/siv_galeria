import React,{useRef,useState,useCallback} from 'react'
import { View, Text, TouchableOpacity,ToastAndroid } from 'react-native'
import ViewShot,{captureScreen,captureRef} from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import Ionicons from 'react-native-vector-icons/Ionicons';


export const ScreenShotButton = () => {
    const viewShotRef = useRef(null);
    const dimension = { width: 300, height: 400 };

    captureScreen({
        format: "jpg",
        quality: 0.8,
      }).then(
        (uri) =>{console.log("Image saved to", uri)} ,
        (error) => console.error("Oops, snapshot failed", error)
      );

    const captureAndSaveScreenshot = async () => {
      try {
        // Captura de pantalla
        const uri = await viewShotRef.current.capture();
  
        // Obtiene el directorio de la cámara
        const cameraDirectory = RNFS.ExternalStorageDirectoryPath + '/DCIM/Camera';
        const directoryExists = await RNFS.exists(cameraDirectory);
        if (!directoryExists) {
          await RNFS.mkdir(cameraDirectory);
        }
  
        // Genera un nombre de archivo único
        const fileName = `screenshot_${Date.now()}.jpg`;
        console.log(uri)
        // Crea la ruta completa del archivo
        const filePath = `${cameraDirectory}/${fileName}`;
  
        // Copia la captura de pantalla al directorio de la cámara
        RNFS.moveFile(uri,filePath).then(()=>{
            const source = {uri: filePath}
            console.log('Captura de pantalla guardada:', filePath);
        }) 
          .catch((err)=>{
            console.log('Error el almacenar la imagen: ',err)
        })
  
        
      } catch (error) {
        console.error('Error al guardar la captura de pantalla:', error);
      }
    };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ViewShot ref={viewShotRef} options={{ format: 'jpg', quality: 1 }}> 
      {/* Contenido de tu pantalla que se capturará */}
      <Text style={{color:'#FFF'}}>Ejemplo de captura de pantalla</Text>
    </ViewShot>

    <TouchableOpacity onPress={captureAndSaveScreenshot}>
    <Ionicons name="scan-circle-outline" color={'#FFF'} size={24} />
    </TouchableOpacity>
  </View>
  )
}
