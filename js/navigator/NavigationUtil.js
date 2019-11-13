
export default class NavigationUtil{
    /***
     * 重置到首页
     */
    static resetToHomePage(params){
            const {navigation} =params;
            navigation.navigate('Main');
    }
}
