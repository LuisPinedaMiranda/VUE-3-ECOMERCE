<script  lang="ts"> 
  import ProductList from '@/components/ProductList.vue';
  import CategoryList from '@/components/CategoryList.vue';
  export default{
    components: {
      ProductList,
      CategoryList
    },
    //Antes se recibian los props desde 
   /* propos: ['details'], Ya no se necesitan los details como props porque antes se necesitaban para pasarse al componente Cart todo desde el RouterView desde App como props :details*/
 /* data(){
    return {
      details: [{productId: 5, quantity: 3}]
    }
  }*/
}

</script>

<template>
  <main>
    <v-row>
      <v-col cols="2">
        <CategoryList/>
      </v-col>
      <v-col cols="10">
         <ProductList/> <!--:details="details" Aqupi se encontraban los props para pasar details a ProductList que los envía a Cartc--> 
      </v-col>
    </v-row>
  </main>
</template>
