import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import OneArticle from "@/components/OneArticle";
import EditComment from "@/components/EditComment";
import EditingArticle from "@/components/EditingArticle";
import CommentsList from "@/components/CommentsList";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    props: true
  },
  {
    path: '/current/:id',
    name: 'OneArticle',
    component: OneArticle,
    props: true
  },
  {
    path: '/edit/:id/',
    name: 'EditComment',
    component: EditComment,
    props: true
  },
  {
    path: '/editArticle/:id/',
    name: 'EditingArticle',
    component: EditingArticle,
    props: true
  },
  {
    path: '/comments/',
    name: 'CommentsList',
    component: CommentsList,
    props: true
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router