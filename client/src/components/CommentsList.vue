<template>
    <v-sheet class="mx-auto" width="1100">
        <v-row
                class="pa-4"
                justify="space-around"
                no-gutters
        >
            <v-col cols="3" class="mx-3">
                <v-text-field
                        clearable="true"
                        v-model="this.$store.state.dateOne"
                        label="От"
                        type="datetime-local"
                ></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field
                        clearable="true"
                        v-model="this.$store.state.dateTwo"
                        label="До"
                        type="datetime-local"
                ></v-text-field>
            </v-col>
            <v-btn v-if="this.$store.state.dateOne && this.$store.state.dateTwo" @click="allArticles" color="green">Отфильтровать</v-btn>
            <v-alert v-if="!this.$store.state.dateOne || !this.$store.state.dateTwo" text="Выберите дату в обоих полях" class="mx-2" type="warning"></v-alert>
            <v-btn v-if="!this.$store.state.dateOne || !this.$store.state.dateTwo" @click="allArticles" color="blue" >Сброс</v-btn>
        </v-row>
    </v-sheet>
    <v-divider class="border-opacity-100"></v-divider>
    <v-table>
        <thead>
        <tr>
            <th class="text-left">
                Название статьи
            </th>
            <th class="text-left">
                Комментарии
            </th>
        </tr>
        </thead>
        <tbody>
        <tr
                v-for="article in this.$store.state.articles"
                :key="article.id"
        >
            <td v-if="article.comments != 0">{{ article.title }}</td>
            <td v-if="article.comments != 0 && article.comments">
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn
                                color="white"
                                v-bind="props"
                                width="800"
                        >
                            Комментарии к {{article.title}}
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item
                                v-for="comment in article.comments"
                                :key="comment.id"
                        >
                            <v-list-item-title>{{ comment.nameCommentator }} писал(а): {{comment.textComment}}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </td>
        </tr>
        </tbody>
    </v-table>
    <v-divider class="border-opacity-100"></v-divider>
</template>

<script>
    import {mapActions, mapMutations} from 'vuex'

    export default {
        methods: {
            ...mapActions({
                allArticles: "allArticles",
            }),
            ...mapMutations({
                comments: "getComments",
            }),
        },

        mounted(){
            this.allArticles();
        }
    }
</script>

<style scoped>

</style>