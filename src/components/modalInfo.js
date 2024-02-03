import React from 'react'
import { View,Modal,Text, TouchableOpacity,StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { convertDate } from '../helpers/convertDate';

export const ModalInfo = ({size,path,name,fecha,openModal,setOpenModal}) => {
   const fechaCreado = convertDate(fecha)
   const nombreArr = path.split('/0')
  
  return (
    <View style={{backgroundColor:'rgba(52, 52, 52, 0.8)', height:'31%'}}>
        <View style={style.modalStyle}>
            <TouchableOpacity onPress={()=>setOpenModal(!openModal)} >
            <Ionicons
              name="close-outline"
              color={'#000'}
              size={30}
              style={{marginTop: 10, marginRight: 5}}
            />
            </TouchableOpacity>
            <View style={style.contentInfo}>
                <Text  style={{color:'#000'}}>nombre: {name}</Text>
                <Text  style={{color:'#000'}}>Tamaño: {(size/1000).toFixed(2)} Kb</Text>
                <Text  style={{color:'#000'}}>Ubicación: {nombreArr[1]}</Text>
                <Text  style={{color:'#000'}}>Fecha Creado: {fechaCreado}</Text>
            </View>
        </View>
    </View>
  )
}

const style=StyleSheet.create({
    modalStyle:{backgroundColor:'#FFF',
                width:'100%',
                height:'95%',
              borderTopLeftRadius:10,
            borderTopRightRadius:10},
    contentInfo:{
      padding:10
    }
})