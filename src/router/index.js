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
                //科研方向
                {
                    path: '/index/direction',
                    name: 'direction',
                    component: () => import("@/views/direction/direction.vue")
                },
                //科学研究
                {
                    path: '/index/research',
                    name: 'research',
                    component: () => import("@/views/research/research.vue")
                },
                //交流合作
                {
                    path: '/index/cooperation',
                    name: 'cooperation',
                    component: () => import("@/views/cooperation/cooperation.vue")
                },
                //资源共享
                {
                    path: '/index/resource',
                    name: 'resource',
                    component: () => import("@/views/resource/resource.vue")

                },
                //联系我们
                {
                    path: '/index/contact',
                    name: 'contact',
                    component: () => import("@/views/contact/contact.vue")
                }
            ]
        },
        // {
        //     //管理员界面
        //     path: '/admin',
        //     name: 'admin',
        //     component: () => import("@/views/admin/admin.vue")
        // }


    ]
});

// router.beforeEach((to, from, next) => {

// })


export default router