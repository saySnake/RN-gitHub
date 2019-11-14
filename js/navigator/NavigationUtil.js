/* eslint-disable */
export default class NavigationUtil{
    /***
     * 跳转到指定页面
     * Params 传递的参数
     * 跳转的页面名（页面路由名）
     */
    static  goPage(params,page) {
        const navigation = NavigationUtil.navigation;
        if (!navigation) {
            console.log('NavigationUtil.navigation can not be null');
        }
        navigation.navigate(
            page,
            {
                ...params,
            }
        );
    }

    /***
     * 重置到首页
     */
    static resetToHomePage(params){
            const {navigation} =params;
            navigation.navigate('Main');
    }
}
