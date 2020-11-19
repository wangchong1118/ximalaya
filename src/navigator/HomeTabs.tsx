import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '@/pages/Home';

const Tab = createMaterialTopTabNavigator();

class HomeTabs extends React.Component {
    render(){
        return (
            <Tab.Navigator lazy tabBarOptions={{
                scrollEnabled: true,
                tabStyle: {width: 60},
                indicatorStyle: {height: 3, width: 20, marginLeft: 20, borderRadius: 2, backgroundColor: '#f86442'},
                activeTintColor: '#f86442',
                inactiveTintColor: '#808080',
            }}>
                <Tab.Screen name="Home0" component={Home} options={{tabBarLabel: '推荐'}} />
                <Tab.Screen name="Home1" component={Home} options={{tabBarLabel: '哈哈'}} />
                <Tab.Screen name="Home2" component={Home} options={{tabBarLabel: '关注'}} />
                <Tab.Screen name="Home3" component={Home} options={{tabBarLabel: '好友'}} />
                <Tab.Screen name="Home4" component={Home} options={{tabBarLabel: '噶的'}} />
            </Tab.Navigator>
        )
    }
}

export default HomeTabs;