
import React,{Component} from  'react';
import {
    View,
    Button,
    StyleSheet,
} from "react-native";

import HqListView from '../HqComponents/HqListView'

export default  class HqHomeScreen extends Component{
    static navigationOptions = {
        title:'首页'
    };
    next(params){
        this.props.navigation.navigate('Detail',params);
    }
    render(){
        return (
            <View style={styles.container}>
                <HqListView enterDetail={(goods)=>{
                    this.next({
                        id: goods.id,
                        title: goods.title,
                    });
                }}/>
                <Button  title={'详情'}  onPress={()=>{
                    this.next({
                        id: "0",
                        title: "default",
                    });
                }}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    icon: { width: 70, height: 70,
        backgroundColor:"gray"
    },


});