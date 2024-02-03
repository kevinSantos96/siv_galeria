import React from 'react'
import { View,Text,StyleSheet,SafeAreaView,FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const configuracion =[{nombre:'Configuración de cámara',pantalla:'configCamera'}]

const SettingsScreen=()=> {
  const navigate = useNavigation()

  function handlePressConfg(ruta){
    navigate.navigate(ruta)
  }
  return (
    <SafeAreaView style={{flex:1}}>
        {configuracion.length >0 &&(
          <FlatList
            data={configuracion}
            keyExtractor={item => item.nombre}
            renderItem={({item})=>{
              return(
                <TouchableOpacity style={styles.cardConfig} onPress={()=>handlePressConfg(item.pantalla)}>
                  <Text style={styles.texto}>{item.nombre}</Text>
                </TouchableOpacity>
              )
            }}
          />
        )}
        <View style={styles.VersionText}>
          <Text style={{color:'#000',elevation:3}}>V 2.8.1</Text>
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  cardConfig:{
    marginVertical:5,
    marginHorizontal:'2%',
    padding: 10,
    backgroundColor:'#F2F0F5',
    borderRadius:8,
    shadowColor:'#000',
    elevation:5
  },
    texto:{
        textAlign:'left',
        fontSize:16,
        fontWeight:'600',
        color:'#000'
    },
    VersionText:{ 
      justifyContent: 'center', 
      alignItems: 'center',
      marginBottom:8
    }
})
export default SettingsScreen