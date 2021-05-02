<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Editar produto
        </h2>
      </div>
      <form @submit.prevent="handleSubmit" class="mt-8 space-y-6">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="name" class="sr-only">Nome</label>
            <input
              v-model="form.name"
              id="text"
              name="name"
              type="name"
              autocomplete="name"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Nome"
            />
          </div>

          <div>
            <label for="description" class="sr-only">Descrição</label>
            <textarea
              v-model="form.description"
              id="description"
              name="description"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="descrição"
            ></textarea>
          </div>
          <div>
            <label for="price" class="sr-only">Preço</label>
            <input
              v-model="form.price"
              id="price"
              name="price"
              type="number"
              step=".01"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="preço"
            />
          </div>
          <div>
            <label for="price" class="sr-only">Preço</label>
            <input
              id="image"
              name="image"
              type="file"
              ref="files"
              multiple

              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="preço"
            />
          </div>
          <div>
            <select
              v-model="form.category_id"
              id="category_id"
              name="category_id"
              class="rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            >
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.id"
              >
                {{ category.name }}
              </option>
            </select>
          </div>
          <div class="flex flex-wrap justify-center">
            <div v-for="(image,index) in singleImages[0]" :key="index" class="w-28 mr-3">
              <img :src="image.path" alt="" />
              <button @click.prevent="removeImage(index)" class="bg-red-700 p-1 text-white">Excluir</button>
            </div>
          </div>
        </div>

        <div class="flex">
          <button
            @click="closeForm"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- Heroicon name: solid/lock-closed -->
              <svg
                class="h-5 w-5 text-gray-400 group-hover:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            cancelar
          </button>

          <button
            type="submit"
            class="ml-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- Heroicon name: solid/lock-closed -->
              <svg
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Salvar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "addProduct",
  props: {
    categories: Object,
    product: Object,
    images: Object,
  },
  data() {
    return {
      form: {
        id: this.product.id,
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        category_id: this.product.category_id,
        deletedImages: [],
      },
      singleImages: [],
    };
  },
  methods: {
    handleSubmit() {
        if (this.$refs.files.files.length > 0 ) {
            this.form.newImages = this.$refs.files.files;
        } else {
            this.form.newImages = [];
        }

      this.$inertia.post(route('admin.editProduct'), this.form);
      this.$emit('closeForm');
    },
    closeForm() {
      this.$emit("closeForm");
    },
    removeImage(index) {
        this.form.deletedImages.push(this.form.images[0][index].id);
      this.form.images[0].splice(index, 1);
    },
    getSingleImages(){
        const productImage = product => product.product_id === this.product.id
        this.singleImages.push(this.images.filter(productImage))
        this.form.images = this.singleImages;
    }
  },
  mounted() {
      this.getSingleImages();
  },
};
</script>

<style>
</style>
