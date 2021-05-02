<template>
  <div class="flex items-center justify-around p-2 w-screen">
      <div class="flex flex-col items-center max-w-lg  p-8">
          <p class="font-medium mb-10 text-center">
              Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi! Mé faiz elementum girarzis, nisi eros vermeio. A ordem dos tratores não altera o pão duris. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.
          </p>
          <a href="#spotlight" class="bg-red-600 text-white p-2 rounded hover:bg-red-700">Conhecer</a>
      </div>

      <div class="hidden md:block max-w-sm">
          <img :src="spotlight"  alt="shopping">
      </div>
  </div>
</template>

<script>
export default {
    name: 'Banner',
    props: { spotlight: String }
}
</script>

<style>

</style>
