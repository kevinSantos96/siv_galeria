import React from 'react'
import { View, Text, SafeAreaView,StyleSheet, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { SliderControl } from './SliderControl'

export const QualityCam = () => {
    const navigate = useNavigation()
  return (
    <SafeAreaView style={styles.contenedor}>
        <Text style={styles.encabezado}>Configuración de calidad de la cámara</Text>
        <SliderControl/>
        <View style={styles.botones}>
        <TouchableOpacity style={styles.btnAcept}>
            <Text style={styles.textButton}>Aceptar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnNotAcept} onPress={()=>navigate.goBack()}>
            <Text style={styles.textButton}>Cancelar</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    contenedor: {
        flex:1
    },
    encabezado:{
        fontSize:16,
        fontWeight:'600',
        color:'#000',
        textAlign:'center',
        marginVertical: 16
    },
    botones:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:80,
        marginVertical:40
    },
    btnAcept:{
        backgroundColor: '#5339F7',
        padding:10,
        textAlign:'center'
    },
    btnNotAcept:{
        backgroundColor: '#FA0B40',
        padding:10,
        textAlign:'center'
    },
    textButton:{
        color:'#FFF',
        fontSize:14,
        fontWeight:'600',
        marginHorizontal:8
    }
})