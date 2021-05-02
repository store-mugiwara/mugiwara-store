<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Nome
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Descrição
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Preço
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Editar</span>
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Excluir</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="product in products.data" :key="product.id">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img class="h-10 w-10 rounded-full" :src="getSingleImages(product.id)" alt="" />
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          {{ product.name }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">
                      {{ product.description }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span>{{ product.price }}</span>
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                  >
                    <button
                      @click="openModal(product)"
                      class="text-indigo-600 hover:text-indigo-900"
                    >
                      Editar
                    </button>
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                  >
                    <button
                      @click="remove(product.id)"
                      class="text-red-600 hover:text-indigo-900"
                    >
                      Excluir
                    </button>
                  </td>
                  <layout-modal
                    v-if="modalOpen"
                    :openModal="modalOpen"
                    @close-modal="closeModal"
                  >
                    <edit-product
                      :product="productEdit"
                      :images="images"
                      :categories="categories"
                      @close-form="closeModal"
                    />
                  </layout-modal>
                </tr>
              </tbody>
            </table>
            <div v-if="products.last_page > 1" class="flex justify-center">
              <pagination :data="products" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutModal from "../LayoutModal.vue";
import Pagination from "../Pagination.vue";
import editProduct from "./editProduct.vue";
export default {
  name: "ProductsTable",
  props: {
    products: Object,
    images: Object,
    categories: Object,
  },
  data() {
    return {
      modalOpen: false,
      productEdit: null,
    };
  },
  components: { Pagination, LayoutModal, editProduct },
  methods: {
    remove(id) {
      this.$inertia.post(route("admin.deleteProduct"), { product: id });
    },
    openModal(product) {
      this.productEdit = product;
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    },
    getSingleImages(product_id) {
      let image = this.images.find(
        (product) => product.product_id === product_id
      );
      return image.path;
    },
  },
  mounted() {

  },
};
</script>

<style>
</style>
