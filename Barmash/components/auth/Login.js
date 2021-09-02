import React, { Component } from 'react'
import {Button, Text ,TextInput ,View } from 'react-native'
import firebase from 'firebase'

export class Login extends Component {
    constructor(props ){
        super(props);

        this.state = {
            email: '',
            password: '',
        }
        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp(){
        const { email, password   } = this.state;
        
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result)=> {
            console.log(result)
        })
        .catch((error)=>{
            console.log(error)
            if (error.code === 'auth/invalid-email') {
                alert('Оруулсан мэдээлэл буруу байна' ,' Barmash ')
            }
        })

   }

    render(){
        return (
        <View     style={{  marginTop : '10%' , justifyContent : 'center'  ,alignItems: 'center'  }}>
            <TextInput 
            placeholder="имейл"
            style={{ textAlign: 'center' , margin :4, borderWidth : 2 , borderColor : 'grey' }}
            onChangeText={ (email)=> this.setState({email}) }
            />
            <TextInput 
            placeholder="нууц үг"
            style={{  textAlign: 'center' , margin: 4 ,borderWidth : 2 , borderColor : 'grey' }}
            secureTextEntry={true}
            onChangeText={ (password)=> this.setState({password}) }
            />
            <Button  
            style={{  textAlign: 'center' }}
            onPress={()=> this.onSignUp()} 
                title="Нэвтрэх"
            />
        </View>   
        )
    }

}

export default Login