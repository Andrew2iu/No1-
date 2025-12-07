// 自定义指令集合

// 图片懒加载指令
export const vLazy = {
  mounted(el, binding) {
    // 创建IntersectionObserver实例
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 当图片进入视口时，加载图片
            el.src = binding.value;
            // 图片加载后，停止观察
            observer.unobserve(el);
          }
        });
      },
      {
        // 配置选项：阈值为0表示图片一旦进入视口就触发
        threshold: 0
      }
    );
    
    // 开始观察目标元素
    observer.observe(el);
    
    // 存储observer实例，以便在unmounted时清理
    el._observer = observer;
  },
  unmounted(el) {
    // 组件卸载时，停止观察
    if (el._observer) {
      el._observer.disconnect();
    }
  }
};

// 导出所有指令
export default {
  install(app) {
    app.directive('lazy', vLazy);
  }
};