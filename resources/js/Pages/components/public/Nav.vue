<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div
            class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between"
          >
            <div @click="goHome" class="flex-shrink-0 flex items-center  cursor-pointer">
              <img
                class="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="log"
              />
              <img
                class="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="logo"
              />
            </div>
            <div class="hidden sm:block sm:ml-6 w-1/2">
              <!-- <search-bar v-if="!isDetails" /> -->
            </div>
          </div>
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          ></div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="sm:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <!-- <search-bar v-if="!isDetails" /> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
    name: "Nav",
    props: {isDetails: Boolean},
  components: {  },
  methods: {
      goHome(){
          this.$inertia.get(route('home'))
      }
  },
};
</script>

<style>
</style>
