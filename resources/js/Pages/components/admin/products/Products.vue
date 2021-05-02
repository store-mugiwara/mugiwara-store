<template>
  <div>
      <button @click="openModal" class="bg-green-600 p-2 text-white rounded mb-2">Novo</button>
      <products-table :products="products" :images="images" :categories="categories"></products-table>

      <layout-modal v-if="clickButton" :openModal="clickButton" @close-modal="closeModal">
          <add-product :categories="categories" @close-form="closeModal" />
      </layout-modal>

  </div>
</template>

<script>
import AddProduct from './addProduct.vue'
import LayoutModal from '../LayoutModal.vue'
import ProductsTable from '../products/ProductsTable.vue'

export default {
    name: 'Products',
        props: {
            products: Object,
            images: Object,
            categories: Object,
        },
    data() {
        return {
            clickButton: false
        }
    },
    components: { ProductsTable, LayoutModal, AddProduct },
    methods: {
        openModal(){
            this.clickButton = true;
        },
        closeModal(){
            this.clickButton = false;
        },
    },
}
</script>

<style>

</style>
