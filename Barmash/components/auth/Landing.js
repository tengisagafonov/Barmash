import React from 'react'
import {Button, Text ,View  } from 'react-native'

export default function Landing({navigation}){
    return(
        <View style={ {flex:1 , justifyContent:'center'}}>
            <Button 
                title="Register" 
                onPress={()=>navigation.navigate("Register")  } 
                /> 
            <Button 
                title="Нэвтрэх" 
                onPress={()=>navigation.navigate("Login")  } 
                /> 
                               
        </View>
    )
}