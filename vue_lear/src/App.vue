<template>
  <div id="app">
<!--    <img src="./assets/logo.png" alt="">-->
<!--    <HelloWorld/>-->
<!--    <Test/>-->
<!--    <login-view/>-->
<!--    <todo-list/>-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Test from './components/Test'
import TodoList from './components/TodoList'
import LoginView from './components/LoginPage'
export default {
  name: 'App',
  components: {TodoList, Test, LoginView, HelloWorld},
  comments: {
    HelloWorld,
    Test
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    padding: 0;
  }
</style>
