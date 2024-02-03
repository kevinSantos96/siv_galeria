import React,{useRef} from 'react';
import {View, StyleSheet, Dimensions,TouchableOpacity,ToastAndroid} from 'react-native';
import Pdf from 'react-native-pdf';
import RNFS from 'react-native-fs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ViewShot from 'react-native-view-shot';

const DocumentViwer = ({path}) => {
  const viewShotRef = useRef(null);
  const captureAndSaveScreenshot = async () => {
    try {
      // Captura de pantalla
      const uri = await viewShotRef.current.capture();

      // Obtiene el directorio de la cámara
      const cameraDirectory = RNFS.ExternalStorageDirectoryPath + '/DCIM/Camera';
      const directoryExists = await RNFS.exists(cameraDirectory);
      if (!directoryExists) {
        await RNFS.mkdir('/storage/emulated/0/DCIM/Camera');
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
          ToastAndroid.show('Captura de pantalla guardada !', ToastAndroid.SHORT);
      }) 
        .catch((err)=>{
          console.log('Error el almacenar la imagen: ',err)
      })

      
    } catch (error) {
      console.error('Error al guardar la captura de pantalla:', error);
    }
  };
  return (
      <View style={styles.container}>
       <ViewShot ref={viewShotRef} options={{ format: 'jpg', quality: 0.6 }}> 
      {/* Contenido de tu pantalla que se capturará */}
      <Pdf
        ref={pdf => {
          this.pdf = pdf;
        }}
        trustAllCerts={false}
        source={{uri: path}}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        style={styles.pdf}
      />
    </ViewShot>
    <TouchableOpacity onPress={captureAndSaveScreenshot} style={styles.btnFloat}>
    <View style={{position: 'absolute'}}>
    <Ionicons name="scan-circle-outline" color={'#FFF'} size={28} />
      </View>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 15,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  btnFloat:{
    backgroundColor: "#000",
    borderRadius: 50,
    bottom: 10,
    width: 20,
    height: 20,
    padding: 20,
    marginHorizontal: 25,
    alignItems:'center',
    justifyContent:"center",
    position: 'absolute',
  }
});

export default DocumentViwer;
