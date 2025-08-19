<template>
  <div class="p-4 text-white">
    <div class="flex flex-col justify-center items-center ">
      <h1 class="text-2xl font-bold mb-2">{{ movie_store.movie_details.title }}</h1>
      <img :src="'https://image.tmdb.org/t/p/w500' + movie_store.movie_details.poster_path" alt="Poster" class="rounded-md mb-4" width="200"/>
      <p class="text-gray-300">{{ movie_store.movie_details.overview }}</p>
      <p class="mt-2 text-gray-400">Release Date: {{ movie_store.movie_details.release_date }}</p>
      <p class="mt-2 text-gray-400">{{ movie_store.movie_details.renvenue }}dollars</p>
      <p class="mt-2 text-gray-400">{{ movie_store.movie_details.runtime }}mins</p>
      <p class="mt-2 text-gray-400">{{ movie_store.movie_details.budget }}dollars</p>
    </div>
</div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from '~/stores/movielist'

const route = useRoute()
const movie_store = useStore()

onMounted(() => {
  const movieId = route.params.id
  movie_store.fetchMovieDetails(movieId)
})
</script>
