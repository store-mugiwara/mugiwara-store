<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div
      class="px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
    >
      <div class="flex-1 flex justify-between sm:hidden">
        <inertia-link
          v-if="data.prev_page_url"
          :href="data.prev_page_url"
          class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
          preserve-scroll
        >
          Anterior
        </inertia-link>
        <inertia-link
          :href="data.next_page_url"
          class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
          preserve-scroll
        >
          Próxima
        </inertia-link>
      </div>
      <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <nav
            class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <inertia-link
              v-if="data.prev_page_url"
              :href="data.prev_page_url"
              class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              preserve-scroll
            >
              <span class="sr-only">Anterior</span>
              <!-- Heroicon name: solid/chevron-left -->
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </inertia-link>

            <!-- if not have prev url -->
            <span
              v-if="!data.prev_page_url"
              class="cursor-not-allowed relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span class="sr-only">Anterior</span>
              <!-- Heroicon name: solid/chevron-left -->
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>

            <inertia-link
              v-for="(item, index) in dataLinks"
              :key="index"
              :href="item.url"
              :class="hideLink(item) ? 'hidden' : ''"
              class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              preserve-scroll
            >
              <span :class="item.active ? 'text-blue-700' : ''">{{
                item.label
              }}</span>
            </inertia-link>

            <inertia-link
              v-if="data.next_page_url"
              :href="data.next_page_url"
              class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              preserve-scroll
            >
              <span class="sr-only">Próxima</span>
              <!-- Heroicon name: solid/chevron-right -->
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </inertia-link>

            <!-- if not have next page url -->
            <span
              v-if="!data.next_page_url"
              class="cursor-not-allowed relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span class="sr-only">Próxima</span>
              <!-- Heroicon name: solid/chevron-right -->
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    data: Object,
  },
  data() {
    return {
      dataLinks: this.data.links,
    };
  },
  methods: {
    hideLink(link) {
      return link.label === "&laquo; Previous" || link.label === "Next &raquo;";
    },
  },
  mounted() {},
};
</script>

<style>
</style>
