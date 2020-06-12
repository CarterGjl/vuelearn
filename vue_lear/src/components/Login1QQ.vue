<template>
  <div class="login_page">
    <section class="form_container">
      <div class="manage_tip">
        <p>第一个后台管理系统</p>
      </div>
      <el-form>
        <el-form-item prop="username">
          <el-input v-model="userName" placeholder="用户名">
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="pwd" type="password" placeholder="密码" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="submit_btn">登陆</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Login1',
  data () {
    return {
      userName: '',
      pwd: ''
    }
  }
}
</script>

<style scoped>
  body,html{
    width: 100%;
    height: 100%;
    margin: 0;
  }
  .el-menu{
    border: none;
  }
  .login_page{
    background: #324057;
    width: 100%;
    height: 100%;
  }
  .form_container{
    width: 320px;
    height: 180px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -105px;
    margin-left: -180px;
    padding: 25px;
    border-radius: 5px;
    text-align: center;
    background-color: #ffb850;
  }
  .submit_btn{
    margin-top: 20px;
  }
</style>
