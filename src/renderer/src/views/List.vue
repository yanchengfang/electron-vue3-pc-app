<script setup lang="ts">
// import electron from 'electron'
const openChat = () => {
  electron.ipcRenderer.invoke('ws', {
    name: 'zoyi',
    age: 18
  })
}
const download = () => {
  console.log(electron)
}
</script>
<template>
  <div class="menu">
    <router-link to="/list/foods">食物</router-link>
    <router-link to="/list/clothes">衣服</router-link>
  </div>
  <router-view></router-view>
  <div>这里是list组件</div>
  <button @click="openChat">聊天</button>
  <button @click="download">下载</button>
</template>
<style lang="scss">
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}
</style>
