<template>
  <el-card class="box-card">
    <!-- 1 面包屑 -->
    <!-- 首页/用户管理/用户列表 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 2 搜索 -->
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="query" class="inputSearch">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button type="success">成功按钮</el-button>
    </div>

    <!-- 3 表格 -->

    <!-- 4 搜索 -->
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      query: "",
    };
  },
};
</script>

<style>
.inputSearch{
  width: 500px;
}
</style>