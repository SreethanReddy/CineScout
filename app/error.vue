<template>
    <div class="bg-[#242424] min-h-screen flex flex-col justify-center items-center space-y-3">
        <h1 class="text-xl text-center text-white font-bold"> Invalid Path</h1>
        <p class="text-xl text-center text-white font-semibold">Page Not Found: {{ route.path }}</p>
        <NuxtLink to="/" class="text-md text-center text-white text-xl"> Go to Home</NuxtLink>
    </div>


</template>

<script setup>
    const route =  useRoute();
</script>