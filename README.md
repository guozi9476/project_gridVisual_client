# 数据挖潜项目 可视化展示前端框架

## 下载安装依赖包
```
npm install  
```

### 以开发模式运行项目
```
npm run serve
```

### 构建打包
```
npm run build
```

### 使用eslint+standard格式化代码
```
npm run lint
```

### vue-cli配置文档
See [Configuration Reference](https://cli.vuejs.org/config/).

### 项目开发配置说明

1. 修改src/setting.js中的DEVELOP_PROJECT_NAME变量为开发时的项目名

### 项目部署配置说明

1. 修改src/setting.js中的RELEASE_PROJECT_NAME变量为需要部署的项目名
    部署项目创建一个git tag标签，部署项目名称加release和版本号，如：cityPlanDev-release-v1.0.0

### 项目结构说明

1. api 存放api接口请求封装

2. assets 存放静态资源，包括图片、字体库等

3. components 存放组件

4. icons svg与字体图标加载配置

5. layout 页面布局

6. map 存放地图相关文件

7. router 存放路由配置

8. store 存放vuex配置

9. styels 存放样式文件

10. utils 存放工具js文件

11. view 存放视图文件

### 系统功能页面，根据具体系统自行命名，功能模块的组件放在其下的components目录下

### api说明

ajax请求使用axios [github地址](https://github.com/axios/axios)

1. 系统所有的请求api都写到src/api下
    

2. 在vue或js中使用 import * as API from 'api/index.js'全部引入，也可以引入单个api模块，调用接口如： API.situation.search(params), params为参数对象

3. api接口函数命名规范，驼峰命名法
    * 获取数据以fetch开头, 如：fetchFacilitySummanry
    * 更新数据以update开头, 如：updateUserInfo
    * 删除数据以delete开头
    * 添加数据以add开头
    * 搜索数据以search开头，仅用于搜索表单

4. 请求封装在src/utils/request.js

5. 请求提示在src/utils/tips.js