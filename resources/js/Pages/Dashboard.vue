<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
<div>
    <navbar @my-event="changeCurrentTab($event)" />

    <Header />

  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="px-4 py-6 sm:px-0">
          <component :is="currentTabComponent" :products="products" :images="images" :categories="categories"></component>
      </div>
      <!-- /End replace -->
    </div>
  </main>
</div>

</template>

<script>
import Header from './components/admin/Header.vue';
import Navbar from './components/admin/Navbar.vue';
import Products from './components/admin/products/Products.vue';
import Users from './components/admin/Users.vue';
import Categories from './components/admin/categories/Categories.vue';

export default {
    name: 'Dashboard',
    props: {
        products: Object,
        images: Object,
        categories: Object,
    },
    data() {
        return {
            currentTab: 'Products'
        }
    },
    components: {
        Navbar,
        Header,
        Products,
        Users,
        Categories,
    },
    methods: {
        changeCurrentTab(tab){
            this.currentTab = tab;
        }
    },
    computed: {
        currentTabComponent(){
            return this.currentTab;
        }
    }
}
</script>

<style>

</style>
