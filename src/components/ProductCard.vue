<script lang="ts">
import type { PropType } from 'vue';
import type { Product } from '../model/Types';
import { useCartStore } from '@/stores/cart';
//Dentro de nuestra data tenemos un objeto que define el estado de nuestro componente
//El objeto products
export default {
   //props:['product'],
   props: {
      product: {
         type: Object as PropType<Product>,
         required: true
      }
   },
   //emits: ['addProduct'], se quita porque este componente ya no va a emitir un evento
   methods: {
      onAddButtonClick() {
         //this.$emit('addProduct'); se elimina esta linea que se encargaba de emitir el evento
         const cartStore = useCartStore();
         cartStore.addProduct(this.product.id);
      }
   }
}
</script>

<template>
   <v-container>
      <v-card>
         <!--<p>Nombre: {{ product.name }}</p>-->
   
         <!--  <button @click="onAddButtonClick">
            Agregar al carrito
         </button> -->
         <!--<p>Precio: {{ product.price }}</p>-->
         <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>
   
         <v-card-title>
            {{ product.name }}
         </v-card-title>
   
         <v-card-text>
            <p class="mb-4">Esta es una descricpión de ejemplo</p>
            <v-chip>
               {{ product.price }}
            </v-chip>
         </v-card-text>
   
         <v-card-actions>
            <v-btn @click="onAddButtonClick" color="orange-lighten-2">
               Agregar al carrito
            </v-btn>
         </v-card-actions>
      </v-card>
      <hr />
   </v-container>
</template>