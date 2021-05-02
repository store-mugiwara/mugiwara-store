<template>
  <div>
      <button @click="openModal" class="bg-green-600 p-2 text-white rounded mb-2">Nova</button>

      <categories-table :categories="categories" />

      <layout-modal v-if="clickButton" :openModal="clickButton" @close-modal="closeModal">
          <add-category @close-form="closeModal" />
      </layout-modal>
  </div>
</template>

<script>
import LayoutModal from '../LayoutModal.vue'
import AddCategory from './addCategory.vue'
import CategoriesTable from './CategoriesTable.vue'

export default {
    name: 'Categories',
    props:{
        categories: Object
    },
    data() {
        return {
            clickButton: false
        }
    },
  components: { CategoriesTable, LayoutModal, AddCategory },
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
