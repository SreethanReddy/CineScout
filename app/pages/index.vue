<template>
<div>
    <h1 class="text-white text-lg font-bold text-center m-2">Trending Movies</h1>
    <div class="rounded-lg grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 p-2">
        <div v-for="movie in movies" :key="movie.id" class="bg-[#242424] rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition p-4 flex flex-col">
            <NuxtLink :to="`/movie/${movie.id}`">
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

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from '~/stores/movielist';

const store = useStore();
const movies = ref([]);

function handleAddtoWatchlist(movie) {
  store.addToWatchlist(movie)
}

onMounted(
     () =>{
        async function getPopularMovies() {
        try {
            const popularMovies = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=5d7eacaaa65e0575188d70c4888c32c4");
            const data = await popularMovies.json();
            movies.value = data.results
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
        }

        getPopularMovies();
    }
)
</script>

<style>

</style>