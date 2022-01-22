import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
    {
        path: "/:categorySlug",
        name: "Category",
        component: () => import("../pages/Category.vue"),
    },
    {
        path: "/:categorySlug/:productId",
        name: "Product",
        component: () => import("../pages/Product.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});


export default router;
