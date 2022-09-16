<script setup lang="ts">
import {ref} from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>
<template>
  <div>
    <h1>首页</h1>
    <p>{{count}}</p>
  </div>
</template>

<style lang="scss" scoped>

</style>
