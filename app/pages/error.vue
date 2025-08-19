<template>
    <h1 class="text-xl text-center text-white"> 404 </h1>
    <p class="text-xl text-center text-white">Page Not Found: {{ route.path }}</p>
    
    <NuxtLink to="/" class="text-md text-center text-white"> Go to Home</NuxtLink>

</template>

<script setup>
    const route =  useRoute();
</script>