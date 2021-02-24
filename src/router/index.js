// 載入官方設定
import Vue from 'vue'
import VueRouter from 'vue-router'
// 載入個人設定
import Home from '@/components/HelloWorld'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            name:"home", // 顯示在頁面上得名稱
            path:"/index", // 對應的虛擬路徑
            component: Home, // 對應的元件
        },
        // {
        //     name:"home", // 顯示在頁面上得名稱
        //     path:"/index", // 對應的虛擬路徑
        //     component: Home, // 對應的元件
        // },
    ],
})