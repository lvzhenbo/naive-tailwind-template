<template>
  <NLayout content-style="min-height: 100vh">
    <NLayoutHeader bordered>
      <div class="p-4">
        <div class="flex items-center">
          <div>
            <img alt="Naive logo" src="../assets/logo.svg" width="25" height="25" />
          </div>
          <div class="ml-4">
            <NGradientText size="20"> 一个简单的 Naive UI + TailwindCSS 的模板 </NGradientText>
          </div>
        </div>
      </div>
    </NLayoutHeader>
    <NLayoutContent>
      <div> 一个简单的 Naive UI + TailwindCSS 的模板 </div>
    </NLayoutContent>
    <NLayoutFooter position="absolute">
      <div class="flex justify-center"> Footer </div>
    </NLayoutFooter>
  </NLayout>
</template>

<script setup lang="ts"></script>

<style scoped></style>
