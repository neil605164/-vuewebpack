// 載入官方設定
import Vue from 'vue'
import VueRouter from 'vue-router'
// 載入個人設定
import Home from '@/components/HelloWorld'
import Page from '@/components/pages/page'
import child from '@/components/pages/child'
import child2 from '@/components/pages/child2'
import child3 from '@/components/pages/child3'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            name:"home", // 顯示在頁面上得名稱
            path:"/index", // 對應的虛擬路徑
            component: Home, // 對應的元件
        },
        {
            name:"page", // 顯示在頁面上得名稱
            path:"/page", // 對應的虛擬路徑
            component: Page, // 對應的元件
            children: [
                {
                    name:"card1", // 顯示在頁面上得名稱
                    path:"", // 對應的虛擬路徑
                    component: child, // 對應的元件
                },
                {
                    name:"card2", // 顯示在頁面上得名稱
                    path:"child2", // 對應的虛擬路徑
                    component: child2, // 對應的元件
                },
                {
                    name:"card3", // 顯示在頁面上得名稱
                    path:"child3", // 對應的虛擬路徑
                    component: child3, // 對應的元件
                },
            ],
        },
    ],
})