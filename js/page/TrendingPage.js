/* eslint-disable */
import React,{Component} from 'react';
import {StyleSheet,Text,View,Button} from 'react-native';


export default class  TrendingPage extends Component{
    render () {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>trendingPage</Text>
                <Button
                        title={'修改主题'}
                        onPress={()=>navigation.setParams(
                            {
                                theme:{
                                    tintColor:'blue',
                                    updateTime: new Date().getTime(),
                                     }
                            }
                         )}
                    />
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
