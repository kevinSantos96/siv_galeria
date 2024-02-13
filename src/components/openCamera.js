import React from 'react'
import { TouchableOpacity,View,StyleSheet } from 'react-native';
import { PermissonCamera } from '../helpers/Permissions'
import { GenerarId } from '../helpers/generarId'
import { launchCamera } from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//compress
import {Image} from 'react-native-compressor';

const OpenCamera =  ({setRefreshing}) => {
  const openCameraRN= ()=>{
    
    const options={
      mediaType: 'photo',
      quality: 0.6,
      saveToPhotos:false,
      cameraType:'back',
      maxHeight:100
    }

    launchCamera(options,resp=>{
      if (resp.didCancel){
        console.log("el usuario cancelo la accion")
    }else if (resp.error){
        console.log("error al abrir la camara: ",resp.error)
    }else{
      const nameImage = 'IMG_'+ GenerarId();
      let imageUri = resp.uri || resp.assets?.[0]?.uri;

      RNFS.exists(`${RNFS.ExternalStorageDirectoryPath}/DCIM/OpenCamera`).then((response)=>{
       if (response){
        console.log("existe")
       }else{
        RNFS.mkdir(`/storage/emulated/0/DCIM/OpenCamera`).then(()=>{console.log("Carpeta creada con exito")})
        .catch(err=>console.log('error en crear la carpeta'+err))
       }
      }).catch((err) => {         
        console.log(err);
      })

      const imagePath = `${RNFS.ExternalStorageDirectoryPath}/DCIM/OpenCamera/${nameImage}.JPg`
      console.log(imagePath)
      Image.compress(imageUri,{
        quality: 0.7,
      }).then((res)=>{
        RNFS.moveFile(res,imagePath).then(()=>{
          setRefreshing(true)
        }) 
        .catch((err)=>{
          console.log('Error el almacenar la imagen: ',err)
        })
      }).catch((err)=>{console.log('compresion fallo: ',err)})
    }
    })
  }

  async function handleNavCamera(){
    // navigation.navigate('Camara')
    const response = await PermissonCamera();
    if (response){
      openCameraRN();
    } 
   }
  return(
    <TouchableOpacity style={styles.btnAdd} onPress={handleNavCamera}>
        <View style={{position: 'absolute'}}>
          <Ionicons name="camera" color="#FFF" size={35} />
        </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnAdd: {
    backgroundColor: 'rgba(242, 5, 5, 0.7)',
    borderRadius: 50,
    bottom: 10,
    width: 30,
    height: 30,
    padding: 30,
    right: 15,
    alignItems:'center',
    justifyContent:"center",
    position: 'absolute',
  },
})


export default OpenCamera