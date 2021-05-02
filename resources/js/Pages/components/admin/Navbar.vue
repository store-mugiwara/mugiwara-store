<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <inertia-link :href="route('home')">
                <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
            </inertia-link>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a @click="changeCurrentTab('Products')" href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Produtos</a>

              <a @click="changeCurrentTab('Categories')" href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Categorias</a>

              <a @click="changeCurrentTab('Users')" href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Usuarios</a>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">

            <!-- Profile dropdown -->
            <div class="ml-3 relative">
              <div>
                <button @click="toggleDropdownMenu" type="button" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-expanded="false" aria-haspopup="true">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg" alt="">
                </button>
              </div>

              <div :class="[dropdownMenuOpen ? 'block' : 'hidden']" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <inertia-link :href="route('admin.logout')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sair</inertia-link>
              </div>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button @click="toggleMobileMenu" type="button" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg class="h-6 w-6" :class="[mobileMenuOpen ? 'hidden' : 'block']" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!--
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg class="h-6 w-6" :class="[mobileMenuOpen ? 'block' : 'hidden']" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="md:hidden" :class="[mobileMenuOpen ? 'block' : 'hidden']" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a @click="changeCurrentTab('Products')" href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Produtos</a>

        <a @click="changeCurrentTab('Categories')" href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Categorias</a>

        <a @click="changeCurrentTab('Users')" href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Usuários</a>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src="https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg" alt="">
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-none text-white">ADMIN</div>
            <!-- <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div> -->
          </div>
        </div>
        <div class="mt-3 px-2 space-y-1">
          <inertia-link :href="route('admin.logout')" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sair</inertia-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            mobileMenuOpen: false,
            dropdownMenuOpen: false,
            currentTab: 'Products'
        }
    },
    methods: {
        toggleMobileMenu(){
            (this.mobileMenuOpen ? this.mobileMenuOpen = false : this.mobileMenuOpen = true);
        },
        toggleDropdownMenu(){
            (this.dropdownMenuOpen ? this.dropdownMenuOpen = false : this.dropdownMenuOpen = true);
        },
        changeCurrentTab(tab){
          this.currentTab = tab;
          this.$emit('myEvent', this.currentTab);
        }
    }
}
</script>

<style>

</style>
