import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert } from 'react-native';

export default class SignupLoginScreen extends Component {
  constructor(){
    super()
    this.state={
      emailId : '',
      password: ''
    }
  }

  userLogin = (emailId, password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId, password)
    .then(()=>{
      return Alert.alert("Successfully Login")
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    })
  }

  userSignUp = (emailId, password) =>{
    firebase.auth().createUserWithEmailAndPassword(emailId, password)
    .then((response)=>{
      return Alert.alert("User Added Successfully")
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    });
  }


  render(){
    return(
      <View style={styles.container}>
        <View style={styles.profileContainer}>
        
          <Text style={styles.title}>Barter System</Text>

          
        </View>
        <View style={styles.buttonContainer}>
          <TextInput
          style={styles.loginBox}
          placeholder="example@barter.com"
          placeholderTextColor = "#ffff"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />

        <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="password"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
          <TouchableOpacity
            style={[styles.button,{marginBottom:20, marginTop:20}]}
            onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>{this.userSignUp(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  buttonText:{
    color: '#ffff',
    fontWeight: '200',
    fontSize: 20
  },
  button:{
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: "#6A5B97",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
    padding: 10,
    marginLeft: "40%"
  },
  loginBox:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: '#6A5B97',
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
    marginLeft: "40%",
  },
  profileContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    marginRight: "5%"
  },
  buttonContainer:{
    
  },
  title:{
    fontSize: 65,
    fontWeight: '300',
    paddingBottom: 30,
    color: '#169FA7',
  }
})
   
