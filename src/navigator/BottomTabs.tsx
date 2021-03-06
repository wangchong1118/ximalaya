import React from 'react';
import HomeTabs from '@/navigator/HomeTabs';
import Listen from '@/pages/Listen';
import Found from '@/pages/Found';
import Account from '@/pages/Account';
import { RootStackNavigation } from './index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { RouteProp, TabNavigationState } from '@react-navigation/native';
import { RootStackParamList } from '@/navigator/index';
import IconFont from '../assets/iconfont/index';

export type BottomTabParamList = {
    HomeTabs: undefined;
    Listen: undefined;
    Found: undefined;
    Account: undefined;
}

type Route = RouteProp<RootStackParamList, 'BottomTabs'> & {state?: TabNavigationState};

interface IProps {
    navigation: RootStackNavigation;
    route: Route;
}

const Tab = createBottomTabNavigator<BottomTabParamList>();

function getHeaderTitle(route: Route){
    const routeName = route.state
            ? route.state.routes[route.state.index].name
            : route.params?.screen || 'HomeTabs';
    switch(routeName){
        case 'HomeTabs':
            return '喜马拉雅';
        case 'Listen':
            return '我听';
        case 'Found':
            return '发现';
        case 'Account':
            return '我的';
        default:
            return '喜马拉雅';
    }
}

class BottomTabs extends React.Component<IProps> {
    componentDidUpdate(){
        const {navigation, route} = this.props;
        navigation.setOptions({
            headerTitle: getHeaderTitle(route)
        });
    }

    render(){
        return (
            <Tab.Navigator tabBarOptions={{activeTintColor: '#f86442'}}>
                <Tab.Screen name='HomeTabs' component={HomeTabs} options={{tabBarLabel: '首页', tabBarIcon: ({color, size}) => <IconFont name="shengyin" color={color} size={size} />}} />
                <Tab.Screen name='Listen' component={Listen}  options={{tabBarLabel: '我听', tabBarIcon: ({color, size}) => <IconFont name="erji-toudaishierji-shengyin-yinle" color={color} size={size} />}} />
                <Tab.Screen name='Found' component={Found}  options={{tabBarLabel: '发现', tabBarIcon: ({color, size}) => <IconFont name="faxian" color={color} size={size} />}} />
                <Tab.Screen name='Account' component={Account}  options={{tabBarLabel: '我的', tabBarIcon: ({color, size}) => <IconFont name="wode" color={color} size={size} />}} />
            </Tab.Navigator>
        )
    }
}

export default BottomTabs;