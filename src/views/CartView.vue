<script lang="ts">
 import Cart from '../components/Cart.vue'
export default {
  components:{
    Cart
  },
 // props: ['details'] Pasa lo mismo, ya no se necesitan los props que se pasavan desde "RouterView" porque ahora ocupamos store con pinia
}
</script>
<template>
  <Cart></Cart><!--:details="details" pasa lo mismo ya no necesitamos los props-->
</template>