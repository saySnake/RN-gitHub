/* eslint-disable */
import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';
export default class  WelcomePage extends Component{
    componentDidMount(){
        //展示广告，2秒以后跳转到首页
        this.timer = setTimeout(()=>{
                //跳转道首页
            NavigationUtil.resetToHomePage(this.props)
        },2000);
    }
    componentWillMount(){
        //页面摧毁时，清空计时器
        this.timer && clearTimeout(this.timer);
    }



    render () {
        return (
            <View style={styles.container}>
                <Text>
                    WelcomePage
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
        }
})
