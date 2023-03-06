<template>
  <v-parallax src="../static/home-back.jpg">
    <v-sheet rounded height="auto" width="600" class="mx-auto mt-15" color="blue-grey darken-4">
      <v-form fast-fail @submit.prevent>
        <v-text-field
                class="text-white"
                clearable=true
                label="Название"
                v-model="this.$store.state.title"
        ></v-text-field>

        <v-textarea
                aria-multiline="true"
                class="text-white"
                variant="filled"
                clearable=true
                label="Текст"
                v-model="this.$store.state.textArticle"
                auto-grow
        ></v-textarea>

        <v-btn v-if="this.$store.state.title && this.$store.state.textArticle" color="cyan darken-1" type="submit" block class="mt-2 text-white mx-auto" @click="newArticle">Создать статью</v-btn>
        <v-btn disabled="true" v-if="!this.$store.state.title || !this.$store.state.textArticle" color="blue-grey darken-4" type="submit" block class="mt-2 mx-auto" >Создать статью</v-btn>
        <v-alert v-if="!this.$store.state.title || !this.$store.state.textArticle" text="Оба поля должны быть заполнены!" type="warning" class="mt-5"></v-alert>

      </v-form>
    </v-sheet>



    <v-navigation-drawer permanent fixed right
                         color="blue-grey darken-4"
                         :width="300"
                         :height="300"
                         class="pa-5">
      <v-card

              max-width="300">
        <v-list>
          <v-list-item
                  color="blue"
                  v-for="article in this.$store.state.articles"
                  :key="article.id"
                  :title="article.title"
                  :subtitle="article.text"

                  rounded="xl">
            <v-btn :to="{name: 'OneItem', params:{id:`${article.id}`}}" class="ma-1" width="30" height="30" color="teal-darken-4">Читать</v-btn>
            <v-btn :to="{name: 'EditingArticle', params:{id:`${article.id}`}}" class="ma-1" width="30" height="30" color="primary"  icon="mdi-pencil"></v-btn>
            <v-btn @click="deleti(article.id)" class="ma-1" width="30" height="30" color="red" icon="mdi-cancel"></v-btn>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>
  </v-parallax>
</template>


<script>
  import {mapActions, mapMutations} from 'vuex'

  export default{

    methods: {
      ...mapActions({
        allArticles: "allArticles",
        newArticle: "newArticle",
        deleti: "deleteArticle"
      }),

      ...mapMutations({
        active: "saveActive"
      }),
    },

    mounted(){
      this.allArticles();
    }
  }



</script>