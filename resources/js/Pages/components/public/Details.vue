<template>
  <div class="">
    <Nav :isDetails="true" />

    <div class="h-screen flex flex-col justify-center">
      <div class="flex justify-center -mt-24 mb-10">
        <h1 class="font-medium text-2xl">{{ product[0].name }}</h1>
      </div>


        <div class="flex flex-col md:flex-row md:items-center">
          <Carousel :images="images" />
          <div class="flex flex-col p-5 md:w-2/5">
            <p class="text-xl">
              {{ product[0].description }}
            </p>

              <p class="text-2xl font-bold mb-5 mt-2">R$ {{ product[0].price }}</p>
              <a
              :href="goToWhats(product.name)"
              target="_blanck"
                type="submit"
                class="p-2 text-white text-center rounded bg-red-500 hover:bg-red-600 mb-10"
              >
                <i class="fab fa-whatsapp"></i>
                <span class="font-bold ml-3">Comprar</span>
              </a>

          </div>
        </div>

    </div>
  </div>
</template>

<script>
import Carousel from "./Carousel.vue";
import Nav from "./Nav.vue";

export default {
  name: "Details",
  props: { images: Object, product: Object },
  components: { Nav, Carousel },
  methods: {
      goToWhats(product){
        let number = '55123456789999';
        let message = `Olá, estou interessado(a) no produto ${product}, e gostaria de comprá-lo!`;
        let url = `https://api.whatsapp.com/send?phone=${number}&text=${message}`;

        return  url;
    },
  },
};
</script>

<style>
</style>
