<script setup lang="ts"></script>

<template>
  <div class="relative w-full h-full overflow-hidden">
    <div class="github absolute bottom-0 right-0 z-900 w-300px h-28px bg-#fff flex justify-center items-center">
      <a href="https://github.com/YuFengjie97/nova" target="_blank">
        Star Me
        <img src="@/assets/img/github.png" class="w-20px h-20px m-l-10px" alt="">
      </a>
    </div>
    <router-view />
  </div>
</template>

<style scoped lang="less">
.github{
  transform-origin: center;
  transform:translate(33%, -100%) rotate(-45deg) ;
  box-shadow: 0 0 2px #eee;
  transition: box-shadow .3s;
  a {
    color: #000;
    text-decoration: none;
  }
  &:hover {
    box-shadow: 0 0 15px #eee;
  }
}
</style>
