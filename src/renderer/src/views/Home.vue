<script setup lang="ts">
import { loginService } from '@api/login'
import { useRouter } from 'vue-router'
import { useStore } from '@store'
const route = useRouter()
const store = useStore()
const gotoList = () => {
  route.push({
    path: '/list'
  })
}
const handleLogin = async () => {
  const data = {
    password: "1899ddee9d860a0c452dd91844cb7a1c",
    username: "6a89e60b1231d61d4bf89a08e4fc6229",
    key: "123",
    captcha: "2f3j"
  }
  const res = await loginService(data)
  console.log(res);
}
const handleCount = (val) => {
  store.changeCount(val)
}
</script>
<template>
  <div>这里是Home首页</div>
  <button @click="handleCount('minus')">-</button>
  <span>{{ store.count }}</span>
  <button @click="handleCount('add')">+</button>
  <button @click="gotoList">跳转</button>
  <button @click="handleLogin">登录</button>
</template>
