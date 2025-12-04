# 陪诊系统

一个基于Vue 3构建的陪诊服务平台，包含H5移动端和管理端两个部分，提供陪诊服务的预约、管理等功能。

## 技术栈

### 前端框架
- **Vue 3** - 渐进式JavaScript框架
- **Vite** - 下一代前端构建工具

### 组件库
- **H5端**：Vant 4 - 轻量、可靠的移动端Vue组件库
- **管理端**：Element Plus - 基于Vue 3的桌面端组件库

### 路由与状态管理
- **Vue Router 4** - Vue官方路由管理器
- **Vuex 4** - Vue官方状态管理库

### 其他依赖
- **axios** - 基于Promise的HTTP客户端
- **vuex-persistedstate** - Vuex状态持久化插件
- **unplugin-vue-components** - Vue组件自动导入插件
- **unplugin-auto-import** - Vue API自动导入插件（管理端）

## 项目结构

```
陪诊系统/
├── pzH5/                # H5移动端
│   ├── public/          # 静态资源
│   ├── src/
│   │   ├── api/         # API接口
│   │   ├── assets/      # 资源文件
│   │   ├── components/  # 组件
│   │   ├── pages/       # 页面
│   │   ├── router/      # 路由配置
│   │   ├── utils/       # 工具函数
│   │   ├── App.vue      # 根组件
│   │   ├── main.js      # 入口文件
│   │   └── style.css    # 全局样式
│   ├── index.html       # HTML模板
│   ├── package.json     # 依赖配置
│   └── vite.config.js   # Vite配置
└── pzadmin/             # 管理端
    ├── public/          # 静态资源
    ├── src/
    │   ├── api/         # API接口
    │   ├── assets/      # 资源文件
    │   ├── components/  # 组件
    │   ├── router/      # 路由配置
    │   ├── store/       # Vuex状态管理
    │   ├── utils/       # 工具函数
    │   ├── views/       # 页面
    │   ├── App.vue      # 根组件
    │   ├── main.js      # 入口文件
    │   └── style.css    # 全局样式
    ├── index.html       # HTML模板
    ├── package.json     # 依赖配置
    └── vite.config.js   # Vite配置
```

## 功能特点

### H5移动端
- **用户登录** - 基于token的身份验证
- **首页展示** - 轮播图、快捷入口、医院列表
- **订单管理** - 订单列表、订单详情
- **个人中心** - 用户信息管理
- **订单创建** - 选择医院和服务类型创建订单

### 管理端
- **管理员登录** - 权限验证
- **控制台** - 系统统计数据展示
- **权限管理** - 账号管理、菜单管理
- **陪护师管理** - 陪护师信息创建和修改
- **订单管理** - 订单状态跟踪和管理
- **动态菜单** - 基于后端返回的菜单数据动态生成路由

## 快速开始

### 安装依赖

#### H5移动端
```bash
cd pzH5
npm install
```

#### 管理端
```bash
cd pzadmin
npm install
```

### 运行项目

#### H5移动端
```bash
npm run dev
```
访问 http://localhost:5500

#### 管理端
```bash
npm run dev
```
访问 http://localhost:5173

### 构建项目

#### H5移动端
```bash
npm run build
```

#### 管理端
```bash
npm run build
```

## 项目亮点

### 1. 现代化技术栈
- 采用Vue 3 + Vite的组合，提供更快的开发体验和构建性能
- 使用最新的Vue 3特性，如Composition API、Teleport等
- 组件库合理选择，H5端使用Vant，管理端使用Element Plus

### 2. 优秀的架构设计
- 清晰的前后端分离架构，通过API进行通信
- 模块化设计，代码结构清晰，便于维护和扩展
- 实现了基于token的身份验证和路由守卫，保证系统安全

### 3. 高级特性实现
- **动态路由加载**：管理端实现了基于后端返回的菜单数据动态生成路由的功能
- **路由组件懒加载**：使用import.meta.glob实现了组件的动态导入，优化首屏加载速度
- **网络请求拦截**：实现了请求/响应拦截器，统一处理token和错误
- **状态持久化**：管理端使用vuex-persistedstate实现状态持久化，提升用户体验

### 4. 用户体验优化
- H5端采用响应式设计，适配各种移动端屏幕
- 管理端提供了完整的权限管理功能，支持不同角色的权限控制
- 统一的错误处理和用户提示，提升系统的可用性

### 5. 代码质量保障
- 组件化开发，提高代码复用性
- 统一的代码规范和命名约定
- 清晰的注释和文档

## 贡献指南

欢迎提交Issue和Pull Request来帮助改进这个项目！

## 许可证

MIT License
