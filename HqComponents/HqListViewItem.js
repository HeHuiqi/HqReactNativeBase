import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');
export  default class HqListViewItem extends Component{
    constructor(props){
        super(props)
        this.image = "";
        this.title= "";
    }
    render(){
        return (
            <View style={styles.container}>
                <Image source={{uri: this.props.image}} style={styles.icon}/>
                <View>
                    <Text numberOfLines={3} style={styles.txt}>{this.props.title}</Text>
                </View>
                <Image source={require('../assets/arrow-right.png')} style={styles.arrow}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        width: width,
        height: 100,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        marginLeft: 15,
    },
    icon: {
        width: 70,
        height: 70,
        backgroundColor:'rgb(235,235,26)'
    },
    arrow: { width: 10, height: 10, marginRight: 30,
    } ,
    txt: { width: width * 0.6, } ,
});
