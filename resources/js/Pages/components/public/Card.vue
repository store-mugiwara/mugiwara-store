<template>
  <div>
    <form
      action="#"
      class="flex flex-col justify-center p-5 h-96 max-h-96 rounded shadow-2xl mb-5"
      :class="[
        !spotlight ? 'bg-gray-800 text-white w-72 h-90' : 'bg-white w-80  h-96',
      ]"
    >
      <div class="flex items-start h-52">
        <div>
            <img
          :src="getSingleImages(product.id)"
          class="object-contain h-40 w-full"
          alt="produto"
        />
        </div>
      </div>
      <div>
        <h3 class="font-medium text-xl">{{ product.name }}</h3>
        <p class="text-xl">{{ formatNumber(product.price) }}</p>
      </div>
      <div class="flex justify-between items-center mt-5">
        <a :href="goToWhats(product.name)" target="_blank"
          type="submit"
          class="p-2 text-white rounded bg-red-500 hover:bg-red-600"
        >
          <i class="fab fa-whatsapp"></i>
          <span class="font-bold ml-3">Comprar</span>
        </a>

        <form method="post" @submit.prevent="getDetails(product)">
            <button type="submit"
          class="hover:text-blue-700 cursor-pointer"
          >Ver detalhes</button
        >
        </form>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: { product: Object, spotlight: Boolean, images: Object },
  methods: {
    getSingleImages(product_id) {
      let image = this.images.find(
        (product) => product.product_id === product_id
      );
      return image.path;
    },
    getDetails(product) {
      this.$inertia.post(route("details"), { product: product.id });
    },
    goToWhats(product){
        let number = '55123456789999';
        let message = `Olá, estou interessado(a) no produto ${product}, e gostaria de comprá-lo!`;
        let url = `https://api.whatsapp.com/send?phone=${number}&text=${message}`;

        return  url;
    },
    formatNumber(number) {
       let formatedNumber =  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number);

       return formatedNumber;
    }
  },
};
</script>

<style>
</style>
