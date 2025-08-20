import { createRouter, createWebHistory } from 'vue-router'
import Movies from '@/components/MoviesList.vue'
import WatchlistView from '@/components/WatchlistView.vue'
import MovieDetailView from '@/components/MovieDetailView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Movies,
    },
    {
      path: "/watchlist",
      component: WatchlistView,
    },
    { 
      path: "/movie/:id",
      component: MovieDetailView,
      props: true,
     },

  ],
})

export default router
