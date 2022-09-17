<template>
  <div>
    <el-form ref="form" :model="loginForm" :rules="rules" class="loginContainer">
      <h3>系统登录</h3>
      <el-form-item prop="username">
        <el-input type="text" auto-complete="false" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <!-- auto-complete是自动补全-->
        <el-input type="password" auto-complete="false" v-model="loginForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input type="text" auto-complete="false" style="width: 250px;margin-right: 5px" v-model="loginForm.code" placeholder="点击图片更换验证码"></el-input>
        <img :src="captchaUrl" alt="" >
      </el-form-item>
      <el-checkbox v-model="checked" style="">记住我</el-checkbox>
      <el-button type="primary" style="width: 100%" @click="submit">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      loginForm:{
        username: 'admin',
        password: '123456',
        code: '',
      },
      checked: true,
      captchaUrl: null,
      rules:{
        username: [{required:true,message:'请输入用户名',trigger:'blur'}],
        password: [{required:true,message:'请输入密码',trigger:'blur'}],
        code: [{required:true,message:'请输入验证码',trigger:'blur'}]
      }
    }
  },
  methods:{
    submit(){
      alert('aaa')
    }
  }
}
</script>

<style>
  h3{
    text-align: center;
  }
  .loginContainer{
    border-radius: 15px;
    background-clip: padding-box;
    /* auto表示空间在父组件中居中 */
    margin: 180px auto;
    width: 350px;
    padding: 15px 35px 15px 35px;
    background-color: #ffffff;
    border: 1px solid #9e9e9e;
    box-shadow: 0 0 25px #9e9e9e;
  }
</style>