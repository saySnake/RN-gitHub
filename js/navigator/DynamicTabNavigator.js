/* eslint-disable */
import React from 'react';
import PopularPage from '../page/PopularPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TrendingPage from '../page/TrendingPage';
import FavoritePage from '../page/FavoritePage';
import MyPage from '../page/MyPage';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator,BottomTabBar} from 'react-navigation-tabs';

const TABS = {//在这里配置页面的路由
    PopularPage:{
        screen:PopularPage,
        navigationOptions:{
            tabBarLabel:'最热',
            tabBarIcon:({tintColor,focused})=>(
                <MaterialIcons
                    name={'whatshot'}
                    size={26}
                    style={{color:tintColor}}
                />
            ),
        },
    },
    TrendingPage:{
        screen:TrendingPage,
        navigationOptions:{
            tabBarLabel:'趋势',
            tabBarIcon:({tintColor,focused})=>(
                <Ionicons
                    name={'md-trending-up'}
                    size={26}
                    style={{color:tintColor}}
                />
            ),
        },
    },
    FavoritePage:{
        screen:FavoritePage,
        navigationOptions:{
            tabBarLabel:'收藏',
            tabBarIcon:({tintColor,focused})=>(
                <MaterialIcons
                    name={'favorite'}
                    size={26}
                    style={{color:tintColor}}
                />
            ),
        },
    },
    MyPage:{
        screen:MyPage,
        navigationOptions:{
            tabBarLabel:'我的',
            tabBarIcon:({tintColor,focused})=>(
                <Entypo
                    name={'user'}
                    size={26}
                    style={{color:tintColor}}
                />
            ),
        },
    },
};

export default class DynamicTabNavigator extends React.Component {
    constructor(props){
        super(props);
        console.disableYellowBox = true;//关闭黄色警告弹窗
    }
    _tabNavigator(){
        const {PopularPage,TrendingPage,FavoritePage,MyPage} = TABS;
        const tabs = {PopularPage,TrendingPage,FavoritePage,MyPage};
        PopularPage.navigationOptions.tabBarLabel ='最热1';
        return createAppContainer(createBottomTabNavigator(
                tabs, {
                    tabBarComponent:TabBarComponent,
            }
        ))
    };

    render(){
        const  Tab = this._tabNavigator();
        return <Tab/>
    }
}

//创建Tabbar组建
class TabBarComponent extends  React.Component{
    constructor(props){
        super(props);
        this.theme ={
            tintColor:props.activeTintColor,
            updateTime:new Date().getTime(),
        };
    }
    render(){
        const {routes,index} = this.props.navigation.state;
        if (routes[index].params){
            const {theme} =routes[index].params;
            //以最新的更新时间为主，防止被其他tab之前的修改覆盖掉
            if (theme&&theme.updateTime > this.theme.updateTime){
                this.theme = theme;
            }
        }
        return <BottomTabBar
            {...this.props}
            activeTintColor={this.theme.tintColor||this.props.activeTintColor}
        />
    }
}
