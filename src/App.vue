<template>
  <div id="app">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="可视化展示前端框架及插件" name="1">
        <div>vue-cli3搭建项目基础框架--vue-cli3</div>
        <div>element-ui前端UI框架--2.12.0</div>
        <div>router路由管理--3.0.3</div>
        <div>vuex状态管理--3.0.1</div>
        <div>axios网络请求--0.19.0</div>
        <div>echarts图表展示--4.3.0</div>
        <div>animate动画--3.7.2</div>
        <div>normalize统一浏览器的初始化样式--8.0.1</div>
        <div>node版本--8.16.0+</div>
        <div>npm版本--6.4.1+</div>
        <div>webpack</div>
        <div>cesium</div>
      </el-collapse-item>
    </el-collapse>
    <router-view/>
  </div>
</template>
<script>
import * as API from 'api/index.js'
export default {
  name:"App",
  data(){
    return {
      activeName:'1'
    }
  },
  components:{},
  mounted(){
    API.con.getConflictType().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
<style>
@import 'style/css/base.css';
#app{
  margin: 40px;
}
#app .el-collapse-item__header{
  font-weight: 600;
  font-size: 26px;
  background: #eeeeee;
}
#app .el-collapse-item__content{
  padding-left: 15px;
  font-size: 20px;
}
</style>
