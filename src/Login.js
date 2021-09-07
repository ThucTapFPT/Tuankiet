import React, { Component } from "react";
import { Text, View,Image,StyleSheet, TextInput,TouchableOpacity,Dimensions, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class Login extends Component{
  
   constructor(){
     super()
     this.state= {
       showpass:true,
       press:false ,
       cicle:true
    }
   
   }

   _showpass=()=>{
      if(this.state.press==false){
        this.setState({showpass:true,press:true })
      }else{
        this.setState({showpass:false,press:false})
      }
   }

   _sttcheckbox=(stt)=>{
    if(stt==false){
      this.setState({cicle:true})
      this.setState({sttcheck:true})
    }else{
      this.setState({cicle:false})
      this.setState({sttcheck:false})
    }
   }
  
  // onPress={()=>{this.state.sttcheck}}

    render(){
        return(
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.containertitel}>
                   <Image source={require('./images/logo.png')}
                   style={styles.image}></Image>
                 
                   <Text style={styles.texttitel}>FIS INSIGHT PORTAL</Text>
             
                   <Image source={require('./images/stripe.png')}
                    style={styles.image2}></Image>
               
                   <Text style={styles.texttitelDN}>ĐĂNG NHẬP HỆ THỐNG</Text>
                </View>
             
             <KeyboardAvoidingView behavior='padding' >
             
                    <View style={styles.containerinput1}>
                      <View style={styles.rowinput}>
                         <Icon style={styles.icon1}name="user" color="#C0C0C0"  size={20}>
                         </Icon> 
                         <TextInput style={styles.textInput}placeholder="Tài khoản"
                          placeholderTextColor='#35571' textAlign='center'   keyboardType="email-address">
                         </TextInput>
                       </View>

                 <View style={styles.rowinput}>
                    <Icon style={styles.icon1} name="lock" color="#C0C0C0"  size={20}>
                    </Icon> 
                      <TextInput style={styles.textInput} textAlign='center' secureTextEntry={this.state.showpass}
                        placeholder="Mật khẩu"></TextInput>
                          <TouchableOpacity onPress={()=>{this._showpass(this)}}>
                             <Icon style={styles.icon3} name= {this.state.press==false ?"eye" :'eye-slash'} color="#C0C0C0"  size={20}>
                             </Icon>
                          </TouchableOpacity>      
                </View>
              <View style={styles.rowinput1} >
                   <TouchableOpacity stt={true} style={styles.icon4} onPress={()=>{this._sttcheckbox(this.state.sttcheck)}}>
                      <Icon name={this.state.cicle==true?"circle":'check-circle'} color="#ff9336"  size={20}>
                      </Icon> 
                   </TouchableOpacity>
                   <Text style={styles.textGNMK}>Ghi nhớ mật khẩu</Text>
              </View>
            </View>   
                 
            </KeyboardAvoidingView>

              <View style={styles.containerbutton}>
                 <TouchableOpacity
                 activeOpacity={0.4}>
                  <View style={styles.viewBTN}>
                 <Text style={styles.textBTN}>
                        ĐĂNG NHẬP 
                 </Text>
                 </View>
                </TouchableOpacity>  
               <Image style={styles.image3}  source={require('./images/swipe.png')}
               ></Image>
                </View>

                <View style={styles.containerboottom}>
                    <Text style={styles.textbottom}>Copyright @ 2019,FPT Infomation.System</Text>
                </View>
           </View>
           </TouchableWithoutFeedback> 
        )
    }
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
 
    containerbutton:{
      alignItems:"center"
    },
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center',
  },
    containertitel:{
      alignItems: 'center',
    },
    
    containerboottom:{
      alignItems: 'center',
      position:'absolute',
      bottom:0   
    },
    
   textbottom:{
     color:'#b2bcc6',
   },
    rowinput:{
      marginTop:15,
      width:300,
      height:40,
      backgroundColor:'#F0F0F0',
      marginVertical:5,
      flexDirection:'row',
      alignItems:'center'
    },
    rowinput1:{
      width:300,
      alignItems:"center",
      marginBottom:10,
      flexDirection:'row'
    },
    viewBTN:{
        width:300,
        alignItems:'center',
        justifyContent:'center',
        height:40,
        backgroundColor:'#ff9336'
    },
    icon1:{
       padding:10
    },
    textGNMK:{
      marginLeft:5,
        fontWeight:"bold",
        color:'#ff9336'
    },
    textBTN:{
        margin:10,
        fontSize:15,
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold'
    },
    image: {
        width:210,
        height:60
      },
      image2: {
        margin:10,
        width:90,
        height:3
      },
      image3: {
        marginTop:20,  
       
       width:250,
       height:140
      },  
      texttitel:{ 
        marginTop:20,
        fontWeight:'bold',
          fontSize:21,
          color:'#335271',  
      },
      texttitelDN:{
        marginTop:10,
        fontWeight:'bold',
        fontSize:18,
        color:'#fea026'
    },
      textInput:{
        width:230,
      fontSize:20,
         alignItems:"center",
          borderRadius:2,   
      }
      
    });