<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <img src="../../assets/image/shangbiao.jpg" alt="无法显示图片" />
          </div>
        </el-col>
        <el-col :span="18" class="middle">
          <h2>华超电子科技后台管理系统</h2>
        </el-col>
        <el-col :span="2" class="loginout">
          <div class="grid-content bg-purple" @click.prevent="handlesignout()">退出</div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px" class="aside">
        <!-- 侧边栏导航el-menu  -->
        <!-- 添加路由 -->
        <el-menu 
        :router="true"
        :unique-opened="true"
        >
          <!-- 1 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="users">
                <i class="el-icon-location"></i>用户列表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 2 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-platform"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i class="el-icon-location"></i>选项1
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 3 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-home"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i class="el-icon-location"></i>商品列表
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i class="el-icon-location"></i>分类参数
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i class="el-icon-location"></i>商品分类
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 4 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-s-shop"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i class="el-icon-location"></i>选项1
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 5 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-check"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i class="el-icon-location"></i>选项1
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 6 -->
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>设置中心</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i class="el-icon-location"></i>选项1
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  // 如果有token,则继续执行组件渲染加载,
  // 如果没有,则跳转到登录
  // 如何在组件渲染之前执行验证,那么创建vue实例是mount方法执行
  // 所以要在new vue之前执行验证 =>beforeCreate
  beforeCreate() {
    // 获取token
    const token = localStorage.getItem("token");
    // console.log(token);
    if (!token) {
      this.$router.push({ name: "login" });
    } else {
    }
  },
  methods: {
    //   点击退出
    handlesignout() {
      //   清除token
      localStorage.clear();
      // 提示消息
      this.$message.success("退出成功");
      // 跳转登录
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style>
.container {
  height: 100%;
}
.header {
  background-color: #b3c0d1;
}
.header img {
  width: 150px;
  /* height: 100%; */
}
.aside {
  background-color: #d3dcd6;
}
.main {
  background-color: #e9eef3;
}
.middle {
  text-align: center;
}
.loginout {
  line-height: 60px;
}
</style>