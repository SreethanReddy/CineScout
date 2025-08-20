<template>
<div v-if="watchlist_movies.length > 0">
  <div class="flex justify-end mb-4 px-2 py-3">
      <button 
        @click="handleClearAll"
        class="text-white bg-red-500 hover:bg-red-700 rounded-md cursor-pointer px-4 py-2 font-semibold"
      >
        Clear All Movies
      </button>
  </div>
  <div class="rounded-lg grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 p-2">
        <div v-for="movie in watchlist_movies" :key="movie.id" class="bg-[#242424] rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition p-4 flex flex-col">
            <NuxtLink  :to="`/movie/${movie.id}`">
                <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="Movie Poster" width="200"  class="rounded-md"/>
                <h1 class="text-white font-semibold">{{ movie.title }}</h1>
                <p class="text-gray-400 text-sm line-clamp-3">{{ movie.overview }}</p>
            </NuxtLink >
                <button class="text-white bg-red-500 hover:bg-red-700 rounded-md cursor-pointer mt-2 w-full" @click="handleRemove(movie)">Remove</button>
        </div>
  </div>
</div>

  <div v-else>
    <p class="text-white text-center font-bold pt-12">Your watchlist is empty.</p>
  </div>
</template>

<script setup>
import { useStore } from '../stores/movielist';
import { storeToRefs } from 'pinia'; 
import { onMounted } from 'vue';
const store = useStore();

const { watchListMovies: watchlist_movies } = storeToRefs(store);


function handleRemove(movie) {
  console.log('Removing', movie.id)
  store.removeWatchlist(movie)
}

function handleClearAll() {
  console.log("Clear All button clicked");
  store.clearAllWatchlist();
}


onMounted(() => {
    store.getWatchListFromStorage();
})


</script>

<style> 
</style> 