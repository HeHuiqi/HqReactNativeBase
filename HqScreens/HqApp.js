
import React,{Component} from 'react';
import  {
    Image,
    StyleSheet,
} from 'react-native'

//导入stack导航组件
import { createStackNavigator,createAppContainer,createBottomTabNavigator } from 'react-navigation';
import HqHomeScreen from './HqHomeScreen';
import HqDetailScreen from './HqDetailScreen';
import HqMyScreen from './HqMyScreen';

// //进行导航的注册

const Home = createStackNavigator(
    {
        Home: { screen: HqHomeScreen },
        Detail:{screen: HqDetailScreen},
    }
);
Home.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};
const HqMy = createStackNavigator({
    HqMy: {
        screen: HqMyScreen,
    },
});
const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen:Home,
            navigationOptions: ({ navigation }) => ({
                headerTitle: "首页",
                tabBarLabel: "首页",
                headerBackTitle: null,
                tabBarIcon: ({focused,tintColor})=>{
                    if (focused){

                        return (
                            <Image style={[styles.tabBarIcon,{tintColor:tintColor}]} source={require('../assets/tabbar_discoverHL.png')}/>
                        );
                    }else {
                        return (
                            <Image style={[styles.tabBarIcon,{tintColor:tintColor}]} source={require('../assets/tabbar_discover.png')}/>

                        );
                    }
                },

            }),
        },
        HqMy: {
            screen:HqMy,
            navigationOptions: ({ navigation}) => ({
                tabBarLabel: "我的",
                headerBackTitle: null,
                tabBarIcon: ({focused,tintColor})=>{
                    if (focused){
                        return (
                            <Image style={[styles.tabBarIcon,{tintColor:tintColor}]} source={require('../assets/tabbar_contactsHL.png')}/>
                        );
                    }else {
                        // alert('321');
                        return (
                            <Image style={[styles.tabBarIcon,{tintColor:tintColor}]} source={require('../assets/tabbar_contacts.png')}/>

                        );
                    }
                }
            }),
        }
    },
    {
        tabBarOptions: {
            activeTintColor: 'green',
            inactiveTintColor: 'gray',
        },



    }
);

const AppContainer = createAppContainer(TabNavigator);
export default class HqApp extends Component {
    render() {
        return (
            <AppContainer/>
        );
    }
}

const styles = StyleSheet.create(
    {
        tabBarIcon: {
            width: 21, height: 21,

        }
    }
);
