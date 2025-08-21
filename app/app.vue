<template>
  <div  class="bg-[#141414] p-3 min-h-screen">
        <nav class="flex flex flex-col md:flex-row md:justify-between items-center px-4 py-2 bg-[#141414] text-white fixed top-0 left-0 right-0 z-50">
            <div class="flex space-x-4">
              <NuxtLink to="/" class="pl-8 font-semibold text-xl text-white hover:text-red-500" @click="movie_store.removeSearchMovieDetails()">CineScout</NuxtLink>            </div>
            <div class="flex space-x-6">
              <SearchBar @search="handleSearch" />
              <NuxtLink to="/" class="p-1 text-md text-white hover:text-red-500" @click="movie_store.removeSearchMovieDetails()">Home</NuxtLink>
              <NuxtLink to="/watchlist" class="p-1 relative" @click="movie_store.removeSearchMovieDetails()">
                <span class="mr-4 text-md text-white hover:text-red-500">Watchlist</span>
                <span v-if="movie_store.watchListCount > 0"
                    class="absolute -top-2 -right-0 text-xs bg-red-500 hover:bg-white text-white hover:text-red-500 font-bold p-1.5 rounded-full">
                    {{ movie_store.watchListCount }}
              </span>
              </NuxtLink>
            </div>
        </nav>

      <!-- search bar results  -->
<div>
        <div class="pt-12" v-if="movie_store.searchMovieDetailsResult.length > 0">
              <div class="rounded-lg grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 p-2">
                  <div v-for="movie in movie_store.searchMovieDetailsResult" :key="movie.id" class="bg-[#242424] rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition p-4 flex flex-col">
                      <NuxtLink :to="`/movie/${movie.id}`" @click="movie_store.removeSearchMovieDetails()">
                          <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" width="200"  class="rounded-md"/>
                          <h1 class="text-white font-semibold">{{ movie.title }}</h1>
                          <p class="text-gray-400 text-sm line-clamp-3">{{ movie.vote_average }}/10</p>
                          </NuxtLink>
                          <button 
                          class="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out cursor-pointer hover:scale-105"
                          @click="handleAddtoWatchlist(movie)"
                          >
                                  Add To Watchlist
                          </button>
                  </div>
              </div>
        </div>
        <div v-else-if="movie_store.searchMovieDetailsResult.length === 0 && searchValue.length>0">
            <h1 class="text-center text-white font-bold text-lg pt-12">No Results Found</h1>
        </div>
</div>

 <!-- component render  -->
        <div class="pt-12 pl-2 pr-2">
          <NuxtPage />
        </div>
  </div>

</template>

<script setup>
import { useStore } from '~/stores/movielist';
import SearchBar from '~/components/SearchBar.vue';
import { ref } from 'vue';





const searchValue = ref('')
const movie_store = useStore()

function handleAddtoWatchlist(movie) {
  movie_store.addToWatchlist(movie)
}


function handleSearch(search_value) {
  searchValue.value = search_value
  if (search_value.trim() !== '') {
       movie_store.searchMovieDetails(search_value);
  }else{
    movie_store.removeSearchMovieDetails();
  }
}


</script>

<style>

</style>