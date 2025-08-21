<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const goHome = () => {
  router.push('/')
}
</script>
<template>
  <router-view></router-view>
  <button className="back-btn" @click="goHome">返回按钮</button>
</template>

<style lang="scss">
.back-btn {
  margin-top: 30px;
  color: red;
}
</style>
