<template>
  <form @submit.prevent="onSearchSubmit">
    <input
      type="text"
      placeholder="Search Movie"
      class="border-2 border-red-600 rounded-md p-1 bg-transparent"
      v-model="search_value"
      @change="onSearchSubmit"
      @input="onSearchSubmit" 
      />
      
  </form>
</template>

<script setup>
import { ref } from 'vue';

const search_value = ref('')

const emit = defineEmits(['search'])

function onSearchSubmit(){
    emit('search', search_value.value);
}

</script>


<style scoped>

</style>