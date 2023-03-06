<template>
    <v-parallax src="../static/comment.jpg">
        <v-sheet color="teal-darken-4" rounded width="500" height="auto" class="mx-auto ma-15 mt-15 pa-5">
            <v-form @submit.prevent>

                <v-text-field
                        clearable=True
                        v-model='this.$store.state.oneComment.nameCommentator'
                        label="Никнейм"
                ></v-text-field>
                <v-text-field
                        clearable=True
                        v-model='this.$store.state.oneComment.textComment'
                        label="Комментарий"
                ></v-text-field>
                <v-btn v-if="this.$store.state.oneComment.nameCommentator && this.$store.state.oneComment.textComment" @click="update" :to="{name: 'OneArticle', params:{id:`${this.$store.state.currentArticle.id}`}}" type="submit" block class="mt-2 mx-auto text-teal-darken-4">Обновить комментарий</v-btn>
                <v-btn disabled="true" v-if="!this.$store.state.oneComment.nameCommentator || !this.$store.state.oneComment.textComment" :to="{name: 'OneArticle', params:{id:`${this.$store.state.currentArticle.id}`}}" type="submit" block class="mt-2 mx-auto text-teal-darken-4">Обновить комментарий</v-btn>
                <v-alert class="my-5" v-if="!this.$store.state.oneComment.nameCommentator || !this.$store.state.oneComment.textComment" text="Оба поля должны быть заполнены" type="warning"></v-alert>
            </v-form>
        </v-sheet>
    </v-parallax>
</template>

<script>
    import {mapActions, mapMutations} from "vuex"

    export default {

        methods: {
            ...mapActions({
                update: "updateComment"
            }),

            ...mapMutations({
                oneLeft: "oneLeft"
            }),
        },

        mounted(){
            this.oneLeft(this.$route.params.id)
        }
    }

</script>

<style scoped>

</style>