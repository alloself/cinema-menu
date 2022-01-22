<template>
    <div>
        <div class="mb-6">
            <v-img
                height="500"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
        </div>
        <v-container>
            <v-row>
                <v-col cols="6"><h1>Тар-тар из говядины</h1></v-col>
                <v-col cols="6" class="text-right"><h2>490Р</h2></v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-card class="mx-auto" outlined>
                        <v-card-title class="text-h5 mb-1">
                            Описание:
                        </v-card-title>
                        <v-card-text class="mb-8"
                            >Turns out semicolon-less style is easier and safer
                            in TS because most gotcha edge cases are type
                            invalid as well</v-card-text
                        >
                        <v-card-title class="text-h5 mb-1">
                            Пищевая ценность:
                        </v-card-title>
                        <v-card-text class="mb-8"
                            >Turns out semicolon-less style is easier and safer
                            in TS because most gotcha edge cases are type
                            invalid as well</v-card-text
                        >
                    </v-card></v-col
                >
            </v-row>
        </v-container>
    </div>
</template>
<style lang="scss" scoped></style>
