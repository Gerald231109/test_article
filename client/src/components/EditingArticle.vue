<template>
    <v-parallax src="../static/typewrite.jpg">
        <v-sheet rounded height="auto" width="auto" color="blue-grey-darken-3" class="ma-5 pa-15">
            <v-form fast-fail @submit.prevent>
                <v-text-field
                        v-model="this.$store.state.newTitle"
                        label="Новое название"
                ></v-text-field>
                <v-textarea
                        variant="filled"
                        label="Обновленный текст"
                        v-model="this.$store.state.newText"
                        auto-grow>
                </v-textarea>

                <v-btn
                        v-if="this.$store.state.newTitle && this.$store.state.newText"
                        class="text-teal-darken-4"
                        type="submit"
                        @click="update"
                        to="/"
                >Обновить</v-btn>
                <v-btn
                        disabled="true"
                        v-if="!this.$store.state.newTitle || !this.$store.state.newText"
                        class="text-teal-darken-4"
                        type="submit"
                >Обновить</v-btn>
                <v-alert v-if="!this.$store.state.newTitle || !this.$store.state.newText"
                         text="Оба поля должны быть заполнены!"
                         type="warning"
                         class="mt-5"></v-alert>
            </v-form>
        </v-sheet>
    </v-parallax>
</template>

<script>
    import {mapActions, mapMutations} from 'vuex'

    export default {
        methods: {
            ...mapActions({
                one: "findOne",
                update: "update",
            }),

            ...mapMutations({
                updateArticle: "updateArticle"
            }),

            findOne(kekis){
                this.one({
                    id: kekis
                });
            },
        },

        mounted(){
            this.findOne(this.$route.params.id)
            this.updateArticle
        }
    }
</script>

<style scoped>

</style>