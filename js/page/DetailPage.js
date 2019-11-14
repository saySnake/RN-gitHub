/* eslint-disable */
import React,{Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';


export default class  MyPage extends Component{
    render () {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    详情页
                </Text>
            </View>
        )
    }
}

//修改样式
const  styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF'
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10,
    }
})
