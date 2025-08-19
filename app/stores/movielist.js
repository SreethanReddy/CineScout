import { defineStore } from 'pinia'



export const useStore = defineStore('variables', {
  state:() => ({
        watchListMovies: [],
        movie_details: {},
        searchMovieDetailsResult: [],
  }),
  actions: {
    addToWatchlist(movie) {
      if ( !this.watchListMovies.find(watchMovie => watchMovie.id === movie.id)){
        this.watchListMovies.push(movie);
        this.saveToLocalStorage();
      }
    },
    removeWatchlist(movie){
      this.watchListMovies = this.watchListMovies.filter(m => m.id !== movie.id);
      this.saveToLocalStorage();
    },
    saveToLocalStorage(){
      localStorage.setItem("user_watchlist", JSON.stringify(this.watchListMovies))
    },
    getWatchListFromStorage(){
      const watchList_data = localStorage.getItem("user_watchlist")
      if (watchList_data){
        this.watchListMovies = JSON.parse(watchList_data);
      }
    },
    async searchMovieDetails(query){
      const url_search = `https://api.themoviedb.org/3/search/movie?api_key=5d7eacaaa65e0575188d70c4888c32c4&query=${query}`
      try{
        const url_fetch = await fetch(url_search);
        const data = await url_fetch.json();
        this.searchMovieDetailsResult = data.results
      }catch(error){
        console.log(error)
      }
    },
    removeSearchMovieDetails(){
        this.searchMovieDetailsResult = []
    },
    async fetchMovieDetails(id){
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=5d7eacaaa65e0575188d70c4888c32c4`;
      try{
        const api_call =  await fetch(url);
        this.movie_details = await api_call.json();
      }catch(error){
        console.log(error);
      }
    }
  },
  getters: {
    watchListCount: (state) => state.watchListMovies.length  
  }
})
