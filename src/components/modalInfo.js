import React from 'react'
import { View,Modal,Text, TouchableOpacity,StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { convertDate } from '../helpers/convertDate';

export const ModalInfo = ({size,path,name,fecha,openModal,setOpenModal}) => {
   const fechaCreado = convertDate(fecha)
   const nombreArr = path.split('/0')
  
  return (
    <View style={{ height:'31%'}}>
        <View style={style.modalStyle}>
            <TouchableOpacity onPress={()=>setOpenModal(!openModal)} style={{alignItems:'flex-end'}}>
            <Ionicons
              name="close-outline"
              color={'#000'}
              size={30}
              style={{marginTop: 10, marginRight: 5}}
            />
            </TouchableOpacity>
            <View style={style.contentInfo}>
              <View style={{flexDirection:'row'}}><Text style={{color:'#000', fontSize:16, fontWeight:'600'}}>Nombre: </Text><Text  style={{color:'#000'}}> {name}</Text></View>
              <View style={{flexDirection:'row'}}><Text style={{color:'#000', fontSize:16, fontWeight:'600'}}>Tamaño: </Text><Text  style={{color:'#000'}}> {(size/1000).toFixed(2)} Kb</Text></View>
              <View style={{flexDirection:'row'}}><Text style={{color:'#000', fontSize:16, fontWeight:'600'}}>Ubicación: </Text><Text  style={{color:'#000'}}>Ubicación: {nombreArr[1]}</Text></View>
              <View style={{flexDirection:'row'}}><Text style={{color:'#000', fontSize:16, fontWeight:'600'}}>Creado: </Text><Text  style={{color:'#000'}}>Fecha Creado: {fechaCreado}</Text></View>
            </View>
        </View>
    </View>
  )
}

const style=StyleSheet.create({
    modalStyle:{backgroundColor:'rgba(255,255,255,0.9)',
                height:'95%',
              borderTopLeftRadius:10,
            borderTopRightRadius:10},
    contentInfo:{
      padding:10,
      width:'90%'
    }
})