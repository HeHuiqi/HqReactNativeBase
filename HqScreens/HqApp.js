
import React,{Component} from 'react';

//导入stack导航组件
import { createStackNavigator,createAppContainer,createBottomTabNavigator } from 'react-navigation';
import HqHomeScreen from './HqHomeScreen';
import HqDetailScreen from './HqDetailScreen';
import HqSettingScreen from  './HqSettingScreen';

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
const HqSet = createStackNavigator({
    HqSet: { screen: HqSettingScreen },
});
const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen:Home,
            navigationOptions: ({ navigation }) => ({
                headerTitle: "首页",
                tabBarLabel: "首页",
                headerBackTitle: null,
                tabBarIcon: null,

            }),
        },
        HqSet: {
            screen:HqSet,
            navigationOptions: ({ navigation }) => ({
                headerTitle: "设置",
                tabBarLabel: "设置",
                headerBackTitle: null,
                tabBarIcon: null,
            }),
        }
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
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
