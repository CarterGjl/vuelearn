<template>
  <div>
    <img src="../assets/logo.png" alt="">
    <div class="wrap">
      <div id="login_frame">
        <form method="post">
          <p><label class="label_input">用户名</label><input type="text" id="username" class="text_field" v-model="userName"/></p>
          <p><label class="label_input">密码</label><input type="password" id="password" class="text_field" v-model="pwd" @keydown.enter="login"/></p>
          <div id="login_control">
            <input type="button" id="btn_login" value="登录" @click="login"/>
            <div id="forget_pwd" @click="gotoForget">忘记密码？</div>
          </div>
        </form>
      </div>
      <div>
        {{info}}
      </div>
      <div>
        {{test}}
      </div>
    </div>
  </div>

</template>

<!--suppress JSUnusedGlobalSymbols -->
<script>
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
const giveMeOne = async () => 'this is for you '
// eslint-disable-next-line no-unused-vars
async function get () {
  return giveMeOne()
}
export default {
  name: 'LoginPage',
  data: function () {
    return {
      userName: '',
      pwd: '',
      info: '',
      test: ''
    }
  },
  methods: {
    gotoForget: function () {
      this.$router.push('/forget')
    },
    login: function () {
      // var username = document.getElementById('username')
      // var pass = document.getElementById('password')
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => {
          this.info = response
        })
      if (this.userName === '') {
        alert('请输入用户名')
      } else if (this.pwd === '') {
        alert('请输入密码')
      } else if (this.userName === 'admin' && this.pwd === '123456') {
        this.$router.push('/welcome')
        // window.open('../welcome.html')
        // window.location.href = '../welcome.html'
      } else {
        alert('请输入正确的用户名和密码！')
      }
    }
  },
  mounted () {
    get().then()
    giveMeOne().then(
      result => {
        this.test = result
        console.log(`getresult ${result}`)
      }
    )
  }
}
</script>

<style scoped>
  body {
    /*background-image: url("images/login/loginBac.jpg");;*/
    /*background-size: 100%;*/
    /*background-repeat: no-repeat;*/
  }
  .wrap{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #login_frame {
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 400px;
    height: 260px;
    padding: 13px;
    background: red;
    display: flex;
    top: 50%;
    /*background-color: rgba(240, 255, 255, 0.5);*/

    border-radius: 10px;
    text-align: center;
  }

  form p > * {
    display: inline-block;
    vertical-align: middle;
  }

  #image_logo {
    margin-top: 22px;
  }

  .label_input {
    font-size: 14px;
    font-family: 宋体,serif;

    width: 65px;
    height: 28px;
    line-height: 28px;
    text-align: center;

    color: white;
    background-color: #3CD8FF;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .text_field {
    width: 278px;
    height: 28px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border: 0;
  }

  #btn_login {
    font-size: 14px;
    font-family: 宋体,serif;

    width: 120px;
    height: 28px;
    line-height: 28px;
    text-align: center;

    color: white;
    background-color: #3BD9FF;
    border-radius: 6px;
    border: 0;

    float: left;
  }

  #forget_pwd {
    font-size: 12px;
    color: white;
    text-decoration: none;
    position: relative;
    float: right;
    top: 5px;

  }

  #forget_pwd:hover {
    color: blue;
    text-decoration: underline;
  }

  #login_control {
    padding: 0 28px;
  }
</style>
