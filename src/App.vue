<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
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
        <v-btn variant="text"  @click="navigate">
          Cart
        </v-btn>
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
  <v-main>
    <v-container>
      <RouterView />
    </v-container>
  </v-main>
 </v-app>
</template>

