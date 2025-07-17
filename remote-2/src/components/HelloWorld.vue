<script setup lang="ts">
import { ref } from 'vue';
const count = ref(0)
</script>

<template>
  <div class="area">
    <h1>Vite + Vue</h1>

    <div>
      <button class="button-vue" type="button" @click="count++">count is {{ count }}</button>
    </div>
  </div>

</template>

<style scoped>
.area {
  display: flex;
  flex-direction: column;
  gap: 0.5rem
}

.button-vue {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: opacity 0.3s ease;
}

.button-vue:hover {
  opacity: 0.8;
}
</style>
