<script setup lang="ts">
import { onMounted, ref } from 'vue'
const count = ref(0);
function increase(){
    count.value += 1;
}
onMounted(function () {
    console.log('El valor inicial del contador es: ' + count.value)
});
</script>


<template>
    <p>Hola soy la version con Composition API</p>
    <h1>Contador: {{ count }}</h1>
    <button @click="increase">
        Incrementar el valor de count en 1
    </button>
</template>