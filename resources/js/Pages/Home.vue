<template>
  <!-- Navbar -->
  <div class="fixed w-screen top-0">
    <Nav />
  </div>

  <!-- title -->
  <div
    class="flex flex-col justify-center h-screen text-center mt-14 md:mt-8 overflow-hidden"
  >
    <h1 class="text-xl lg:text-2xl font-bold">Lorem ipsum</h1>

    <!-- Banner -->
    <Banner :spotlight="bannerImage" />
  </div>

  <!-- spotlight products -->
  <div id="spotlight" class="flex flex-col items-center justify-center bg-gray-700 p-16">
    <h1  class="text-xl lg:text-2xl font-bold text-white mb-10">
      Nossos Destaques
    </h1>
    <div
      class="flex flex-col items-center md:flex-row md:flex-wrap md:justify-around w-full"
    >
      <Card
        v-for="product in spotlights"
        :key="product.id"
        :spotlight="true"
        :product="product"
        :images="images"
      />
    </div>
  </div>

  <!-- products -->
  <div class="">
    <div class="flex flex-col items-center justify-center p-16">
      <h1 id="spotlight" class="text-xl lg:text-2xl font-bold mb-10">
        Nossos Produtos
      </h1>
      <div
        class="flex flex-col items-center md:flex-row md:flex-wrap md:justify-around w-full"
      >
        <Card
          v-for="product in products.data"
          :key="product.id"
          :spotlight="false"
          :product="product"
          :images="images"
        />
      </div>
    </div>
    <div v-if="products.last_page > 1" class="flex justify-center -mt-20 mb-10">
      <pagination :data="products" />
    </div>
  </div>
</template>

<script>
import Pagination from "./components/admin/Pagination.vue";
import Banner from "./components/public/Banner.vue";
import Card from "./components/public/Card.vue";
import Nav from "./components/public/Nav.vue";

export default {
  name: "Home",
  props: {
    bannerImage: String,
    spotlights: Object,
    products: Object,
    images: Object,
  },
  components: { Nav, Banner, Card, Pagination },
  mounted() {
    console.log(this.products);
  },
};
</script>

<style>
</style>
