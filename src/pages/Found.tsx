import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { RootStackNavigation } from '@/navigator/index';

interface IProps {
    navigation: RootStackNavigation
}

class Found extends Component<IProps> {
    onPress = () => {
        const { navigation } = this.props
        navigation.navigate('Detail', {
            id: 300
        })
    }

    render() {
        return (
            <View>
                <Text>Found Page</Text>
                <Button title='跳转到详情页' onPress={this.onPress}></Button>
            </View>
        );
    }
}

export default Found;