<template>
  <main class="sides">
    <div class="page-layout">
      <section class="main-content">
        <PostCard class="card-post" v-for="post in posts" :post="post" />
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import useResource from '../utils/useResource'
import PostCard from "./PostCard.vue";

const {items: posts, fetchAll} = useResource('posts')
fetchAll();

</script>

<style scoped>

@media (min-width: 675px) {

  .card-post {
    border: 1px solid #ccc!important;
    border-radius: 25px;
    padding: 3%;
  }
  .article-image { order: -2; }
  .article-info { order: -1; }
  .article-recent { 
    flex-direction: row; 
    justify-content: space-between;
  }
  .article-recent-main { width: 65%; } 
  .article-recent-secondary { width: 30%; }
  .article-image {
    width: 100%;
    min-height: 250px;
    object-fit: cover;
    object-position: 30%;
  }
  .article-info {
    display: flex;
    flex-flow: wrap;
    
  }
}
</style>
