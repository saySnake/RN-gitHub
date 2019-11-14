/* eslint-disable */

import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from '../page/HomePage';
import FavoritePage from '../page/MyPage';
import PopularPage from '../page/PopularPage';
import TrendingPage from '../page/TrendingPage';
import MyPage from '../page/MyPage';
import WelcomePage from '../page/WelcomePage';
import DetailPage from '../page/DetailPage';

const  InitNavigator =createStackNavigator(
    {
        WelcomePage:{
            screen:WelcomePage,
            navigationOptions:{
                header:null,//隐藏头部
            }
        }
    }
);

const  MainNavigator =createStackNavigator(
    {
        HomePage:{
            screen:HomePage,
            navigationOptions:{
                header:null,
            }
        },
        DetailPage:DetailPage,
    }
);

//switch只显示一次的页面
export default createAppContainer(createSwitchNavigator({
    Init:InitNavigator,
    Main:MainNavigator,
},
    {
        navigationOptions:{
            header:null,
        }
    }
));
