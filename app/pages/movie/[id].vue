
<template>

  <div v-if="movie_store.MovieDetailsloading" class="text-center pt-6 text-lg text-white">
      <h1>Loading.....Please Wait</h1>
  </div>

  <div v-else class="p-6 text-white bg-[#141414] min-h-screen">
    <div class="flex flex-col items-center max-w-2xl mx-auto">
      <h1 class="text-3xl font-extrabold mb-4 text-center">
        {{ movie_store.movie_details.title }}
      </h1>
      <img :src="'https://image.tmdb.org/t/p/w500' + movie_store.movie_details.poster_path" class="rounded-xl shadow-lg mb-6 hover:scale-105 transition-transform duration-300" width="260"/>
      <p class="text-gray-300 text-lg leading-relaxed text-justify mb-6">
        {{ movie_store.movie_details.overview }}
      </p>
      <div class="grid grid-cols-2 gap-4 p-4 w-full">
        <div class="flex flex-col">
          <span class="text-gray-400">Release Date:</span>
          <span class="font-medium">{{ movie_store.movie_details.release_date }}</span>
        </div>
        <div class="flex flex-col">
          <span class="text-gray-400">Revenue:</span>
          <span class="font-medium">${{ movie_store.movie_details.renvenue }}</span>
        </div>
        <div class="flex flex-col">
          <span class="text-gray-400">Runtime:</span>
          <span class="font-medium">{{ movie_store.movie_details.runtime }} mins</span>
        </div>
        <div class="flex flex-col">
          <span class="text-gray-400">Budget:</span>
          <span class="font-medium">${{ movie_store.movie_details.budget }}</span>
        </div>
      </div>
      <button 
      class="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out cursor-pointer hover:scale-105"
      @click="handleAddtoWatchlist(movie_store.movie_details)"
      >
              Add To Watchlist
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from '~/stores/movielist'


function handleAddtoWatchlist(movie) {
  movie_store.addToWatchlist(movie)
}


const route = useRoute()
const movie_store = useStore()

onMounted(() => {
  const movieId = route.params.id
  movie_store.fetchMovieDetails(movieId)
})
</script>
