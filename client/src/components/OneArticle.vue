<template>
    <v-parallax src="../static/home-back.jpg">
        <v-sheet color="transparent" class="pa-15 ma-5 mx-16">
            <v-sheet rounded color="blue-grey darken-4" class="pa-15">
                <v-row  class="text-h1 text-white justify-center mb-1">{{title.title}}</v-row>
                <v-divider color="white" thickness="3" class="my-5"></v-divider>
                <div  class="work justify-center font-weight-regular text-body-1 text-white">{{title.text}}</div>
                <v-row class="pa-4"
                       justify="space-around"
                       no-gutters>
                    <v-btn :to="{name: 'EditingArticle', params:{id:`${this.$route.params.id}`}}" class="ma-1" width="150" height="30" color="teal-darken-4">Редактировать</v-btn>
                    <v-btn to="/" @click="deleti(this.$route.params.id)" class="ma-1" width="150" height="30" color="red">Удалить</v-btn>
                </v-row>
            </v-sheet>
            <v-divider color="white" thickness="3" class="mt-5"></v-divider>
            <v-sheet class="mt-5" color="transparent">
                <v-sheet rounded width="600" height="300" class="mx-auto pa-5 mb-5">
                    <v-form @submit.prevent>
                        <v-text-field
                                clearable=true
                                v-model="this.$store.state.nameComment"
                                label="Никнейм"
                        ></v-text-field>
                        <v-text-field
                                clearable=true
                                v-model="this.$store.state.textComment"
                                label="Комментарий"
                        ></v-text-field>
                        <v-btn v-if="this.$store.state.nameComment && this.$store.state.textComment" @click="comment" type="submit" block class=" mt-2 mx-auto" color="teal-darken-4">Добавить комментарий</v-btn>
                        <v-btn disabled="true" v-if="!this.$store.state.nameComment || !this.$store.state.textComment" block class="mt-2 mx-auto" color="teal-darken-4">Добавить комментарий</v-btn>
                        <v-alert v-if="!this.$store.state.nameComment || !this.$store.state.textComment" text="Оба поля должны быть заполнены" type="warning" class="mt-2"></v-alert>
                    </v-form>
                </v-sheet>
                <v-divider :thickness="3" color="white" class="pb-5"></v-divider>
                <v-card color="teal-darken-4"
                        class="mx-auto"
                        width="600">
                    <v-list-subheader color="white" class="mx-4">Комментарии</v-list-subheader>
                    <v-list>
                        <v-list-item
                                border="true" height="80"
                                v-for="comment in this.$store.state.currentArticle.comments"
                                :key="comment.id"
                                :title="comment.nameCommentator"
                                :subtitle="comment.textComment"
                        >
                            <v-btn :to="{name: 'EditComment', params:{id:`${comment.id}`}}" width="30" height="30" color="primary"  icon="mdi-pencil"></v-btn>
                            <v-btn @click="deleteComm(comment.id)" class="ma-1" width="30" height="30" color="red" icon="mdi-cancel"></v-btn>
                            <v-divider :thickness="3"></v-divider>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-sheet>
        </v-sheet>
    </v-parallax>
</template>

<script>
    import {mapActions, mapState} from "vuex"
    export default {
        computed:
            mapState ({
                title: "currentArticle"
            }),

        methods: {
            ...mapActions({
                one: "findOne",
                comment: "newComment",
                update: "update",
                deleteComm: "deleteComment",
                deleti: "deleteArticle"

            }),

            findOne(kekis){
                this.one({
                    id: kekis
                });
            },


        },

        mounted() {
            this.findOne(this.$route.params.id)
        },

    }
</script>

<style scoped>
    .work {
        white-space: pre-line;
    }
</style>