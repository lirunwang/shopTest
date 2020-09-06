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
    <el-table :data="usersList" style="width: 100%">
      <el-table-column type="index" label="#" width="60"></el-table-column>
      <el-table-column prop="username" label="姓名" width="80"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="mobile" label="电话"></el-table-column>
      <!-- 如何使用全局过滤器filter处理时间 -->
      <!-- 1**管道符不行 ，不支持-->
      <!-- <el-table-column prop="create_time|fmtdate" label="创建时间"></el-table-column> -->
      <!-- 2**插值表达式{{create_time|fmtdate}} -->
      <!-- <el-table-column prop="create_time" label="创建时间">{{create_time|filter}}</el-table-column> -->
      <!-- 3**如果单元格中显示的内容不是字符串（文本），需要给被显示的内容外层包裹一个template -->
      <!-- 当模板的组件传值完成，则以template中的内容为准，所以删掉prop -->
      <!-- <el-table-column prop="create_time|fmtdate" label="创建时间"> -->
      <el-table-column label="创建时间">
        <!-- template内部要用数据，设置slot-scope属性 -->
        <!-- 该属性的值是要用数据的数据源userslist -->
        <!-- slot-scope的值userslist其实就是el-table绑定的数据userslist -->
        <!-- userslist.row数组中的每个对象，usersList.row自带属性 -->
        <!-- <template slot-scope="usersList"> -->
        <!-- slot是自动去找上级的数据源的，所以值也可以是一个任意的字符代替 -->
        <template slot-scope="scope">{{scope.row.create_time|fmtdate}}</template>
      </el-table-column>
      <!-- <el-table-column prop="create_time" label="创建时间"></el-table-column> -->
      <el-table-column prop="mg_state" label="用户状态">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" plain type="primary" icon="el-icon-edit" circle></el-button>
          <el-button size="mini" plain type="success" icon="el-icon-check" circle></el-button>
          <el-button size="mini" plain type="danger" icon="el-icon-delete" circle></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 4 搜索 -->
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      query: "",

      //  创建一个空数组存放获取到的数据
      // 表格绑定的数据
      usersList: [],
      // 分页的数据
      tatal: -1,
      pagenum: 1,
      pagesize: 2,
    };
  },
  created() {
    this.getUsersList();
  },
  methods: {
    getUsersList() {
      // query	查询参数	可以为空
      // pagenum	当前页码	不能为空
      // pagesize	每页显示条数	不能为空

      // 需要授权的 API ，必须在请求头中使用 Authorization 字段提供 token 令牌
      const AUTH_TOKEN = localStorage.getItem("token");
      this.$http.defaults.headers.common["Authorization"] = AUTH_TOKEN;
      this.$http
        // 这里的url要用模板字符串引用,不然会出现查询执行出错,浏览器不报错误
        .get(
          `users?query=${this.query}&pagenum=${this.pagenum}&pagesize=${this.pagesize}`
        )
        .then((res) => {
          // console.log(res);
          // 通过对象解构赋值取到我们需要的值
          const {
            meta: { status, msg },
            data: { users, tatal },
          } = res.data;
          if (status === 200) {
            // 给表格数据赋值
            this.usersList = users;
            // 给分页数据赋值
            this.tatal = tatal;
            // 提示
            this.$message.success(msg);

            // console.log(users);
          } else {
            // 提示
            this.$message.error(msg);
          }
        });
    },
  },
};
</script>

<style>
.inputSearch {
  width: 500px;
}
</style>