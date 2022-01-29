import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Alert,KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase';

export default class LoginScreen extends React.Component {
  constructor(){
    super()
    this.state={
      email : "",
      password : ""
    }
  }

  showAlert(errorCode){
    switch(errorCode){
      case 'auth/too-many-requests':
        alert('To many requests\nTry again later')
        this.setState({
          email:"",
          password : ""
        })
        break
      case 'auth/wrong-password':
        alert('Enter Correct password')
        this.setState({
          password : ""
        })
        break
      default:
        this.setState({
          email:"",
          password : ""
        })
        return alert('Invalid email and password')
    }
  }

  render(){
    return(
      <KeyboardAvoidingView style={{alignItems:'center',marginTop:20}}>
  
      <View style={styles.container}>

        <View style={styles.subContainer1}>
          <Text style={styles.title}>Bedtime Stories</Text>
          <Image source = { require("../assets/icon.png")} style={styles.image} />
          <TextInput
              placeholder="programmer@whitehatjr.com"
              placeholderTextColor = "#ffff"
              onChangeText= {(emailText)=>{
                  this.setState({
                      email: emailText
                  })
              }}
              value={this.state.email}
              style={styles.textInput}
              />
          <TextInput
           style={styles.textInput}
        secureTextEntry={true}
              placeholder="password"
              placeholderTextColor = "#ffff"
              onChangeText= {(passwordText)=>{
                  this.setState({
                      password: passwordText
                  })
              }}
              value={this.state.password}  />
        </View>
        <View style={styles.subContainer2}>
          <TouchableOpacity
            style={styles.button}
            onPress = {async()=>{
              var email  = await this.state.email;
              var password = await this.state.password
              firebase.auth().signInWithEmailAndPassword(email, password)
              //firebase.auth().signInWithEmailAndPassword(emailId, password)
              //firebase.auth().signWithEmailAndPassword(email, password)
              //firebase.auth().signInWithEmailAndPassword()
              .then(()=>{
                this.props.navigation.navigate('WriteStory')
                //this.props.navigation.navigate('writeStory')
                //this.props.navigate('WriteStory')
                //this.props.navigate.navigation('WriteStory')
              })
              .catch((error)=> {
                var errorCode = error.code;
                var errorMessage = error.message;
                return this.showAlert(errorCode)
              })
            }}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

        </View>
      </View>
       </KeyboardAvoidingView>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#3c6382'
  },
  title:{
    fontWeight:"normal",
    fontSize:40,
    marginTop:20,
    padding:25,
    color:'#ffff'
  },
  image:{
    width:"60%",
    height:"40%",
    marginBottom:30,
    borderWidth:5,
    borderColor:'#ffff',
    borderRadius:20
  },
  subContainer1:{
    flex:0.6,
    justifyContent:'center',
    alignItems:'center'
  },
  subContainer2:{
    flex:0.4,
    alignItems:'center'
  },
  textInput : {
    width:"70%",
    height: "8%",
    borderWidth:2,
    borderColor:'#ffff',
    padding:10,
    marginBottom:10,
    borderRadius:10,
    marginTop:20,
  },
  button:{
    width:"75%",
    height:"20%",
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderColor:'#ffff',
    borderRadius:15,
    marginTop:80,
    backgroundColor:'black'
    
  },
  buttonText:{
    color:'white',
    fontSize:25
    
  }
})
