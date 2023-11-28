<script lang="ts">
import { useCartStore } from '@/stores/cart';
import { RouterLink } from 'vue-router';
import { useTheme } from 'vuetify'
export default {
  setup (){
        const theme = useTheme()

        return {
            theme,
            toggleTheme: () => theme.global.name.value =
            theme.global.current.value.dark ? 'light' : 'dark'
        }
    },
    computed: {
        itemsCount() {
          const cartStore = useCartStore();
          return cartStore.cartItemsCount;
        }
    }
    
}
</script>
<template>
    <v-app-bar flat>
        <v-container class="mx-auto d-flex align-center justify-center">
          <v-avatar
            class="me-4 "
            color="grey-darken-1"
            size="32"
          ></v-avatar>
    
          <v-btn @click="toggleTheme">toggle theme</v-btn>
    
          <RouterLink to="/" custom v-slot="{navigate}">
            <v-btn variant="text" @click="navigate">
              Home
            </v-btn>
          </RouterLink>
          <RouterLink to="/cart" custom v-slot="{navigate}">
            <v-badge :content="itemsCount" :model-value="itemsCount > 0" color="orange-lighten-2">
              <v-btn variant="text"  @click="navigate">
                Cart
              </v-btn>
            </v-badge>
          </RouterLink>
          <RouterLink to="/about" custom v-slot="{navigate}">
            <v-btn variant="text"  @click="navigate">
              About
            </v-btn>
          </RouterLink>
    
          <v-spacer></v-spacer>
    
          <v-responsive max-width="160">
            <v-text-field
              density="compact"
              flat
              hide-details
              label="Search"
              rounded="lg"
              single-line
              variant="solo-filled"
            ></v-text-field>
          </v-responsive>
        </v-container>
      </v-app-bar>
</template>