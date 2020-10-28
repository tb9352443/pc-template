import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout'
import LoginIn from '../views/loginIn'
import PageOne from '../views/PageOne'
import PageTwo from '../views/PageTwo'
import PageThree from '../views/PageThree'
import PageFour from '../views/PageFour'
import PageFive from '../views/PageFive'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
export const routerMenu = [
    // 一级菜单结构
    {
        path: '/', //菜单对应页面路由
        component: Layout, //页面布局组件，每个页面都是layout的嵌套页面，所以每个第一级的菜单都要写layout组件
        redirect: '/pageone',
        meta: {
            index: '1', //对应菜单下标，唯一不重复
            name: '导航一', //菜单显示名称
            icon: 'icon-heads', //一级菜单的图标icon
            fullPath: '/pageone', //对应菜单页面路径

        },
        children: [{
            path: 'pageone', //对应菜单页面组件路由，无须加'/'
            component: PageOne, //对应菜单页面组件
        }]
    },
    // 二级菜单结构
    {
        path: '/pagetwo', //菜单对应页面路由
        component: Layout, //页面布局组件，每个页面都是layout的嵌套页面，所以每个第一级的菜单都要写layout组件
        meta: {
            index: '2', //对应菜单下标，唯一不重复
            name: '组件管理',
            //菜单 显示名称
            icon: 'icon-heads', //一级菜单的图标icon
        },
        //子菜单信息
        children: [{
            path: 'pagetwo', //菜单对应页面路由
            component: PageTwo, //菜单对应页面组件
            meta: {
                index: '2-1', //对应菜单下标，唯一不重复
                name: '选项一', //菜单显示名称
                path: 'pagetwo', //子菜单页面组件路由，无须加'/'
                fullPath: '/pagetwo/pagetwo' //跳转总路由
            }
        }, {
            path: 'pagethree',
            component: PageThree,
            meta: {
                index: '2-2',
                name: '选项二',
                path: 'pagethree',
                fullPath: '/pagetwo/pagethree'
            }
        }, ]
    },
    // 三级菜单结构
    {
        path: '/pagethree',
        component: Layout,
        meta: {
            index: '3',
            name: '导航三',
            icon: 'icon-heads',
        },
        children: [{
            path: 'pagefour',
            component: PageFour,
            meta: {
                index: '3-1',
                name: '选项3-1',
                path: 'pagefour',
                fullPath: '/pagethree/pagefour'
            }
        }, {
            path: 'pagefive',
            component: PageFive,
            meta: {
                index: '3-2',
                name: '选项3-2',
                // path: 'pagethree',
                fullPath: '/pagethree/pagefive'
            },
            children: [{
                path: 'pagefive',
                component: PageFive,
                meta: {
                    index: '3-1-1',
                    name: '选项3-1-1',
                    path: 'pagefive',
                    fullPath: '/pagethree/pagefive'
                },
            }]
        }, ]
    },

    {
        path: '/loginIn',
        component: LoginIn,
        name: "loginIn",
    },
]
const router = new VueRouter({
    mode: 'hash',
    routes: routerMenu,
})
export default router