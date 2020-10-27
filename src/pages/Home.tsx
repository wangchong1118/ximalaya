import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { RootStackNavigation } from '@/navigator/index';

interface IProps {
    navigation: RootStackNavigation
}

class Home extends Component<IProps> {
    onPress = () => {
        const { navigation } = this.props
        navigation.navigate('Detail', {
            id: 100
        })
    }

    render() {
        return (
            <View>
                <Text>Home Page</Text>
                <Button title='跳转到详情页' onPress={this.onPress}></Button>
            </View>
        );
    }
}

export default Home;