
<script lang="ts">
import type { PropType } from 'vue';
import type { CartDetail } from '../model/Types'
import { useCartStore } from '@/stores/cart';
export default {
   computed: {
      details() {
         const cartStore = useCartStore();
         return cartStore.details;
      }
   }
 /* props: {
    details: {
      type: Object as PropType<Array<CartDetail>>,
      required: true
    }
  },*/
}
</script>


<template>
  <v-card class="mt-4 ml-4 mr-4">
    <v-card-title>
      <p>Productos agregados al carrito:</p>
    </v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item  v-for="detail in details" :value="detail.productId">
          <v-list-item-title>
            Product: {{ detail.productId }} 
            (Qty:{{ detail.quantity }})
          </v-list-item-title>
        </v-list-item>
      </v-list>
      
     <!-- <ul>
        <li v-for="detail in details">
          Product: {{ detail.productId }} (Qty:{{ detail.quantity }})
        </li>
      </ul>-->
    </v-card-text>
  </v-card>
</template>