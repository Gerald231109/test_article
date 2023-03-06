import { createStore } from 'vuex'
import DataServices from "@/services/DataServices";

export default createStore({
  state: {
    textComment: "",
    nameComment: "",
    textArticle: "",
    title: "",
    currentArticle: {},
    oneComment: {},
    newText: "",
    newTitle: "",
    dateOne: "",
    dateTwo: "",
    allComments: [],
    articles: "",
  },

  mutations: {
    saveActive(state, payload){
      state.currentId = payload.id
    },

    oneLeft(state, payload) {
      if (state.currentArticle.comments !== undefined) {
        state.oneComment = state.currentArticle.comments.filter(i => i.id === Number(payload))[0]
      }
    },

    freshForms(state) {
      state.textComment = ""
      state.nameComment = ""
      state.textArticle = ""
      state.title = ""
      state.newText = ""
      state.newTitle = ""
    },

    updateArticle(state) {
      state.newTitle = state.currentArticle.title
      state.newText = state.currentArticle.text
    },

    getComments(state){
      for (let i = 0; i <= state.articles; i++) {
        state.allComments.push(`state.articles.${i}`)
      }
    },

    cleanFilter(state) {
      state.dateOne = ""
      state.dateTwo = ""
    },


  },

  actions: {

    allArticles(context){
      DataServices.getAll(context.state.dateOne, context.state.dateTwo)
          .then(response => {
            context.commit('cleanFilter')
            context.state.articles = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          })
    },


    newArticle(context){
      let data = {
        title: context.state.title,
        textContent: context.state.textArticle

      };
      DataServices.createArticle(data)
          .then(response => {
            console.log(response.data)
            context.dispatch('allArticles')
            context.commit('freshForms')
          })

    },

    newComment(context){
      let data = {
        nameCommentator: context.state.nameComment,
        textComment: context.state.textComment,
        articleId: context.state.currentArticle.id
      };

      DataServices.createComment(data)
          .then(response => {
            console.log(response.data);
            context.dispatch('findOne', {id: context.state.currentArticle.id})
            context.commit('freshForms')
          })
          .catch(e => {
            console.log(e);
          })
    },

    findOne(context, payload){
      DataServices.getOne(payload.id)
          .then(response => {
            context.state.currentArticle = response.data;
            context.commit('updateArticle')
            console.log(response.data)
          })

    },

    update(context){
      let data = {
        title: context.state.newTitle,
        text1: context.state.newText,
      };
      console.log(data)
      DataServices.update(context.state.currentArticle.id, data)
          .then(response => {
            context.commit('freshForms')
            context.dispatch('findOne', {id: context.state.currentArticle.id})
            console.log(response.data)
          })
          .catch(e => {
            console.log(e);
          })
    },

    updateComment(context){
      let data = {
        nameCommentator: context.state.oneComment.nameCommentator,
        textComment: context.state.oneComment.textComment,
      };
      console.log(data)
      DataServices.updateComment(context.state.oneComment.id, data)
          .then(response => {
            context.commit('freshForms')
            context.dispatch('findOne', {id: context.state.currentArticle.id})
            console.log(response.data)
          })
          .catch(e => {
            console.log(e);
          })
    },

    deleteArticle(context, payload) {
      let data = {data:{id : payload}};

      console.log(payload)
      DataServices.deleteArticle(data)
          .then(response => {
            console.log(response.data);
            context.dispatch('allArticles')
          })
          .catch(e => {
            console.log(e);
          });
    },

    deleteComment(context, payload) {
      let data = {data:{id:payload}};
      console.log(payload)
      DataServices.deleteComment(data)
          .then(response => {
            console.log(response.data);
            context.dispatch('findOne', {id: context.state.currentArticle.id})
          })
          .catch(e => {
            console.log(e);
          });
    },
  },



})
