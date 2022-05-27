<template>
    <div>首页</div>
    <h1 class="text-3xl font-bold underline text-violet-800">{{ msg }}</h1>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const msg = ref('Hello,World!');
</script>

<style scoped></style>
