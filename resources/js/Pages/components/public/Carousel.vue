<template>
  <div class="w-full flex flex-col items-center md:w-1/2">
    <div
      v-show="activeSlide === index"
      v-for="(image, index) in images"
      :key="index"
      class="p-5"
    >
      <div class="w-full mx-auto">
        <img :src="image.path" class="object-contain h-60 w-full" alt="" />
      </div>
    </div>

    <div class="flex justify-center">
      <button @click="prevSlide" class="mr-10">
        <i class="fas fa-arrow-circle-left fa-2x hover:text-gray-700"></i>
      </button>
      <button @click="nextSlide">
        <i class="fas fa-arrow-circle-right fa-2x hover:text-gray-700"></i>
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: { images: Object },
  data() {
    return {
      activeSlide: 0,
    };
  },
  computed: {
    singleImagesLen() {
      return this.images.length;
    },
  },
  methods: {
    // getSingleImages() {
    //   const productImage = (product) => product.product_id === this.product.id;
    //   this.singleImages.push(this.images.filter(productImage));
    // },
    nextSlide() {
      if (this.activeSlide >= this.singleImagesLen - 1) {
        this.activeSlide = 0;
      } else {
        this.activeSlide++;
      }
    },
    prevSlide() {
      if (this.activeSlide <= 0) {
        this.activeSlide = this.singleImagesLen - 1;
      } else {
        this.activeSlide--;
      }
    },
  },
  mounted() {
    console.log(this.images);
  },
};
</script>

<style>
</style>
