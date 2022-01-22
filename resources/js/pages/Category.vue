<template>
    <v-container fluid>
        <v-row>
            <v-col
                lg="4"
                sm="6"
                cols="6"
                v-for="i in Number($route.params.categorySlug)"
                :key="i"
            >
                <product-card
                    :to="{
                        name: 'Product',
                        params: {
                            productId: 1123,
                            categorySlug: $route.params.categorySlug,
                        },
                    }"
                ></product-card>
            </v-col>
        </v-row>
    </v-container>
</template>
