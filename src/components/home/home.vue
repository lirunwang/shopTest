<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
              <img src="../../assets/image/shangbiao.jpg" alt="无法显示图片">
          </div>
        </el-col>
        <el-col :span="18" class="middle">
          <h2>华超电子科技后台管理系统</h2>
        </el-col>
        <el-col :span="2" class="loginout">
          <div class="grid-content bg-purple">推出</div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px" class="aside">Aside</el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

<style>
.container {
  height: 100%;
}
.header {
  background-color: #b3c0d1;
}
.header img{
    width: 150px;
    /* height: 100%; */
}
.aside {
  background-color: #d3dcd6;
}
.main {
  background-color: #e9eef3;
}
.middle{
    text-align: center;
}
.loginout{
    line-height: 60px;
}
</style>