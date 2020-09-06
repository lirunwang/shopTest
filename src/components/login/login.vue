<template>
  <div class="login-wrap">
    <el-form class="login-form" label-position="top" label-width="80px" :model="formdata">
      <h2>华超电子后台登录系统</h2>
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
      <el-button type="primary" class="login-btn" @click.prevent="handleLogin()">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formdata: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    // 登录请求
    async handleLogin() {
      // 希望让异步操作看起来像同步代码一样
      // 此时用到ES7语法提供的  async + await
        const res = await this.$http.post("login", this.formdata)
        // .then((res) => {  //不要
        console.log(res);

        // 获取想要的数据
        const {
          data,
          meta: { msg, status },
        } = res.data;
        if (status === 200) {
          // 成功，登录跳转home，提示登录成功
          // 跳转home,去找组件,js编程时导航
          this.$router.push({name:'home'})
          // 去创建home组件
          // 实现提示弹窗
          this.$message.success(msg);
        }else{
          // 失败 ,提示消息
          this.$message.warning(msg);
        }
     
      // ----------------------相当于下面------------------------
      // this.$http.post("login", this.formdata).then((res) => {
      //   console.log(res);

      //   // 获取想要的数据
      //   const {
      //     data,
      //     meta: { msg, status },
      //   } = res.data;
      //   // const {data,meta:obj}=res.data
      //   // const {meta:msg:"11",status:290}}
      //   // =>obj
      //   // {msg,status}={msg:"11",status:290}
      //   // =>msg:11,status：290
        
      //   if (status === 200) {
      //     // 成功，登录跳转home，提示登录成功
      //     // 跳转home,去找组件,js编程时导航
      //     this.$router.push({name:'home'})
      //     // 去创建home组件
      //     // 实现提示弹窗
      //     this.$message.success(msg);
      //   }else{
      //     // 失败 ,提示消息
      //     this.$message.warning(msg);
      //   }

      // });
      // --------------------------
     
    },
  },
};
</script>

<style>
.login-wrap {
  height: 100%;
  background-color: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrap .login-form {
  width: 500px;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
}
.login-wrap .login-btn {
  width: 100%;
}
</style>