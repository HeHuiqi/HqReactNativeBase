
import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    Button,
    ScrollView
} from 'react-native';
const dismissKeyboard = require('dismissKeyboard');
export default  class HqLoginView extends Component{

    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        };
    }

    _login(){
        dismissKeyboard();
        //alert('user：'+this.state.username+'\nps:'+this.state.password);

        console.log("开始登录");
    }

    render(){
        return(

            <View style={styles.container}>
                < View style = {
                    styles.inputView
                }
                >

                    <Text style={styles.text}>用户名：</Text>
                    < TextInput style = {
                        styles.TextInput
                    }
                                placeholder={'请输入用户名'}
                                clearButtonMode='while-editing'
                                onChangeText={(txt)=>{this.setState({username:txt});}}/>

                    <Text style={styles.passwordLab}>密    码：</Text>

                    <TextInput style={styles.TextInput}
                               placeholder={'请输入密码'}
                               clearButtonMode='while-editing'
                               onChangeText={(txt)=>{this.setState({password:txt});}}
                               secureTextEntry={true} maxLength={10}/>
                    <Button style={styles.loginBtn} title={'登录'} color='white' onPress={this._login.bind(this)}/>


                </View>
                <ScrollView>

                </ScrollView>

               
            </View>

        );
    }
}

const  styles = StyleSheet.create({
   
    container:{
        flex:1,
        backgroundColor: '#4b9cd8',
        paddingTop:44,
    },
    text: {
        color: 'white',
        fontSize :14,
    },
    inputView:{
        marginTop:100,
        marginLeft:20,
        marginRight:20,
        flexDirection:'column',
    },
    passwordLab: {
        marginTop:10,
        color:'white',
        fontSize :14,

    },
    TextInput:{
        backgroundColor: '#ffffff',
        borderRadius:5,
        height:44,
        padding:10,
        marginTop:5,
    },
    loginBtn:{
        marginTop:20,
    }
});
