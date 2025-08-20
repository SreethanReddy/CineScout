 <!-- <template>
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
</template> -->




<template>
  <div class="p-6 text-white bg-[#141414] min-h-screen">
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






<!-- <template>
 <div class="bg-gray-900 min-h-screen p-4 sm:p-8 text-white flex justify-center items-center">
    
    <div class="bg-gray-800 rounded-xl shadow-2xl overflow-hidden max-w-5xl w-full">
      <div class="md:flex">
        
        <div class="md:w-1/3">
          <img 
            :src="'https://image.tmdb.org/t/p/w500' + movie_store.movie_details.poster_path" 
            alt="Poster" 
            class="w-full h-full object-cover"
          />
        </div>
        
        <div class="p-8 md:w-2/3 flex flex-col justify-between">
          <div>
            <h1 class="text-4xl font-bold mb-2 text-cyan-400">{{ movie_store.movie_details.title }}</h1>
            <p class="text-gray-300 leading-relaxed mb-6">{{ movie_store.movie_details.overview }}</p>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <span class="font-semibold text-gray-400 block">Release Date</span>
              <span class="text-lg">{{ movie_store.movie_details.release_date }}</span>
            </div>
            <div>
              <span class="font-semibold text-gray-400 block">Runtime</span>
              <span class="text-lg">{{ movie_store.movie_details.runtime }} mins</span>
            </div>
            <div>
              <span class="font-semibold text-gray-400 block">Budget</span>
              <span class="text-lg">${{ movie_store.movie_details.budget.toLocaleString() }}</span>
            </div>
             <div>
              <span class="font-semibold text-gray-400 block">Revenue</span>
              <span class="text-lg">${{ movie_store.movie_details.revenue.toLocaleString() }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template> --> 



