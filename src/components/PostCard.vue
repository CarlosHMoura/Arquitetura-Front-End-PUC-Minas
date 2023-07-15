<template>
    <article class="article-recent">
        <div class="article-recent-main">
          <h2 class="article-title">{{ post.title }}</h2>
          <p class="article-body">{{ post.body }}</p>
          <a 
            href="#"
            name="article_read_more_1"
            class="article-read-more"
            rel= "noopener noreferrer"
          >Continue Lendo
          </a>
        </div>
        <div class="article-recent-secondary">
          <img 
            src="../assets/post.jpg" 
            alt="POST IMAGE"  
            name="article_image_1" 
            class="article-image"
          />
          <p class="article-info">
            <span>Julho, 2023</span> &nbsp;|&nbsp; <span>3 comentários</span>
          </p>
        </div>
      </article>
</template>

<script setup lang="ts">
const props = defineProps({
post: Object,
});
const post = { ...props.post };

console.log(post)
</script>

<style scoped>
.article-body a { 
    display: inline;
    text-decoration: underline; 
}
.article-body a:hover,
.article-body a:focus
{ font-style: italic; }
.article-body a:active { text-decoration: initial; }
.article-recent {
  display: flex;
  flex-flow: column;
  margin-bottom: var(--space);
}
.article-recent-main { order: 2; }
.article-recent-secondary { order: 1; }

@media (min-width: 675px) {
  .article-image { order: -2; }
  .article-info { order: -1; }
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
    