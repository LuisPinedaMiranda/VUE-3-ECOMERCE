<script  lang="ts">
export default {
    data(){
       return{
         count: 0
       }
    },
    methods:{
      increase(){
        this.count += 1;
      }
    },
    mounted(){
       console.log('El valor inicial del contador es ' + this.count);
    }
}

//setup se agrega solo cuando trabajamos con composition API
</script>

<template>
  <p>Objetivo: Tienes que llegar a 20 clicks</p>
  <h1>Contador: {{count}}</h1>
  <button @click="increase">
    Aumentar Contador
  </button>
  <p v-if="count <= 10">Vamos tu puedes!</p>
  <p v-else>Ya te falta muy poco</p>
</template>