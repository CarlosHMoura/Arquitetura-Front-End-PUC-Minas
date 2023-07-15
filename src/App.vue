<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from "./components/Header.vue"
import usePageRequests from './utils/usePageRequests'

const {isLoading} = usePageRequests()

</script>

<template>
  <Header> </Header>

  <RouterView />

  <div v-if="isLoading" >Carregando...</div>
</template>

<style scoped>

</style>
