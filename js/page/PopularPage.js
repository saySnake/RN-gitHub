/* eslint-disable */
import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import NavigationUtil from '../navigator/NavigationUtil';

export default class  PopularPage extends Component{
    constructor(props){
        super(props);
        //定义tabName
        this.tabName =['Java','ios','React','Go','PssssHP'];
    }
    //根据TabName数组动态生成_genTabs
    _genTabs(){
        const  tabs ={};
        this.tabName.forEach((item,index)=>{
            tabs[`tab${index}`] ={
                screen:props=> <PopularTab {...props} tabLabel={item}/>,
                navigationOptions:{
                    title:item,
                },
            };
        });
        return tabs;
    }

    render () {
        const TabNavigator = createAppContainer(createMaterialTopTabNavigator(
            this._genTabs(),
            //配置样式
            {
                tabBarOptions:{
                    tabStyle:styles.tabStyle,
                    upperCaseLabel:false,
                    scrollEnabled:true,
                    style:{
                        backgroundColor:'#a67',
                    },
                    indicatorStyle:styles.indicatorStyle,
                    labelStyle:styles.labelStyle,
                }
            }
        ));
        return (
            <View style={styles.container}>
               <TabNavigator/>
            </View>
        )
    }
}

class PopularTab extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>Popular</Text>
                <Text onPress={
                    ()=>{
                        NavigationUtil.goPage({},'DetailPage');
                    }
                }>跳转到详情页</Text>
            </View>
        )
    }
}

//修改样式
const  styles =StyleSheet.create({
    container:{
        flex:1,
        marginTop:30
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10,
    },
    tabStyle:{
        minWidth:50
    },
    indicatorStyle:{
        height:2,
        backgroundColor: 'white',
    },
    labelStyle:{
        fontSize: 13,
        marginTop: 6,
        marginBottom:6,
    }
})
