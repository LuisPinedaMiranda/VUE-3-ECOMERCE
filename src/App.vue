<script lang="ts">
import { RouterView } from 'vue-router'
import TopBar from './components/TopBar.vue'

export default{
  components: {
      TopBar
    },
 
    
  /*data(){
    return {
      details: [{productId: 5, quantity: 3}]
    }
  }*/

}

</script>

<template>
  <!-- <header>
    
  <div class="wrapper">
      <HelloWorld msg="Lo hiciste a la verga!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/cart">Cart</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> 
  </header>--> 

 <v-app>
  <TopBar/>
  <v-main>
   <v-container>
      <RouterView /> <!--:details="details" antes se pasaban los props hacia HomeView y CartView mediante el RouterView porque el estado lo gestionaba este componente App pero se quitó porque ahora lo hace el store-->
    </v-container>
  </v-main>
 </v-app>
</template>

