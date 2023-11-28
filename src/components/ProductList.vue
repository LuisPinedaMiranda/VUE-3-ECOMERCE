<script  lang="ts">
import type { Product } from '../model/Types';
//import type { CartDetail } from '../model/Types';
import ProductCard from './ProductCard.vue';
import Cart from './Cart.vue'
import { useTheme } from 'vuetify'
import { useCartStore } from '@/stores/cart';


//Dentro de nuestra data tenemos un objeto que define el estado de nuestro componente
//El objeto products
export default {
    setup (){
        const theme = useTheme()

        return {
            theme,
            toggleTheme: () => theme.global.name.value =
            theme.global.current.value.dark ? 'light' : 'dark'
        }
    },
    components:{
        ProductCard,
        Cart
    },
    props:['details'],
    data() {
        return {
            products:<Array<Product>>[
                {name: 'Silla', price: 56, id: 1},
                {name: 'Monitor', price: 450, id: 2},
                {name: 'Microfono',price: 120, id: 3},
                {name: 'Silla', price: 56, id: 1},
                {name: 'Monitor', price: 450, id: 2},
                {name: 'Microfono',price: 120, id: 3},
            ],
           // details:<Array<CartDetail>>[]
        }
    },
    methods: {
        onAddProduct(productId:number){
            //console.log("Agregar producto" + productId);
            const detailFound = this.details.find(d => d.productId === productId)
            //console.log(detailFound); la primera vez aparecerá undefined y la segunda el objeto con el que coincide
            if(detailFound){
                detailFound.quantity += 1;
            }else{
                this.details.push({
                productId,
                quantity: 1
            });
            }
        } 

    
    },
}
</script>

<template>
   
        <v-btn @click="toggleTheme">toggle theme</v-btn>
        ...
     <v-row>
        <v-col  v-for="p in products" cols="4">
            <ProductCard 
               :product="p"
               @addProduct="onAddProduct(p.id)">
              </ProductCard>
        </v-col>
     </v-row>
   

     <!--aquí antes estaba el prop :details="details"-->
   <!--<Cart></Cart>--> 
    
       <!--
        <li v-for="product in products">
            {{ product.name }} ($ {{ product.price }})
        </li>
       --> 
       
  
</template>