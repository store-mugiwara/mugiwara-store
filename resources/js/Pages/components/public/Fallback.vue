<template>
  <div class="h-screen bg-gray-700 flex flex-col items-center justify-center">
      <p class="text-4xl text-white">Página não encontrada !</p>

      <div>
          <img src="https://icon-library.com/images/404-error-icon/404-error-icon-7.jpg" class="object-contain h-60 w-full" alt="erro">
      </div>

      <button @click="goHome" class="bg-blue-500 hover:bg-blue-600 p-3 text-white rounded">
          <i class="fas fa-home fa-lg"></i>
      </button>
  </div>
</template>

<script>
export default {
    name: 'Fallback',
    methods: {
        goHome(){
            this.$inertia.get(route('home'))
        }
    },
}
</script>

<style>

</style>
