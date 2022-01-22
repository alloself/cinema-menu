<template>
    <div>
        <v-card v-bind="$attrs">
            <v-img
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                min-height="250px"
            >
                <v-card-title class="text-bold"><h2>490 Р</h2></v-card-title>
                <v-card-text>
                    <div class="text-subtitle-1 mb-4">
                        <h3>Cafe Badilico</h3>
                    </div>
                    <div class="text-right">100 г</div>
                </v-card-text>
            </v-img>
        </v-card>
    </div>
</template>
<script>
export default {
    data: () => ({
        loading: false,
        selection: 1,
    }),

    methods: {
        reserve() {
            this.loading = true;

            setTimeout(() => (this.loading = false), 2000);
        },
    },
};
</script>
