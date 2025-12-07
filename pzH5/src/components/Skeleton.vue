<template>
  <div class="skeleton-wrapper">
    <!-- 骨架屏内容根据props动态生成 -->
    
    <!-- 头像骨架 -->
    <div v-if="avatar" class="skeleton-item skeleton-avatar"></div>
    
    <!-- 标题骨架 -->
    <div v-if="title" class="skeleton-item skeleton-title"></div>
    
    <!-- 内容骨架 -->
    <div v-if="content" class="skeleton-content">
      <div v-for="i in content" :key="i" class="skeleton-item skeleton-line"></div>
    </div>
    
    <!-- 图片骨架 -->
    <div v-if="image" class="skeleton-item skeleton-image"></div>
  </div>
</template>

<script setup>
// 定义组件属性
const props = defineProps({
  // 是否显示头像骨架
  avatar: Boolean,
  // 是否显示标题骨架
  title: Boolean,
  // 内容骨架的行数
  content: [Number, Boolean],
  // 是否显示图片骨架
  image: Boolean
});
</script>

<style scoped>
.skeleton-wrapper {
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
}

.skeleton-item {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  margin-bottom: 12px;
  border-radius: 4px;
}

.skeleton-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-bottom: 16px;
}

.skeleton-title {
  width: 60%;
  height: 20px;
  margin-bottom: 16px;
}

.skeleton-content {
  width: 100%;
}

.skeleton-line {
  height: 16px;
  margin-bottom: 8px;
  width: 100%;
}

.skeleton-line:nth-child(2) {
  width: 80%;
}

.skeleton-line:nth-child(3) {
  width: 60%;
}

.skeleton-image {
  width: 100%;
  height: 200px;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>