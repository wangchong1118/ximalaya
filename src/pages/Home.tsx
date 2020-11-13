import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { RootStackNavigation } from '@/navigator/index';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '@/models/index';

const mapStateToProps = ({home}: RootState) => ({
    num: home.num
})

const connetor = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connetor>;

interface IProps extends ModelState {
    navigation: RootStackNavigation
}

class Home extends Component<IProps> {
    onPress = () => {
        const { navigation } = this.props
        navigation.navigate('Detail', {
            id: 100
        })
    }

    handleAdd = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'home/add',
            payload: {
                num: 10
            }
        })
    }

    handleAddAsync = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'home/asyncAdd',
            payload: {
                num: 10
            }
        })
    }

    render() {
        const { num } = this.props;
        return (
            <View>
                <Text>Home Page {num}</Text>
                <Button title='跳转到详情页' onPress={this.onPress}></Button>
                <Button title='Add' onPress={this.handleAdd}></Button>
                <Button title='AddAsync' onPress={this.handleAddAsync}></Button>
            </View>
        );
    }
}

export default connetor(Home);