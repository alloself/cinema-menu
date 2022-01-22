<template>
    <v-app>
        <v-navigation-drawer app right v-model="drawer">
            <v-list dense nav>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                    :to="item.to"
                >
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list></v-navigation-drawer
        >

        <v-app-bar app>
            <v-toolbar-title
                v-if="$route.name !== 'Product'"
                @click="$router.push('/')"
                >Cinema menu</v-toolbar-title
            >
            <v-btn
                v-else
                depressed
                @click="
                    $router.push({ name: 'Category', params: $route.params })
                "
                ><v-icon>mdi-chevron-left</v-icon>Назад</v-btn
            >
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-main>
            <transition name="fade-transition" mode="out-in">
                <router-view></router-view>
            </transition>
            <!-- Provides the application the proper gutter -->
        </v-main>
    </v-app>
</template>
<script>
export default {
    data: () => ({
        drawer: false,
        items: [
            {
                title: "Закуски",
                to: { name: "Category", params: { categorySlug: "1" } },
            },
            {
                title: "Стритфуд",
                to: { name: "Category", params: { categorySlug: "2" } },
            },
            {
                title: "Салаты",
                to: { name: "Category", params: { categorySlug: "3" } },
            },
            {
                title: "Горячее",
                to: { name: "Category", params: { categorySlug: "4" } },
            },
            {
                title: "Пицца",
                to: { name: "Category", params: { categorySlug: "5" } },
            },
            {
                title: "Суши",
                to: { name: "Category", params: { categorySlug: "6" } },
            },
            {
                title: "Десерты",
                to: { name: "Category", params: { categorySlug: "7" } },
            },
            {
                title: "Винная карта",
                to: { name: "Category", params: { categorySlug: "8" } },
            },
            {
                title: "Коктейли",
                to: { name: "Category", params: { categorySlug: "9" } },
            },
            {
                title: "Пиво",
                to: { name: "Category", params: { categorySlug: "10" } },
            },
            {
                title: "Без алкоголя",
                to: { name: "Category", params: { categorySlug: "11" } },
            },
            {
                title: "Чайная карта",
                to: { name: "Category", params: { categorySlug: "12" } },
            },
        ],
    }),
};
</script>
