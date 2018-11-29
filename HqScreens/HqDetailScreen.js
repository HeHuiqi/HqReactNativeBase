
import React,{Component} from  'react';
import {
    View,
    Text,
    Button,
} from 'react-native';

export default  class HqDetailScreen extends Component{

    static  navigationOptions = ({navigation}) => {
        return {
            title:'详情',
            headerBackTitle:null,
            headerRight:<Button title={'back'} onPress={
                ()=>{
                    navigation.goBack()
                }
            }
            />
        }
    };
    back(){
        this.props.navigation.goBack();
    }
    render(){

        var  goodsId
        var title
        const { navigation } = this.props;
        if (navigation){
            goodsId = navigation.getParam('id', 'NO-ID');
            title = navigation.getParam('title', 'default');
        }


        return (
            <View>
                <Text>商品ID：{goodsId}</Text>
                <Text>商品描述：{title}</Text>
                <Button
                    title="Go back"
                    onPress={() => {
                        this.back();
                    }}
                />
            </View>
        );
    }
}