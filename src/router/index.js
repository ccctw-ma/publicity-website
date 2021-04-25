import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
/*懒加载*/
const router = new VueRouter({
    mode: 'hash',
    routes: [{
            //路径为空时跳到主页
            path: '',
            redirect: '/index/home',
        },
        {
            //主界面
            path: '/index',
            name: 'index',
            component: () => import('@/views/index.vue'),
            //子界面
            children: [
                //主页
                {
                    path: '/index/home',
                    name: 'home',
                    component: () => import("@/views/home/home.vue")
                },
                //团队概况
                {
                    path: '/index/team',
                    name: 'team',
                    component: () => import("@/views/team/team.vue")
                },
                //科研
                {
                    path: '/index/research',
                    name: 'research',
                    component: () => import("@/views/research/research.vue")
                },
                //合作
                {
                    path: '/index/cooperation',
                    name: 'cooperation',
                    component: () => import("@/views/cooperation/cooperation.vue")
                },
            ]
        }


    ]
});

// router.beforeEach((to, from, next) => {

// })


export default router