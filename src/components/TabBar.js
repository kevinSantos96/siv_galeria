import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'
//Screens
import DocumentScreen from "../views/DocumentScreen";
import ImageListScreen from "../views/MultimediaScreen";
import SettingsScreen from "../views/SettingsScreen"
const Tab = createBottomTabNavigator()

const MyTabs=()=>{
    return(
        <Tab.Navigator initialRouteName="Fotos"
                        screenOptions={({route})=>({
                            tabBarIcon:({focused,color,size})=>{
                                let iconName;
                                let rn= route.name;

                                if(rn==="Fotos"){
                                    iconName = focused ? 'image':'image-outline'
                                }else if(rn==="Grabador"){
                                    iconName = focused ? 'play-circle':'play-circle-outline'
                                }else if(rn==="Documentos"){
                                    iconName= focused ? 'document':'document-outline'
                                }else if(rn==="Camara"){
                                    iconName= focused ? 'camera':'camera-outline'
                                // }else if(rn==="Configuración"){
                                //     iconName=focused ? 'settings':'settings-outline'
                                }
                                return <Ionicons name={iconName} size={size} color={color}/>
                            },
                            tabBarActiveTintColor: '#F20505',
                            tabBarInactiveTintColor: 'grey',
                            labelStyle:{ paddingBottom:10, fontSize:14 },
                            tabBarStyle:{padding:10, height:70},
                            headerTitleAlign:'center',
                            headerStyle: {
                                backgroundColor: '#F20505'
                            },
                            headerTintColor:'#FFF',
                            headerTitleStyle: {
                                fontWeight: '500',
                            }
                        })}
                        >
            <Tab.Screen name="Fotos" component ={ImageListScreen} options={{header:()=>null}} />
            <Tab.Screen name="Documentos" component ={DocumentScreen}  />
            {/* <Tab.Screen name="Configuración" component ={SettingsScreen} /> */}
        </Tab.Navigator>
    )
}

export default MyTabs