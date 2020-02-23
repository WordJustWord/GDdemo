import router from "../router/index";

router.beforeEach((to, from, next) => {
    let islogin = false;
    islogin = localStorage.getItem("login");
    if (to.path === "/signin") {
        if (islogin) {
            next("/");
        } else {
            next();
        }
    } else {
        // requireAuth:可以在路由元信息指定哪些页面需要登录权限
        if (to.meta.requireAuth) {
            if (islogin) {
                next();
            }
            else {
                next("/signin");
            }
        } else {
            next();
        }
    }
})