import React,{Component} from  'react';
import {
    View,
    Text,
    Button,
} from 'react-native';

export default  class HqDetailScreen extends Component{

    static  navigationOptions = ({navigation}) => {
        return {
            title:'我的',
            headerBackTitle:null,
            headerRight:<Button title={'+1'} onPress={
                //这里获取设置的事件将会执行
                navigation.getParam('increaseCount')
            }/>
        }
    };

    state = {
        count: 0,
    };
    _increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
        alert('count==' + this.state.count);
    };
    componentDidMount() {
        //通过设置navigation来调用实例方法：这里是_increaseCount
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
    }
    render(){


        return (
            <View>
                <Text>我的头像ID</Text>
                <Text>我的信息</Text>
            </View>
        );
    }
}