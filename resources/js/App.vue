<template>
    <v-app>
        <v-navigation-drawer app right>
            <!-- -->
        </v-navigation-drawer>

        <v-app-bar app>
            <!-- -->
        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-main>
            <!-- Provides the application the proper gutter -->
            <v-container fluid>
                <transition name="fade-transition" mode="out-in">
                    <router-view></router-view>
                </transition>
            </v-container>
        </v-main>
    </v-app>
</template>
